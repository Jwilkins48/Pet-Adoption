import { createContext, useReducer } from "react";
import AnimalReducer from "./AnimalReducer";
import axios from "axios";

const URL = process.env.REACT_APP_PET_FINDER_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const AnimalContext = createContext();

export const AnimalProvider = ({ children }) => {
  const searchAnimal = async (name) => {};

  const initialState = {
    animals: [],
    animal: {},
  };
  const [state, dispatch] = useReducer(AnimalReducer, initialState);

  return (
    <AnimalContext.Provider value={{ ...state, dispatch, searchAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};

export default AnimalContext;
