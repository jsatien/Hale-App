import React from 'react';
import { StatusBar, View, SafeAreaView, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
    flex:1; 
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
    backgroundColor: ${props => props.theme.colors.ui.quaternary};
`;

const SearchBarContainer = styled(View)`
    padding: ${props => props.theme.sizes[2]};
    backgroundColor: ${props => props.theme.colors.ui.tertiary};
    color: ${props => props.theme.colors.palette.bud};
`;



export const RestaurantScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    
    return (

            <SafeArea>
                <SearchBarContainer>
                    <Searchbar
                            placeholder="Search Food, Shops, Restaurant"
                            placeholderTextColor={'#10460a'}
                            inputStyle={{color: '#10460a', fontSize: 15}}
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                        />
                </SearchBarContainer>
                <FlatList
                    data={[{name:1},{name:2},{name:3}]}
                    renderItem={() => <RestaurantInfoCard/>}
                    keyExtractor ={(item) => item.name}
                    contentContainerStyle={{ padding:16}} 
                />
            </SafeArea>
    );
};

