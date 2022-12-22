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

  return (
    <AnimalContext.Provider
      value={{ ...state, dispatch, searchAnimal, animals }}
    >
      {children}
    </AnimalContext.Provider>
  );
};

export default AnimalContext;
