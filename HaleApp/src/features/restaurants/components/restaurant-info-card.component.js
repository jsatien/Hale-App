import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typhography/text.component";
import { View } from "react-native";
import { Favourite } from "../../../components/favourites/favourite.component";

import {   
    Info,
    RestaurantCard,
    RestaurantCardCover,
    Rating,
    Section,
    SectionEnd,
    Open } 
from "./restaurant-info-card.style";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'FOOD NAME',
        price = 'Php 99.99',
        // icon = '#',
        photos = ["https://bit.ly/3IRvCTl"],
        vicinity = 'Address | Location',
        isOpenNow = true,
        rating = 5,
        isClosedTemporarily = true,
        placeId,
    } = restaurant;

const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <>
            <RestaurantCard elevation={5}>
                <View>
                    <Favourite restaurant={restaurant}/>
                        <RestaurantCardCover source={{ uri: photos[0] }} />
                </View>
                    <Info>                
                    <Text variant="label">{name}</Text>
                        <Section>
                            <Rating>
                                {/* index = filler */}
                                {ratingArray.map((_, i) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
                                ))}
                            </Rating>
                            <SectionEnd>
                            <Spacer position={"left"} size="large">
                                {isClosedTemporarily && (
                                    <Text variant="error">
                                        CLOSE TEMPORARILY
                                    </Text>
                                )}
                            </Spacer>
                            <Spacer position={"left"} size="large">
                                {isOpenNow && <Open xml={open} width={20} height={20}/>}
                            </Spacer>
                            </SectionEnd>
                        </Section>
                    <Text varinat="label">{price}</Text>
                    <Text varinat="label">{vicinity}</Text>
                </Info>
            </RestaurantCard>
        </>
    )
};

