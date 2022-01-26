import React from "react";
import { Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons';

import { RestaurantNavigator } from './restaurant.navigator';
import { SafeArea } from '../../components/utility/safearea.component';
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();
const Settings = () => {
return (
<SafeArea>
    <Text>Settings</Text>
</SafeArea>
);
}
const Tray = () => {
return (
<SafeArea>
    <Text>All orders are here</Text>
</SafeArea>
);
}

export const AppNavigator = () => (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName,icon2=false;      
                if (route.name === 'Map') {
                iconName = focused ? 'map' : 'map-outline';
                } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
                return <Ionicons name={iconName} size={size} color={color} />
                }
                else if (route.name === 'Food') {
                icon2 = true;
                iconName = focused ? 'food-apple' : 'food-apple-outline';                
                }
                else if (route.name === 'Tray') {
                iconName = focused ? 'cart' : 'cart-outline';                
                }
                //switch 2 icon library package
                if (icon2 === true){
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />
                }else{
                return <Ionicons name={iconName} color={color} size={size} />
                }
            },
            tabBarActiveTintColor: '#10460a',
            tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name='Food' component={RestaurantNavigator}/>
            <Tab.Screen name='Map' component={MapScreen}/>
            <Tab.Screen name='Tray' component={Tray}/>
            <Tab.Screen name='Settings' component={Settings}/>
        </Tab.Navigator>
);