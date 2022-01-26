import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { RestaurantScreen } from '../../features/restaurants/screens/restaurant.screens';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator 
        screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
        }}>
            <RestaurantStack.Screen 
                name="Restaurant"
                component = {RestaurantScreen}
            />
            <RestaurantStack.Screen 
                name="RestaurantDetail"
                component = {RestaurantDetailScreen}
            />            
        </RestaurantStack.Navigator>
    );
};