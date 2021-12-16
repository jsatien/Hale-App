import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from "styled-components/native";
import { SafeArea } from '../../../components/utility/safearea.component';
import { RestaurantContext } from '../../../services/restaurants/restaurant.context';


const SearchBarContainer = styled(View)`
    padding: ${props => props.theme.sizes[2]};
    paddingBottom: ${props => props.theme.sizes[1]};
    backgroundColor: ${props => props.theme.colors.ui.quaternary};
    color: ${props => props.theme.colors.palette.bud};
`;



export const RestaurantScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const { isLoading, error, restaurants } = useContext(RestaurantContext);

    return (
            <SafeArea>
                <SearchBarContainer>
                    <Searchbar
                            placeholder="Search Food, Shops, Restaurant"
                            placeholderTextColor={'#10460a'}
                            inputStyle={{color: '#10460a', fontSize: 15}}
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            iconColor='#10460a'
                        /> 
                </SearchBarContainer>
                <FlatList
                    data={restaurants}
                    renderItem={({item}) => <RestaurantInfoCard restaurant={item} />}
                    keyExtractor ={(item) => item.name}
                    contentContainerStyle={{ paddingBottom:16}} 
                />
            </SafeArea>
    );
};

