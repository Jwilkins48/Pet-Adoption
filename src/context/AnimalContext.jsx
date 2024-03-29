import { createContext, useReducer, useState } from "react";
import AnimalReducer from "./AnimalReducer";
import useLocalStorage from "../hooks/useLocalStorage";

const AnimalContext = createContext();
const URL = import.meta.env.VITE_PET_FINDER_URL;

export const AnimalProvider = ({ children }) => {
  const initialState = {
    animalsArray: [],
    animalPage: {},
  };
  const [state, dispatch] = useReducer(AnimalReducer, initialState);
  const [animals, setAnimals] = useLocalStorage("animals", []);
  const [wishlistArr, setWishlistArr] = useLocalStorage("wishlistArr", []);

  const [sort, setSort] = useState("DEFAULT");
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

  const KEY = import.meta.env.VITE_API_KEY;
  const SECRET = import.meta.env.VITE_API_SECRET;

  let token, tokenType, expires;

  // Get OAuth token
  const getOAuth = function () {
    return fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body: `grant_type=client_credentials&client_id=${KEY}&client_secret=${SECRET}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        // Store token data
        token = data.access_token;
        tokenType = data.token_type;
        expires = new Date().getTime() + data.expires_in * 3000;
      });
  };

  // Make call if token expired
  const makeCall = (text) => {
    // If current token is invalid, get a new one
    if (!expires || expires - new Date().getTime() < 1) {
      getOAuth().then(function () {
        searchAnimal(text);
      });
      return;
    } else {
      searchAnimal(text);
    }
  };

  const [profile, setProfile] = useState({});

  // Make call if token expired
  const makeProfileCall = async (text) => {
    // If current token is invalid, get a new one
    if (!expires || expires - new Date().getTime() < 1) {
      getOAuth().then(function () {
        getAnimalProfile(text);
      });
      return;
    } else {
      getAnimalProfile(text);
    }
  };

  //Fetch petFinder array
  const searchAnimal = async (name) => {
    const response = await fetch(`${URL}/animals?type=${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
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
        Authorization: `Bearer ${token}`,
      },
    });
    const profileData = await response.json();
    setProfile(profileData.animal);
    console.log(profileData.animal);
    // return { animalPage: profileData.animal };
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
        animals,
        profile,
        totalPosts,
        currentPost,
        uniqueWishlist,
        postPerPage,
        currentPage,
        sort,
        setSort,
        makeCall,
        dispatch,
        searchAnimal,
        addToWishlist,
        setCurrentPage,
        getAnimalProfile,
        makeProfileCall,
        removeFromWishlist,
      }}
    >
      {children}
    </AnimalContext.Provider>
  );
};

export default AnimalContext;
