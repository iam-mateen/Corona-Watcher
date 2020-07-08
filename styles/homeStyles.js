import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    header: {
        width: "100%",
        height: "15%",
    },
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "#564594",
    },
    heading: {
        fontWeight: "bold",
        color: "#F4F2FB",
        letterSpacing: 3,
        fontSize: 15,
        marginLeft: 20
    },
    main: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#564594",
        marginTop: 20,
        //564594
    },

    caseItems: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginTop: 10,
    },
    footer: {
        width: "100%",
        minHeight: 300,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 10,
    }
});

export const chartConfig = {
    backgroundColor: "#fff",
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
    style: {
        borderRadius: 2
    },
    propsForDots: {
        r: "5",
        strokeWidth: '0',
        stroke: "red"
    }
}