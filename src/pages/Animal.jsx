import { useEffect, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useParams, Link } from "react-router-dom";
import AnimalContext from "../context/AnimalContext";
import paw from "../components/Assets/paw-prints.png";

function Animal() {
  const {
    animalPage,
    getAnimalProfile,
    dispatch,
    addToWishlist,
    removeFromWishlist,
  } = useContext(AnimalContext);
  const [profileWishlist, setProfileWishlist] = useLocalStorage(
    "profileWishlist",
    true
  );
  const params = useParams();

  const onClick = (e) => {
    e.preventDefault();
    const wish = {
      id: animalPage.animalPage.id,
      name: animalPage.animalPage.name,
      img: animalPage.animalPage.photos,
      gender: animalPage.animalPage.gender,
      age: animalPage.animalPage.age,
      description: animalPage.animalPage.description,
      checked: profileWishlist,
    };
    if (wish.checked === true) {
      addToWishlist(wish);
    } else {
      removeFromWishlist(animalPage.animalPage.id);
    }
    setProfileWishlist(!profileWishlist);
  };

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
        <figure>
          <img
            className="max-w-xs rounded-lg shadow-xl"
            src={petImage}
            alt="animal"
          />
        </figure>
        <div className="ml-5 relative">
          <h2 className="text-5xl mb-3 card-title">
            {animalPage.animalPage?.name}
            <button
              className=" absolute left-[15.5rem] top-[-3px]"
              onClick={(e) => onClick(e)}
            >
              {profileWishlist ? (
                <i className="fa-regular fa-heart absolute right-10 badge px-2 py-3 top-3 badge-outline badge-secondary"></i>
              ) : (
                <i className="fa-solid fa-heart absolute right-10 badge  px-2 py-3 top-3 badge-secondary"></i>
              )}
            </button>
          </h2>
          <div>
            <p className="badge badge-secondary">
              {animalPage.animalPage?.breeds.primary}
            </p>
            <p className="badge badge-primary ml-2">
              {animalPage.animalPage?.gender}
            </p>
          </div>

          <p className="mt-2">{animalPage.animalPage?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Animal;
