import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async(value) => {
        try{
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@favourite", jsonValue)
        } catch (e) {
            // error
            console.log("error saving", e)
        }
    };
    const loadFavourites = async(value) => {
        try{
            const value = await AsyncStorage.getItem("@favourite");
            if (value !== null){
                // value previously stored
                setFavourites(JSON.parse(value));
            }
        } catch (e) {
            // error
            console.log("error loading", e)
        }
    };

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    useEffect(() => {
        loadFavourites();
    }, []);

    useEffect(() => {
        saveFavourites(favourites);
    }, [favourites]);

    const remove = (restaurant) => {
        const newFavourites = favourites.filter(
            (x) => x.placeId !== restaurant.placeId
        );
        setFavourites(newFavourites);
    };
    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove,
            }}
        >
            {children}
        </FavouritesContext.Provider>
    );
};