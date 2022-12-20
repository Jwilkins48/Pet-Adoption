import { createContext, useReducer } from "react";
import AnimalReducer from "../context/AnimalReducer";

const AnimalContext = createContext();

export const AnimalProvider = ({ children }) => {
  const initialState = {
    animals: [],
    animal: {},
  };
  const [state, dispatch] = useReducer(AnimalReducer, initialState);

  return (
    <AnimalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AnimalContext.Provider>
  );
};

export default AnimalContext;
