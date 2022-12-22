import { createContext, useReducer } from "react";
import AnimalReducer from "./AnimalReducer";

const AnimalContext = createContext();
const URL = import.meta.env.VITE_PET_FINDER_URL;
const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const AnimalProvider = ({ children }) => {
  const initialState = {
    animalsArr: [],
    animal: {},
  };
  const [state, dispatch] = useReducer(AnimalReducer, initialState);

  const searchAnimal = async (name) => {
    const response = await fetch(`${URL}/animals?type=${name}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();
    //placing fetched data in animals array
    state.animalsArr = data.animals;
    console.log(state.animalsArr);
  };

  return (
    <AnimalContext.Provider value={{ ...state, dispatch, searchAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};

export default AnimalContext;
