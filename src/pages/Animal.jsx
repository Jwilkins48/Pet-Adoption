import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import AnimalContext from "../context/AnimalContext";

function Animal() {
  const { animalPage, getAnimalProfile, dispatch } = useContext(AnimalContext);
  const params = useParams();

  useEffect(() => {
    const getAnimalData = async () => {
      const animalData = await getAnimalProfile(params.id);

      dispatch({ type: "GET_ANIMAL_PROFILE", payload: animalData });
    };
    getAnimalData();
  }, [dispatch, params.id]);

  return (
    <div>
      <h1>Welcome to {animalPage.animalPage?.name}'s profile</h1>
    </div>
  );
}

export default Animal;
