import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import AnimalContext from "../context/AnimalContext";
import paw from "../components/Assets/paw-prints.png";

function Animal() {
  const { animalPage, getAnimalProfile, dispatch } = useContext(AnimalContext);
  const params = useParams();

  let petImage =
    animalPage.animalPage?.photos.length > 0
      ? animalPage.animalPage?.photos[0].medium
      : paw;

  useEffect(() => {
    const getAnimalData = async () => {
      const animalData = await getAnimalProfile(params.id);
      console.log(animalData);
      dispatch({ type: "GET_ANIMAL_PROFILE", payload: animalData });
    };
    getAnimalData();
  }, [dispatch, params.id]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 mb-80 md:gap-8">
      <div className="flex">
        <figure className="">
          <img
            className="max-w-xs rounded-lg shadow-xl"
            src={petImage}
            alt="animal"
          />
        </figure>
        <div className="ml-10">
          <h2 className="card-title">{animalPage.animalPage?.name}</h2>
          <p className="">{animalPage.animalPage?.breeds.primary}</p>
          <p className="column">{animalPage.animalPage?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Animal;
