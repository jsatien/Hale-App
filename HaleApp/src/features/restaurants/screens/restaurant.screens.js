import React, { useContext, useState } from 'react';
import { View, ActivityIndicator, TouchableOpacity  } from 'react-native';
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utility/safearea.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
import { Search } from '../components/search.component';

import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { AnimationWrapper } from "../components/restaurant-info-card.style";
import { RestaurantList } from "../components/restaurant-list.style";

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

const LoadingContainer = styled(View)`
    position: absolute;
    top: 50%;
    left: 50%;
`;


export const RestaurantScreen = ( { navigation } ) => {
    const { isLoading,  restaurants } = useContext(RestaurantContext);
    const { favourites } = useContext(FavouritesContext);
    const [isToggled, setIsToggled] = useState(false);
    
    return (
            <SafeArea>
                {isLoading && (
                    <AnimationWrapper
                        style={{
                            transform: [{scaleX: 0.7},{scaleY: 0.7}]
                        }}
                    >
                        <LottieView 
                            key="animation"
                            autoPlay
                            loop
                            resizeMode="cover"
                            source={require("../../../../assets/food.json")}
                        />
                </AnimationWrapper>
                )
                }
                <Search 
                    isFavouritesToggled={isToggled}
                    onFavouritesToggle={() => setIsToggled(!isToggled)} 
                />
                {isToggled && 
                    (<FavouritesBar 
                    favourites={favourites} 
                    onNavigate={navigation.navigate} 
                    />)}
                <RestaurantList
                    data={restaurants}
                    renderItem={({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate("RestaurantDetail",
                            { restaurant: item,}
                        )}>
                            <RestaurantInfoCard restaurant={item} />
                        </TouchableOpacity>    
                    );
                    }}
                    keyExtractor ={(item) => item.name}
                    contentContainerStyle={{ paddingBottom:16}} 
                />                
            </SafeArea>
    );
};

