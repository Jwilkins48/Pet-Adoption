import { createContext, useReducer, useState } from "react";
import AnimalReducer from "./AnimalReducer";

const AnimalContext = createContext();
const URL = import.meta.env.VITE_PET_FINDER_URL;
const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const AnimalProvider = ({ children }) => {
  const initialState = {
    animalsArray: [],
    animalPage: {},
  };
  const [state, dispatch] = useReducer(AnimalReducer, initialState);
  const [animals, setAnimals] = useState([]);

  const [wishlistArr, setWishlistArr] = useState([]);
  const addToWishlist = (wish) => {
    setWishlistArr([wish, ...wishlistArr]);
    console.log(wishlistArr);
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
        dispatch,
        searchAnimal,
        getAnimalProfile,
        addToWishlist,
        wishlistArr,
      }}
    >
      {children}
    </AnimalContext.Provider>
  );
};

export default AnimalContext;
