import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import Modal from 'react-native-modal';
const ErrorDisplay = props => {
    const [show, setShow] = useState(true);

    const cancelPress = e => {
        props.resetError(false);
        setShow(false);
    }

    const retryPress = e => {
        props.resetError(true);
        setShow(false);
    }

    return <Modal isVisible={show} animationIn="bounceIn" animationOut="bounceOut">
        <View style={{ backgroundColor: "rgba(255,255,255,0.0)", height: 200, width: "100%", paddingHorizontal: 20, }}>
            <ImageBackground source={require("../assets/gradient.jpg")} style={{ width: null, height: null, flex: 1, borderRadius: 5, overflow: "hidden" }}>
                <View style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ width: 70, height: 70, marginBottom: 10, }} source={require("../assets/no_internet.png")} />
                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18, letterSpacing: 3, }}>Network Error</Text>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 12, }}>{`It seem's that server is down or \nCheck your internet!`}</Text>

                    <View style={{ display: "flex", flexDirection: "row", marginTop: 15, }}>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: "rgba(1,1,1,0)", borderRadius: 2, borderWidth: 0.5, borderColor: "rgba(1,1,1,0.4)", paddingVertical: 5, paddingHorizontal: 10, marginRight: 20, }}>
                                <Text onPress={cancelPress} style={{ color: "#fff" }}>CANCEL</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ backgroundColor: "rgba(1,1,1,0.8)", borderRadius: 2, borderWidth: 0.5, borderColor: "rgba)", paddingVertical: 5, paddingHorizontal: 20, }}>
                                <Text onPress={retryPress} style={{ color: "#fff" }}>RETRY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    </Modal>
}

export default ErrorDisplay;