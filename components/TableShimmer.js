import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CardView from '../components/CardView';
const Item = props => {
    return (
        <CardView style={styles.container}>
            <View style={{ width: "30%", height: "100%", justifyContent: "center" }}>
                <View style={{ display: "flex", flexDirection: "row", borderRightWidth: 1, borderRightColor: "rgba(118,168,247,0.3)", height: "100%", alignItems: "center",marginLeft: 5, }}>
                    <View style={{width: 30,height: 25, backgroundColor: "rgba(196,196,196,0.4)"}}></View>
                    <View style={{ width: 40,height:10, backgroundColor: "rgba(142,180,241,0.5)", marginLeft: 5,}}>
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: "center", borderRightWidth: 1, borderRightColor: "rgba(118,168,247,0.5)", width: "25%" }}>
                <View style={{width: 50, height: 10,backgroundColor: "rgba(76,154,80,0.4)", marginLeft: 5,}}></View>
            </View>
            <View style={{ justifyContent: "center", borderRightWidth: 1, borderRightColor: "rgba(118,168,247,0.3)", width: "20%" }}>
                <View style={{width: 30,height: 10,marginLeft: 5, backgroundColor: "rgba(234,110,108,0.5)" }}></View>
            </View>
            <View style={{ justifyContent: "center", borderRightWidth: 1, borderRightColor: "rgba(118,168,247,0.3)", width: "25%" }}>
                <View style={{width: 45, height: 10, marginLeft: 5, backgroundColor: "rgba(82,207,42,0.3)" }}></View>
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
});

const TableShimmer = props => {
    return <View style={{width: "100%"}}>
        <Item />
        <View style={{width: "100%", height: 0.5, backgroundColor: "rgba(1,1,1,0.2)"}}></View>
        <Item />
        <View style={{width: "100%", height: 0.5, backgroundColor: "rgba(1,1,1,0.2)"}}></View>
        <Item />
        <View style={{width: "100%", height: 0.5, backgroundColor: "rgba(1,1,1,0.2)"}}></View>
        <Item />
        <View style={{width: "100%", height: 0.5, backgroundColor: "rgba(1,1,1,0.2)"}}></View>
        <Item />
        <View style={{width: "100%", height: 0.5, backgroundColor: "rgba(1,1,1,0.2)"}}></View>
        <Item />
        <View style={{width: "100%", height: 0.5, backgroundColor: "rgba(1,1,1,0.2)"}}></View>
        <Item />
        <View style={{width: "100%", height: 0.5, backgroundColor: "rgba(1,1,1,0.2)"}}></View>
    </View>
}

export default TableShimmer;