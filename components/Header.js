import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
const Header = props => {
    return (
        <View style={{ ...props.style }}>
            <View style={styles.background}>
                <TouchableOpacity>
                    <View>
                        <View style={{display: "flex", flexDirection: "row"}}>
                        <Image style={{width: 30, height: 30, borderWidth: 1, borderColor: "rgba(1,1,1,0.1)", borderRadius: 50,backgroundColor: "rgba(255,10,30,0.3)"}} source={require("../assets/covid1.png")}/>
                      <Text style={{color: "white", fontSize: 20, marginLeft: 10,}}>Covid Watcher</Text>
                      </View>
                    </View>
                </TouchableOpacity>
                <View style={{ display: "flex", flexDirection: "row" }}>

                    <Text style={{ marginTop: 4, fontWeight: "bold", marginLeft: 10, fontSize: 12, color: "#D36000" }}></Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <TouchableOpacity>
                        <Ionicons style={{ marginRight: 15, }} name="ios-notifications-outline" size={25} color="#E9F1F9" />

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)'
    },
    background: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        alignContent: "space-between",
        justifyContent: "space-between",
        backgroundColor: "#564594",
        borderColor: "rgba(1,1,1,0.1)",
        borderWidth: 0.5,
    }
});

export default Header;