import axios from "axios";
import { createContext, useReducer } from "react";
import AnimalReducer from "./AnimalReducer";

const AnimalContext = createContext();
const URL = import.meta.env.VITE_PET_FINDER_URL;
const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

const ani = axios.create({
  baseURL: URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});

export const AnimalProvider = ({ children }) => {
  const searchAnimal = async (name) => {
    const response = await ani.get();
    return response;
  };

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
