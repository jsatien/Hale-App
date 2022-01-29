import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { Card } from 'react-native-paper';
import styled from "styled-components/native";

export const Info = styled(View)`
    padding: ${props => props.theme.sizes[2]};
`;

export const RestaurantCard = styled(Card)`
    elevation: 4;
    margin: ${props => props.theme.sizes[2]};
    background-color: ${props => props.theme.colors.palette.granny};

`;

export const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${props => props.theme.colors.ui.tertiary};
`;

export const Rating = styled(View)`
    flex-direction: row; 
`;

export const Section = styled(View)`
    flex-direction: row;
    align-items: center;
`;

export const SectionEnd = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Open = styled(SvgXml)`
    flex-direction: row;
`;

export const AnimationWrapper = styled.View`
    width: 100%;
    height: 50%;
    position: absolute;
    top: 20%;
    scaleX: 0.8;
    scaleY: 0.8;
`;