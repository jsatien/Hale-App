import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from 'react-native-paper';
import styled from "styled-components/native";

const Title = styled.Text`
padding: 15px;
color: red;

`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Restaurant Name',
        icon = '#',
        photo = ["https://bit.ly/3IRvCTl"],
        address = 'Address | Location',
        isOpenNow = true,
        rating = 5,
        isClosedTemporarily
    } = restaurant;
    return (
        <>
            <Card elevation={5} style={styles.card}>
                <Card.Cover source={{ uri: 'https://bit.ly/31OKLnB' }} />
                <Title>
                    {name}
                </Title>
            </Card>
            <Card elevation={5} style={styles.card}>
                <Card.Cover source={{ uri: 'https://bzfd.it/3oJMxPu' }} />
                <Title>
                    {name}
                </Title>
            </Card>
            <Card elevation={5} style={styles.card}>
                <Card.Cover source={{ uri: 'https://bit.ly/31OKLnB' }} />
                <Title>
                    {name}
                </Title>
            </Card>
            <Card elevation={5} style={styles.card}>
                <Card.Cover source={{ uri: 'https://bzfd.it/3oJMxPu' }} />
                <Title>
                    {name}
                </Title>
            </Card>
            <Card elevation={5} style={styles.card}>
                <Card.Cover source={{ uri: 'https://bit.ly/31OKLnB' }} />
                <Title>
                    {name}
                </Title>
            </Card>
            <Card elevation={5} style={styles.card}>
                <Card.Cover source={{ uri: 'https://bzfd.it/3oJMxPu' }} />
                <Title>
                    {name}
                </Title>
            </Card>
        </>
    )
};

const styles = StyleSheet.create({
    card:{
        padding: 15,
        marginBottom: 10
    }
})