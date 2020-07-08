import React from 'react';
import {StyleSheet, View} from 'react-native'

const CardView = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: "white",
        elevation: 5,
    }
});

export default CardView;