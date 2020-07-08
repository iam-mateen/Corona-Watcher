import React from 'react';
import { StyleSheet,View } from 'react-native';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Fontisto, MaterialIcons } from '@expo/vector-icons'; 
import routes from './routes';

const Tabs = AnimatedTabBarNavigator();

export default () => (
  <NavigationContainer>
    <Tabs.Navigator
       tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#617FBE",
        activeBackgroundColor: "#3875F2"
      }}
      appearence={{
        tabBarBackground: "#fff",
        topPadding: "5px",
        horizontalPadding: 10
      }} 
      >
        {
        routes.map((route,key) => <Tabs.Screen
            key={key}
            name={route.name}
            component={route.component}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                  route.name == "Home" ? <AntDesign name="home" size={size} color={color} /> : route.name == "Country" ? <Fontisto name="world" size={size} color={color} /> : route.name == "Statistics" ? <AntDesign name="barschart" size={size} color={color} /> : route.name == "Info" ? <MaterialIcons name="speaker-notes" size={size} color={color} /> : null
              )
            }}
          />
          )
        }
    </Tabs.Navigator>
  </NavigationContainer>
)