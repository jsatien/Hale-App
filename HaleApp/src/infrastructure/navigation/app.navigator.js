import React, { useContext } from "react";
import { Text, Button } from 'react-native';
import { MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from '../../components/utility/safearea.component';
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantNavigator } from './restaurant.navigator';

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurant.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

const Tab = createBottomTabNavigator();
const Settings = () => {
    const { onLogout } = useContext(AuthenticationContext);

    return (
    <SafeArea>
        <Text>Settings</Text>
        <Button title="Logout" onPress={() => onLogout()} />
    </SafeArea>
    );
};
const Tray = () => {
return (
<SafeArea>
    <Text>All orders are here</Text>
</SafeArea>
);
}

export const AppNavigator = () => (
    <FavouritesContextProvider>
        <LocationContextProvider>
            <RestaurantContextProvider>
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
            </RestaurantContextProvider>
        </LocationContextProvider>
    </FavouritesContextProvider>
    
);