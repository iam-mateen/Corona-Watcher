import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { formatCommas } from '../utils/utils';
import CardView from '../components/CardView';
const CountryItem = props => {
    const { item,index } = props.data;
    return (
        <CardView style={styles.container}>
            <View style={{ width: "30%", height: "100%", justifyContent: "center" }}>
                <View style={{ display: "flex", flexDirection: "row", borderRightWidth: 1, borderRightColor: "rgba(118,168,247,0.3)", height: "100%", alignItems: "center",marginLeft: 5, }}>
                    <Image style={{ width: 20, height: 20 }} source={{ uri: index == 0 ? "https://img.icons8.com/cotton/2x/worldwide-location.png" : index == 1 ? "https://cahtc.com/wp-content/uploads/2016/11/global-icon.png" : `https://www.countryflags.io/${item.CountryCode}/flat/64.png` }} />
                    <Text style={{ fontSize: 10, marginLeft: 5, color: "#5589DB", fontWeight: "bold", maxWidth: 60, }}>{index == 0 ? "Location" : item.Country == null ? "Global" : item.Country}</Text>
                </View>
            </View>
            <View style={{ justifyContent: "center", borderRightWidth: 1, borderRightColor: "rgba(118,168,247,0.3)", width: "25%" }}>
                <Text style={{ fontSize: 10, marginLeft: 5, color: "#5589DB", }}>{index == 0 ? "Total Cases" : formatCommas(item.TotalConfirmed.toString())}</Text>
            </View>
            <View style={{ justifyContent: "center", borderRightWidth: 1, borderRightColor: "rgba(118,168,247,0.3)", width: "20%" }}>
                <Text style={{ fontSize: 10, marginLeft: 5, color: "#E74340" }}>{index == 0 ? "Total Deaths" : formatCommas(item.TotalDeaths.toString())}</Text>
            </View>
            <View style={{ justifyContent: "center", borderRightWidth: 1, borderRightColor: "rgba(118,168,247,0.3)", width: "25%" }}>
                <Text style={{ fontSize: 10, marginLeft: 5, color: "#50BC21" }}>{index == 0 ? "Total Recovered" : formatCommas(item.TotalRecovered.toString())}</Text>
            </View>
        </CardView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        height: 40,
    }
})

export default CountryItem;