import { useEffect, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useParams, Link } from "react-router-dom";
import AnimalContext from "../context/AnimalContext";
import paw from "../components/Assets/paw-prints.png";
import Flickity from "react-flickity-component";

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

  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 md:gap-8 bg-indigo-100 h-[75vh] w-full rounded-lg p-5 border-2 border-blue-300 relative">
      <div className="flex">
        <div className="ml-5">
          <span>Meet</span>
          <div className="flex items-center gap-5">
            <h2 className="text-5xl mb-3 card-title text-red-300 ">
              {animalPage.animalPage?.name}
              <button
                className=" absolute right-5 top-6"
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
              <p className="badge badge-secondary badge-outline">
                {animalPage.animalPage?.breeds.primary}
              </p>
              <p
                className={
                  animalPage.animalPage?.gender === "Male"
                    ? "badge badge-primary ml-2 p-2.5"
                    : "badge badge-secondary ml-2 p-2.5"
                }
              >
                {animalPage.animalPage?.gender}
              </p>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="ml-0 w-full lg:w-[40rem]  rounded-xl">
            {animalPage.animalPage?.photos.length > 2 ? (
              <Flickity options={flickityOptions}>
                {animalPage.animalPage?.photos.map((item, index) => (
                  <img
                    key={index}
                    className="petCarousel-body-slide h-80 rounded shadow-xl"
                    src={item.medium}
                    alt="animal"
                  />
                ))}
              </Flickity>
            ) : (
              <figure>
                <img
                  className="max-w-xs rounded-lg shadow-xl"
                  src={petImage}
                  alt="animal"
                />
              </figure>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-indigo-200 rounded border-2 border-indigo-300 shadow-lg">
        <h2 className="font-bold mt-10 text-3xl text-indigo-500 underline">
          A Little About Me...
        </h2>
        <div className="m-10">
          <h1 className="text-2xl mb-2 underline">Personality</h1>
          <p className="">
            {animalPage.animalPage?.attributes.house_trained
              ? "House Trained"
              : "Not yet house trained"}
          </p>

          <p className="">
            {animalPage.animalPage?.attributes.shots_current
              ? "Up to date on shots"
              : "In need on shots"}
          </p>

          <p className="">
            {animalPage.animalPage?.attributes.spayed_neutered
              ? "Spayed/Neutered"
              : "Not yet spayed/neutered"}
          </p>

          <p className="">
            {animalPage.animalPage?.attributes.special_needs
              ? "Special Needs"
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Animal;
