import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import CardView from '../components/CardView';
import { Feather } from '@expo/vector-icons';

import { formatCommas } from '../utils/utils';

const ShimmerItem = () => {
    return <CardView style={{ ...styles.container, }}>
        <View style={{
            display: "flex", flexDirection: "column", alignItems: "center", flex: 1,
            paddingVertical: 5,
        }}>
            <View style={{ width: 30, height: 30, backgroundColor: "rgba(215, 215, 215, 0.5)" }}></View>
            <View style={{ width: 60, height: 10, backgroundColor: "rgba(1,1,1,0.2)", marginTop: 5, }}></View>
            <View style={{ width: "100%", height: 0.5, backgroundColor: "rgba(1,1,1,0.1)", marginTop: 5, }}></View>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 10, alignItems: "center" }}>
                <View style={{ backgroundColor: "rgba(163,203,205,0.6)", width: 60, height: 10, }}></View>
                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: "rgba(163,203,205,0.5)", marginLeft: 5, }}></View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 12, marginTop: 5, }}>
                <View style={{ width: 45, height: 10, backgroundColor: "rgba(240,128,123,0.5)" }}></View>
                <View style={{ fontSize: 12, textAlign: "center", backgroundColor: "rgba(89,92,111,0.2)", width: 30, height: 10 }}></View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 12, marginTop: 5, }}>
                <View style={{ width: 45, height: 10, backgroundColor: "rgba(120,222,87,0.5)" }}></View>
                <View style={{ fontSize: 12, textAlign: "center", backgroundColor: "rgba(89,92,111,0.2)", width: 30, height: 10 }}></View>
            </View>
        </View>
    </CardView>
}
const Shimmer = props => {
    return (
        <ScrollView flex={1} nestedScrollEnabled>
        <View style={{ display: 'flex', flexDirection: "row" }}>

                <ShimmerItem />
                <ShimmerItem />
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        width: "50%",
        minHeight: 150,
        marginLeft: 10,
        marginRight: 5,
        marginVertical: 10,
        backgroundColor: "#FBFAFB",


    },
})
export default Shimmer;