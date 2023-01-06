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
    inWishlist: [],
  };
  const [state, dispatch] = useReducer(AnimalReducer, initialState);
  const [animals, setAnimals] = useLocalStorage("animals", []);
  const [wishlistArr, setWishlistArr] = useLocalStorage("wishlistArr", []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = animals.slice(firstPostIndex, lastPostIndex);
  const totalPosts = animals.length;

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

  //remove duplicates
  let uniqueWishlist = Array.from(new Set(wishlistArr.map((a) => a.id))).map(
    (id) => {
      return wishlistArr.find((a) => a.id === id);
    }
  );

  return (
    <AnimalContext.Provider
      value={{
        ...state,
        totalPosts,
        currentPost,
        uniqueWishlist,
        postPerPage,
        currentPage,
        dispatch,
        setCurrentPage,
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
