import React from 'react';
import { Text, View } from 'react-native';

const ChartHolder = props => {
    return <View style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "space-between", padding: 10, }}>
        <View style={{ width: "50%", height: "65%", backgroundColor: "rgba(73,0,178,0.2)",borderWidth: 1, borderColor: "rgba(165,78,123,0.3)" }}>
        </View>
        <View style={{ display: "flex", width: "50%", height: "100%", flexDirection: "column", marginLeft: 10, paddingRight: 10, }}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 20, }}>
                <View style={{ backgroundColor: "#EA9616", width: 15, height: 15, borderRadius: 50 }}></View>
                <View style={{ backgroundColor: "rgba(1,1,1,0.1)", width: "80%", height: 15, }}></View>
            </View>

            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 20, }}>
                <View style={{ backgroundColor: "#D32900", width: 15, height: 15, borderRadius: 50 }}></View>
                <View style={{ backgroundColor: "rgba(1,1,1,0.1)", width: "80%", height: 15, }}></View>
            </View>

            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 20, }}>
                <View style={{ backgroundColor: "#3FC30C", width: 15, height: 15, borderRadius: 50 }}></View>
                <View style={{ backgroundColor: "rgba(1,1,1,0.1)", width: "80%", height: 15, }}></View>
            </View>

            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 20, }}>
                <View style={{ backgroundColor: "#158AF5", width: 15, height: 15, borderRadius: 50 }}></View>
                <View style={{ backgroundColor: "rgba(1,1,1,0.1)", width: "80%", height: 15, }}></View>
            </View>

            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: 20, }}>
                <View style={{ backgroundColor: "#841CCC", width: 15, height: 15, borderRadius: 50 }}></View>
                <View style={{ backgroundColor: "rgba(1,1,1,0.1)", width: "80%", height: 15, }}></View>
            </View>

        </View>
    </View>
}
export default ChartHolder