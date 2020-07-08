import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import TopFiveCuntryItem from '../components/TopCountryItem';
import CountryItem from '../components/CountryItem';
import * as homeActions from '../store/actions/HomeAction';
import Shimmer from '../components/TopFiveShimmer';
import TableShimmer from '../components/TableShimmer';
import Error from '../components/ErrorModal'
const CountriesScreen = props => {
    const countryData = useRef(null);
    const [error, setError] = useState(false);
    const [topFive, setTopFive] = useState(null);
    const { completeData } = useSelector(state => state.home);
    if (completeData != null && topFive == null) {
        setTimeout(() => {
        countryData.current = completeData["Countries"];
        countryData.current.unshift(completeData["Global"]);
        countryData.current.unshift({ TotalConfirmed: "dummy" });

        
            const temp = countryData.current.slice(2, countryData.current.length);
            temp.sort((a, b) => (b.TotalConfirmed).toString() - (a.TotalConfirmed).toString());
            setTopFive(temp.slice(0, 5));
        }, 1000);

    }
    const dispatch = useDispatch();
    const resertError = (e) => {
        setError(false);
        if (e) {
            try {
                (async () => await dispatch(homeActions.getInitalData()))();
            } catch (err) {
                setError(true);
            }
        }
    }
    useEffect(() => {
        try {
            (async () => await dispatch(homeActions.getInitalData()))();
        } catch (err) {
            setError(true);
        }
    }, []);
    return (
        <View style={styles.container}>
            {error && <Error resetError={resertError} />}
            <Header style={styles.header} />
            <ScrollView>
                <View style={styles.main}>
                    <Text style={styles.heading}>Top Countries</Text>
                    <View style={styles.topFive}>
                        {topFive == null ? <Shimmer /> :
                            <FlatList
                                nestedScrollEnabled
                                horizontal={true}
                                data={topFive}
                                showsHorizontalScrollIndicator={false}
                                renderItem={(item, ind) => <TopFiveCuntryItem key={ind} data={item} />}
                                keyExtractor={item => item.CountryCode} />
                        }
                        <Text style={{ marginLeft: 10, color: "#76A8F7", fontSize: 15, fontWeight: "bold" }}>All Countries</Text>
                        <View style={{ height: 2, backgroundColor: "rgba(118,168,247,0.2)", marginTop: 10 }}></View>
                        <View style={styles.countryList}>
                            {countryData.current == null ? <TableShimmer /> :
                                <FlatList
                                    nestedScrollEnabled
                                    data={countryData.current}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={(item, ind) => <CountryItem index={ind} data={item} key={ind} />}
                                    keyExtractor={item => item.CountryCode == null ? (item.TotalConfirmed.toString()) : item.CountryCode}

                                />}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        backgroundColor: "#F6F9FF"
    },
    header: {
        width: "100%",
        height: "15%",
    },
    main: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    heading: {
        fontSize: 18,
        color: "#76A8F7",
        fontWeight: "bold"
    },
    flatList: {
        flex: 1,
    },
    topFive: {
        width: "100%",
    },
    countryList: {
        width: "100%",
        marginTop: 5,
        height: 300,
        marginBottom: 80,
        backgroundColor: "#fff",
    }
})

export default CountriesScreen;