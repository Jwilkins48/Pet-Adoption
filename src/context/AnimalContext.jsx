import { createContext, useReducer, useState } from "react";
import AnimalReducer from "./AnimalReducer";
import useLocalStorage from "../hooks/useLocalStorage";

const AnimalContext = createContext();
const URL = import.meta.env.VITE_PET_FINDER_URL;
const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const AnimalProvider = ({ children }) => {
  const initialState = {
    animalsArray: [],
    animalPage: {},
  };
  const [state, dispatch] = useReducer(AnimalReducer, initialState);
  const [animals, setAnimals] = useLocalStorage("animals", []);
  const [wishlistArr, setWishlistArr] = useLocalStorage("wishlistArr", []);

  const addToWishlist = (wish) => {
    setWishlistArr([wish, ...wishlistArr]);
    console.log(wishlistArr);
  };

  const removeFromWishlist = (id) => {
    setWishlistArr(wishlistArr.filter((item) => item.id !== id));
  };

  //Fetch petFinder array
  const searchAnimal = async (name) => {
    const response = await fetch(`${URL}/animals?type=${name}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();
    //placing fetched data in animals array
    setAnimals(data.animals);
    return data.animals;
  };

  const getAnimalProfile = async (animalsId) => {
    const response = await fetch(`${URL}/animals/${animalsId}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const profileData = await response.json();
    return { animalPage: profileData.animal };
  };

  return (
    <AnimalContext.Provider
      value={{
        ...state,
        animals,
        wishlistArr,
        dispatch,
        searchAnimal,
        getAnimalProfile,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </AnimalContext.Provider>
  );
};

export default AnimalContext;
