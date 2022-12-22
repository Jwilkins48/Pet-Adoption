import { createContext, useReducer } from "react";
import AnimalReducer from "./AnimalReducer";

const AnimalContext = createContext();
const URL = import.meta.env.VITE_PET_FINDER_URL;
const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
import { useState } from "react";

export const AnimalProvider = ({ children }) => {
  const initialState = {
    animalsArray: [],
    animalPage: {},
  };
  const [state, dispatch] = useReducer(AnimalReducer, initialState);
  const [animals, setAnimals] = useState([]);

  //Fetch petFinder array
  const searchAnimal = async () => {
    const response = await fetch(`${URL}/animals`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();
    //placing fetched data in animals array
    setAnimals(data.animals);
    return data.animals;
  };

  return (
    <AnimalContext.Provider
      value={{ ...state, dispatch, searchAnimal, animals }}
    >
      {children}
    </AnimalContext.Provider>
  );
};

export default AnimalContext;
