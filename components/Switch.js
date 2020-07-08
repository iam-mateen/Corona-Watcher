import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as homeActions from '../store/actions/HomeAction';
import { useDispatch } from 'react-redux';
const Switch = (props) => {

    const [globalSelected, setGlobalSelected] = useState(true);
    const coordinates = useRef({ lat: 31.4849775, long: 74.0542001 });

    const dispatch = useDispatch();
    const switcher = async (e) => {
        props.changeLoading(true);
        if (getLocation()) {
            if (globalSelected) {
                setGlobalSelected(false);
                try {
                    await dispatch(homeActions.getCurrentCountryCases(coordinates.current.lat, coordinates.current.long))
                } catch (e) {
                    props.showError();
                }
                props.changeLoading(false);
            }
            else {

                setGlobalSelected(true);
                try {
                    await dispatch(homeActions.getGlobalCases())
                } catch (e) {
                    props.showError();
                }
                props.changeLoading(false);
            }
        }
    }

    const getLocation = async () => {
        let isGranted;
        await (async () => {
            try {
                let { status } = await Location.requestPermissionsAsync();
                if (status != "granted")
                    isGranted = false;
                else {
                    const { latitude, longitude } = (await Location.getCurrentPositionAsync({}))["coords"];
                    coordinates.current = { lat: latitude, long: longitude };
                    isGranted = true;
                }
            } catch (e) {
                isGranted = false;
            }
        })();
        return isGranted;
    }
    return (
        <View style={styles.switch}>
            <TouchableOpacity
                onPress={switcher}
                style={globalSelected ? styles.active : styles.inactive}>
                <Text style={globalSelected ? styles.textActive : styles.textInactive}>Global</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={switcher}
                style={globalSelected ? styles.inactive : styles.active}>
                <Text style={globalSelected ? styles.textInactive : styles.textActive}>My Country</Text>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    switch: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        marginHorizontal: 10,
        backgroundColor: "rgba(242,242,242,0.3)",
        borderRadius: 20,
        padding: 3,
    },
    textActive: {
        fontSize: 15, color: 'black', letterSpacing: 1, textAlign: "center"
    },
    textInactive: {
        fontSize: 12, color: 'white', letterSpacing: 1, textAlign: "center"
    },
    active: {
        backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 10, width: "45%", paddingVertical: 10
    },
    inactive: {
        backgroundColor: 'rgba(1,1,1,0)', borderRadius: 20, paddingHorizontal: 10, width: "45%", paddingVertical: 10
    }
});
export default Switch;