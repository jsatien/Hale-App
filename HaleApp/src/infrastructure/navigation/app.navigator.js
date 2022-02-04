import React  from "react";
import { MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantNavigator } from './restaurant.navigator';
import { SettingsNavigator } from './settings.navigator';

import { RestaurantContextProvider } from "../../services/restaurants/restaurant.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

import { SafeArea } from "../../components/utility/safearea.component";
import { Text } from "../../components/typography/text.component";


const Tab = createBottomTabNavigator();

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
                    <Tab.Screen name='Settings' component={SettingsNavigator}/>
                </Tab.Navigator>
            </RestaurantContextProvider>
        </LocationContextProvider>
    </FavouritesContextProvider>
    
);