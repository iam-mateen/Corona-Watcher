import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import CardView from '../components/CardView';
import { Feather } from '@expo/vector-icons';

import {formatCommas} from '../utils/utils';
const TopCountryItem = props => {
    const { item } = props.data;
    return (
        <CardView style={{ ...styles.container, }}>
            <View  style={{
                display: "flex", flexDirection: "column", alignItems: "center", flex: 1,
                paddingVertical: 5,
            }}>
                <Image style={{ width: 30, height: 30 }} source={{uri : `https://www.countryflags.io/${item.CountryCode}/flat/64.png`}} />
                <Text style={{textAlign: 'center', fontSize: 12}}>{item.Country}</Text>
                <View style={{ width: "100%", height: 0.5, backgroundColor: "rgba(1,1,1,0.1)", marginTop: 5, }}></View>
                <View style={{ display: "flex", flexDirection: "row", marginTop: 10, }}>
                    <Text style={{ color: "#0085CE", fontSize: 13 }}>{formatCommas(item.TotalConfirmed.toString())}</Text>
                    <Feather name="arrow-up" size={15} style={{ marginLeft: 10, }} color="#0085CE" />
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 12, marginTop: 5, }}>
                    <Text style={{ fontSize: 12, fontWeight: "bold", color: "#C63131" }}>Deaths</Text>
                    <Text style={{ fontSize: 12, textAlign: "center", color: "#373B54" }}>{formatCommas(item.TotalDeaths.toString())}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 12, marginTop: 5, }}>
                    <Text style={{ fontSize: 12, fontWeight: "bold", color: "#42CC46" }}>Recovery</Text>
                    <Text style={{ fontSize: 12, textAlign: "center", color: "#373B54" }}>{formatCommas(item.TotalRecovered.toString())}</Text>
                </View>
            </View>
        </CardView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        width: 150,
        minHeight: 150,
        marginLeft: 10,
        marginRight: 5,
        marginVertical: 10,
        backgroundColor: "#FBFAFB",
        
        
    },
})

export default TopCountryItem;