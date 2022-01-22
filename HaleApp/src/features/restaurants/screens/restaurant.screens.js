import React, { useContext, useState } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity  } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from "styled-components/native";
import { SafeArea } from '../../../components/utility/safearea.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { Search } from '../components/search.component';

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
                    <LoadingContainer>
                        <Loading
                            size="large"
                            color="#10460a"
                            animating={true}                           
                        />
                    </LoadingContainer>
                )
                }
                <Search 
                    isFavouritesToggled={isToggled}
                    onFavouritesToggle={() => setIsToggled(!isToggled)} 
                />
                {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}
                <FlatList
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

