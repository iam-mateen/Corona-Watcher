import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CardView from './CardView';
const CaseItem = props => {
 
   
    return (
        <CardView style={{ ...props.containerStyle, ...styles.card }}>
            {props.loading ? <View style={styles.shimmer}></View> : <Text style={{ color: "white", ...props.textStyleOne }}>{props.name}</Text>}
            {props.loading ? <View style={styles.shimmerOne}></View> : <Text style={{ color: "white", ...props.textStyleTwo }}>{props.value}</Text>}
        </CardView>
    );


}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    shimmer: {
        width: "90%",
        height: 15,
        backgroundColor: "rgba(1,1,1,0.2)"
    },
    shimmerOne: {
        width: "60%",
        height: 15,
        backgroundColor: "rgba(1,1,1,0.2)",
    }
});

export default CaseItem;