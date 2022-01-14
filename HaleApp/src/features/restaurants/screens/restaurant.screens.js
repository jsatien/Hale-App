import React, { useContext } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from "styled-components/native";
import { SafeArea } from '../../../components/utility/safearea.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';
import { Search } from '../components/search.component';

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

const LoadingContainer = styled(View)`
    position: absolute;
    top: 50%;
    left: 50%;
`;


export const RestaurantScreen = () => {
    const { isLoading,  restaurants } = useContext(RestaurantContext);
    
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
                <Search  />
                <FlatList
                    data={restaurants}
                    renderItem={({item}) => <RestaurantInfoCard restaurant={item} />}
                    keyExtractor ={(item) => item.name}
                    contentContainerStyle={{ paddingBottom:16}} 
                />                
            </SafeArea>
    );
};

