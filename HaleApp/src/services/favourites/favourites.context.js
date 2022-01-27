import React, { 
    createContext, 
    useState, 
    useEffect,
    useContext,
} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);
    const { user } = useContext(AuthenticationContext);

    const saveFavourites = async(value, uid) => {
        try{
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favourite-${uid}`, jsonValue)
        } catch (e) {
            // error
            console.log("error saving", e)
        }
    };
    const loadFavourites = async(uid) => {
        try{
            const value = await AsyncStorage.getItem(`@favourite-${uid}`);
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
        if(user && user.uid) {
        loadFavourites(user.uid);
        }
    }, [user]);

    useEffect(() => {
        if(user && user.uid && favourites.length){
            saveFavourites(favourites, user.uid);
        }
    }, [favourites, user]);

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