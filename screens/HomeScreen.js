import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Switch from '../components/Switch';
import CaseItem from '../components/CaseItem';
import { PieChart } from "react-native-chart-kit";
import * as homeActions from '../store/actions/HomeAction';
import { useDispatch, useSelector } from 'react-redux';
import styles, { chartConfig } from '../styles/homeStyles';
import { formatCommas } from '../utils/utils'
import CardView from '../components/CardView';
import ChartShimmer from '../components/ChartShimmer';
import ErrorModal from '../components/ErrorModal';

const HomeScreen = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const { dataSet } = useSelector(state => state.home);
    const changeLoading = (state) => {
        setLoading(state);
    }
    const resetError = (loading) => {
        setError(false);
        if (loading) {
            setLoading(true);
            getInitalCases();
        }
    }

    const showError = () => {
        setError(true);
    }

    const getInitalCases = async () => {
        dispatch(homeActions.getInitalData())
            .then(res => {
                dispatch(homeActions.getGlobalCases())
                setLoading(false);
                setError(false);
            })
            .catch(err => {
                setLoading(false);
                setError(true);
            });
    }
    useEffect(() => {
        getInitalCases();
    }, []);


    return (
        <View style={styles.container}>
            {error && <ErrorModal resetError={resetError} />}
            <View style={{ display: 'flex', flex: 1 }}>
                <Header style={styles.header} />
                <ScrollView >
                    <View style={styles.main}>
                        <Text style={styles.heading}>Latest Update</Text>
                        <Switch changeLoading={changeLoading} showError={showError}/>
                        <View style={styles.caseItems}>

                            <CaseItem containerStyle={{ height: 100, backgroundColor: "#EA9616", width: "45%" }} name="Total Cases" value={dataSet != null && formatCommas(dataSet.TotalConfirmed.toString())} textStyleTwo={{ fontSize: 15, fontWeight: "bold" }} loading={loading} />

                            <CaseItem containerStyle={{ height: 100, backgroundColor: "#DA3C00", width: "45%" }} name="Total Deaths" value={dataSet != null && formatCommas(dataSet.TotalDeaths.toString())} textStyleTwo={{ color: "white", fontSize: 15, fontWeight: "bold" }} loading={loading} />
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginTop: 10 }}>

                            <CaseItem containerStyle={{ height: 80, backgroundColor: "#3FC30C", width: "31%" }} name="Recovered" value={dataSet != null && formatCommas(dataSet.TotalRecovered.toString())}
                                textStyleOne={{ fontSize: 12 }}
                                textStyleTwo={{ fontSize: 12, fontWeight: "bold" }} loading={loading} />

                            <CaseItem containerStyle={{ height: 80, backgroundColor: "#158AF5", width: "31%" }} name="New Recovery" value={dataSet != null && formatCommas(dataSet.NewRecovered.toString())}
                                textStyleOne={{ fontSize: 12 }}
                                textStyleTwo={{ fontSize: 12, fontWeight: "bold" }} loading={loading} />

                            <CaseItem containerStyle={{ height: 80, backgroundColor: "#841CCC", width: "31%" }} name="New Cases" value={dataSet != null && formatCommas(dataSet.NewConfirmed.toString())}
                                textStyleOne={{ fontSize: 12 }}
                                textStyleTwo={{ fontSize: 12, fontWeight: "bold" }} loading={loading} />
                        </View>
                        <CardView style={styles.footer}>
                            <Text style={{ marginLeft: 20, marginTop: 10, }}>Daily Graph</Text>
                            {(error  || dataSet == null) ? <ChartShimmer /> : loading ? <ChartShimmer /> :
                                <PieChart
                                    data={dataSet != null ?
                                        [{
                                            name: "Total Cases",
                                            population: parseInt(dataSet.TotalConfirmed),
                                            color: "#EA9616",
                                            legendFontColor: "black",
                                            legendFontSize: 10
                                        },
                                        {
                                            name: "Total Deaths",
                                            population: parseInt(dataSet.TotalDeaths),
                                            color: "#D32900",
                                            legendFontColor: "black",
                                            legendFontSize: 10
                                        },
                                        {
                                            name: "Recovered",
                                            population: parseInt(dataSet.TotalRecovered),
                                            color: "#3FC30C",
                                            legendFontColor: "black",
                                            legendFontSize: 10
                                        },
                                        {
                                            name: "New Recovered",
                                            population: parseInt(dataSet.NewRecovered),
                                            color: "#158AF5",
                                            legendFontColor: "black",
                                            legendFontSize: 10
                                        },
                                        {
                                            name: "New Cases",
                                            population: parseInt(dataSet.NewConfirmed),
                                            color: "#841CCC",
                                            legendFontColor: "black",
                                            legendFontSize: 10
                                        }
                                        ]
                                        : dummyData}
                                    width={Dimensions.get("window").width - 20}
                                    height={220}
                                    style={{
                                        marginBottom: 80,
                                        marginLeft: 10,
                                    }}
                                    chartConfig={chartConfig}
                                    accessor="population"
                                    backgroundColor="transparent"
                                    paddingLeft="15"

                                />}
                        </CardView>
                    </View>

                </ScrollView>
            </View>
        </View>
    );
}
const dummyData = [{
    name: "Total Cases",
    population: parseInt("0"),
    color: "#EA9616",
    legendFontColor: "black",
    legendFontSize: 10
},
{
    name: "Total Deaths",
    population: parseInt("0"),
    color: "#D32900",
    legendFontColor: "black",
    legendFontSize: 10
},
{
    name: "Total Recovered",
    population: parseInt("0"),
    color: "#3FC30C",
    legendFontColor: "black",
    legendFontSize: 10
},
{
    name: "New Recovered",
    population: parseInt("0"),
    color: "#158AF5",
    legendFontColor: "black",
    legendFontSize: 10
},
{
    name: "New Cases",
    population: parseInt("0"),
    color: "#841CCC",
    legendFontColor: "black",
    legendFontSize: 10
}
];

export default HomeScreen;