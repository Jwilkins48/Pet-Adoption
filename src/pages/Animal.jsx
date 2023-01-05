import { useEffect, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useParams, useNavigate } from "react-router-dom";
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
    false
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
    initialIndex: 1,
    wrapAround: true,
  };
  const navigate = useNavigate();

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

          <div className="card bg-indigo-200 shadow-lg h-[25%] w-[43%] items-center flex justify-center absolute  bottom-[4rem] border-2 border-orange-200 ">
            <div className="card-title text-orange-100  mb-6 text-2xl ">
              Interested in{" "}
              <span className="text-indigo-400">
                {animalPage.animalPage?.name}
              </span>
              ?
            </div>
            <div className="justify-around w-full flex">
              <button
                onClick={(e) => onClick(e)}
                className="py-2 px-5 rounded-xl mb-5 shadow-lg hover:shadow-xl bg-orange-200 border-2 border-orange-300 hover:border-orange-300 text-indigo-400 hover:bg-orange-100"
              >
                Add To Wishlist <i className="fa-regular fa-heart px-2 py-3" />
              </button>
              <label
                htmlFor="adopt-modal"
                className="py-2 cursor-pointer flex items-center px-7 rounded-xl mb-5 shadow-lg hover:shadow-xl bg-orange-200 border-2 border-orange-300 hover:border-orange-300 text-indigo-400 hover:bg-orange-100"
              >
                Begin Inquiry
              </label>
              <button
                onClick={() => navigate("/")}
                className="py-2  px-7 rounded-xl mb-5 shadow-lg hover:shadow-xl bg-orange-200 border-2 border-orange-300 hover:border-orange-300 text-indigo-400 hover:bg-orange-100"
              >
                Return Home
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ADOPT MODAL */}
      <input type="checkbox" id="adopt-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-6 border-2 border-indigo-400">
          <h1 className="font-bold mb-5">Adoption Request</h1>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="name">Name</label>
            <input
              className="w-[90%] rounded-lg p-1 border-2 border-indigo-200"
              type="text"
              name="name"
              id="name"
            />

            <label htmlFor="email">Email</label>
            <input
              className="w-[90%] rounded-lg p-1 border-2 border-indigo-200"
              type="email"
              name="email"
              id="email"
            />

            <label htmlFor="number">Phone Number</label>
            <input
              className="w-[40%] rounded-lg p-1 border-2 border-indigo-200"
              placeholder="(555)-555-5555"
              type="number"
              name="number"
              id="number"
            />

            <label htmlFor="description">Description of household</label>
            <input
              className="w-[80%] h-40 rounded-lg p-1 border-2 border-indigo-200"
              type="text"
              name="description"
              id="description"
            />

            <div className="flex w-full mt-2">
              <label>Current animals in household?</label>

              <div className="ml-5 gap-3 flex">
                <label htmlFor="yes">Yes</label>
                <input
                  id="yes"
                  type="radio"
                  name="radio-5"
                  className=" radio-primary"
                />

                <label htmlFor="no">No</label>
                <input
                  id="no"
                  type="radio"
                  name="radio-5"
                  className=" radio-primary"
                />
              </div>
            </div>

            <div className="grid mt-2">
              <label>If yes, which other animals do you own?</label>
              <input
                id="no"
                type="text"
                className="w-[100%] mt-2 rounded-lg p-1 border-2 border-indigo-200"
                placeholder=""
              />
            </div>
          </div>

          <div className="modal-action">
            <label
              className="btn shadow-lg bg-[#fed7aa] border-transparent hover:bg-[#fdba74] hover:text-black hover:shadow-xl hover:border-transparent btn-outline"
              htmlFor="adopt-modal"
            >
              Close
            </label>
            <button
              className="btn shadow-lg bg-[#c7d2fe] border-transparent hover:bg-[#a5b4fc] hover:text-black hover:shadow-xl hover:border-transparent btn-outline"
              onClick={() => navigate("/adoptionRequest")}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="bg-indigo-200 rounded border-2 border-indigo-300 shadow-lg">
        <h2 className="font-bold mt-10 text-3xl text-indigo-500 underline text-center">
          A Little About Me...
        </h2>
        <div className="m-10">
          <div>
            <h1 className="text-2xl font-bold mb-2 underline text-orange-400">
              Personality
            </h1>
            <p className="grid grid-cols-2">
              {animalPage.animalPage?.tags.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </p>

            <div className="grid grid-cols-2">
              <li
                className={
                  animalPage.animalPage?.environment.cats ? "" : "list-none"
                }
              >
                {animalPage.animalPage?.environment.cats
                  ? "I love cats"
                  : "I'm not a big fan of cats"
                  ? animalPage.animalPage?.environment.dogs == null
                  : ""}
              </li>

              <li
                className={
                  animalPage.animalPage?.environment.children ? "" : "list-none"
                }
              >
                {animalPage.animalPage?.environment.children
                  ? "I love kids!"
                  : "I'm a little afraid of kids"
                  ? animalPage.animalPage?.environment.dogs == null
                  : ""}
              </li>
              <li
                className={
                  animalPage.animalPage?.environment.dogs ? "" : "list-none"
                }
              >
                {animalPage.animalPage?.environment.dogs
                  ? "I get along with dogs too!"
                  : "I'm not a big fan of dogs"
                  ? animalPage.animalPage?.environment.dogs == null
                  : ""}
              </li>
            </div>
          </div>

          <div className="divider">
            <i className="fa-solid fa-paw"></i>
          </div>

          <div>
            <h1 className="text-2xl underline text-orange-400 font-bold">
              Details
            </h1>
            <div className="flex flex-col justify-between h-[10rem]	 mt-3">
              <p className="">
                {animalPage.animalPage?.name} is
                <span className="text-indigo-500 font-bold">
                  {animalPage.animalPage?.attributes.house_trained
                    ? " house trained"
                    : " not yet house trained"}
                </span>
              </p>

              <p className="">
                Vaccines/shots are
                <span className="text-indigo-500 font-bold">
                  {animalPage.animalPage?.attributes.shots_current
                    ? " fully up to date!"
                    : " not yet up to date."}
                </span>
              </p>

              <p className="">
                {animalPage.animalPage?.name} has
                <span className="text-indigo-500 font-bold">
                  {animalPage.animalPage?.attributes.spayed_neutered
                    ? " been spayed/neutered"
                    : " not yet been spayed/neutered"}
                </span>
              </p>

              <p className="">
                {animalPage.animalPage?.attributes.special_needs
                  ? "Special Needs"
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal;
