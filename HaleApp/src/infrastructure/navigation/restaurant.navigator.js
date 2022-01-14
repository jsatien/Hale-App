import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantScreen } from '../../features/restaurants/screens/restaurant.screens';

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator headerMode="none">
            <RestaurantStack.Screen 
                name="Restaurants"
                component = {RestaurantScreen}
            />
        </RestaurantStack.Navigator>
    );
};