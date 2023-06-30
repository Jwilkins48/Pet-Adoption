import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AnimalContext from "../context/AnimalContext";
import paw from "../components/Assets/paw-prints.webp";
import Flickity from "react-flickity-component";

function Animal() {
  const params = useParams();
  const navigate = useNavigate();

  const {
    animalPage,
    profile,
    makeProfileCall,
    dispatch,
    addToWishlist,
    removeFromWishlist,
    uniqueWishlist,
  } = useContext(AnimalContext);
  const nameSize = profile?.name?.length;

  //Check if in wishlist array
  const isFound = uniqueWishlist.some((element) => {
    if (element.id === profile?.id) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    console.log(isFound);
  }, []);

  //Send to wishlist array
  const onClick = (e) => {
    e.preventDefault();
    const wish = {
      id: profile.id,
      name: profile.name,
      img: profile.photos,
      gender: profile.gender,
      age: profile.age,
      description: profile.description,
      checked: isFound,
    };
    if (wish.checked === false) {
      addToWishlist(wish);
    } else {
      removeFromWishlist(profile?.id);
    }
  };

  // Default img if none
  let petImage =
    animalPage.animalPage?.photos.length > 0
      ? animalPage.animalPage?.photos[0].medium
      : paw;

  // Display fetch results
  useEffect(() => {
    makeProfileCall(params.id);
  }, [dispatch, params.id]);

  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 md:gap-8 bg-indigo-100 lg:h-[75vh] w-full rounded-lg p-5 border-2 border-blue-300 relative h-auto mt-32">
      <div className="md:flex items-center justify-center lg:justify-start lg:items-start">
        <div className="mx-auto">
          <span className="text-blue-500 font-bold">Meet</span>
          <div className="flex items-center gap-2 mb-2">
            <h2
              className={
                nameSize > 15
                  ? "text-xl lg:text-3xl mb-6 lg:mb-3 card-title text-red-300 "
                  : "text-4xl mb-6 lg:mb-3 card-title text-red-300 "
              }
            >
              {profile?.name}
            </h2>

            <div className="mb-2 items-center flex ">
              <p
                className={
                  profile?.gender === "Male"
                    ? "badge badge-primary mt-1 p-2.5"
                    : "badge badge-secondary mt-1 p-2.5"
                }
              >
                {profile?.gender}
              </p>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="ml-0 w-full lg:w-[40rem]  rounded-xl">
            {profile?.photos?.length >= 1 ? (
              <Flickity options={flickityOptions}>
                {profile?.photos.map((item, index) => (
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
                  className="max-w-xs rounded-lg shadow-xl max-h-80 mx-auto"
                  src={petImage}
                  alt="animal"
                />
              </figure>
            )}
          </div>
          {/* CAROUSEL END */}

          <div className="card bg-indigo-200 shadow-lg h-[25%] lg:w-[43%] ml-[-10px] lg:ml-0 mt-12 items-center flex justify-center lg:absolute static bottom-[4rem] border-2 border-orange-200 ">
            <div className="card-title text-orange-100  my-5 text-2xl">
              <h4 className="text-center">
                Interested in {""}
                <span className="text-indigo-400">{profile?.name}</span>?
              </h4>
            </div>
            <div className="justify-evenly w-full flex flex-col lg:flex-row items-center">
              <button
                onClick={(e) => onClick(e)}
                className="lg:py-2 px-5 p-1 w-fit rounded-xl mb-2 lg:mb-5 shadow-lg hover:shadow-xl bg-orange-200 border-2 border-orange-300 hover:border-orange-300 text-indigo-400 hover:bg-orange-100"
              >
                {isFound ? "Remove From Wishlist " : "Add To Wishlist "}
                <i className="fa-regular fa-heart lg:px-2 lg:py-3" />
              </button>
              <div className="divider invisible my-0 sm:my-4 sm:visible mx-6 sm:mx-0">
                <i className="fa-solid fa-worm text-indigo-400" />
              </div>
              <label
                htmlFor="adopt-modal"
                className="lg:py-4 my-2 lg:mt-0 justify-center cursor-pointer flex items-center px-10 p-1 text-center rounded-xl mb-5 shadow-lg hover:shadow-xl bg-orange-200 border-2 border-orange-300 hover:border-orange-300 text-indigo-400 hover:bg-orange-100"
              >
                Begin Inquiry
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-200 rounded border-2 border-indigo-300 shadow-lg mt-10 lg:mt-0 relative">
        <button className=" absolute right-5 top-6" onClick={(e) => onClick(e)}>
          {isFound ? (
            <i className="fa-solid fa-heart absolute right-0 top-[-10px] lg:right-5 lg:top-3 badge px-2 py-3  badge-secondary" />
          ) : (
            <i className="fa-regular fa-heart absolute right-0 top-[-10px] lg:right-5 lg:top-3 badge px-2 py-3  badge-outline badge-secondary" />
          )}
        </button>
        <h2 className="font-bold mt-12 mx-2 text-2xl lg:text-3xl text-indigo-500 underline text-center">
          A Little About Me...
        </h2>
        <div className="m-5 lg:m-10 w-[16rem] lg:w-auto">
          <div className="">
            <h1 className="text-xl md:text-2xl font-bold mb-2 underline text-indigo-600">
              Personality
            </h1>
            <p className="grid grid-cols-2 text-sm lg:text-[16px] mr-3">
              {profile?.tags?.map((item, index) => (
                <li className="my-[1px]" key={index}>
                  {item}
                </li>
              ))}
            </p>

            <div className="grid grid-cols-2 text-md lg:text-[16px]">
              <li
                className={
                  profile?.environment?.cats ? "my-[1px]" : "list-none "
                }
              >
                {profile?.environment?.cats
                  ? "I love cats"
                  : "I'm not a big fan of cats"
                  ? profile?.environment?.dogs == null
                  : ""}
              </li>

              <li
                className={
                  profile?.environment?.children ? "my-[1px]" : "list-none"
                }
              >
                {profile?.environment?.children
                  ? "I love kids!"
                  : "I'm a little afraid of kids"
                  ? profile?.environment?.dogs == null
                  : ""}
              </li>
              <li
                className={
                  profile?.environment?.dogs ? "my-[1px]" : "list-none"
                }
              >
                {profile?.environment?.dogs
                  ? "I get along with dogs too!"
                  : "I'm not a big fan of dogs"
                  ? profile?.environment?.dogs == null
                  : ""}
              </li>
            </div>
          </div>

          <div className="divider">
            <i className="fa-solid fa-paw"></i>
          </div>

          <div>
            <h1 className="text-xl md:text-2xl underline text-indigo-600 font-bold">
              Details
            </h1>
            <div className="flex flex-col justify-between lg:h-[10rem] mt-3 gap-3 md:gap-5">
              <p>
                {profile?.name} is a
                <span className="text-orange-500 font-bold">
                  {` ${profile?.breeds?.primary} `}
                </span>
              </p>
              <p className="">
                {profile?.gender === "Male" ? "He" : "She"} is
                <span className="text-orange-500 font-bold">
                  {profile?.attributes?.house_trained
                    ? " house trained"
                    : " not yet house trained"}
                </span>
              </p>

              <p className="">
                Vaccines/shots are
                <span className="text-orange-500 font-bold">
                  {profile?.attributes?.shots_current
                    ? " fully up to date!"
                    : " not yet up to date."}
                </span>
              </p>

              <p className="">
                {profile?.name} has
                <span className="text-orange-500 font-bold">
                  {profile?.attributes?.spayed_neutered
                    ? " been spayed/neutered"
                    : " not yet been spayed/neutered"}
                </span>
              </p>

              <li className="list-none text-error font bold mb-6">
                {profile?.attributes?.special_needs ? "Special Needs" : ""}
              </li>

              <button
                onClick={() => navigate("/search")}
                className="bottom-10  md:absolute w-36 text-orange-200 bg-indigo-300 p-2 rounded-xl shadow hover:shadow-xl"
              >
                Back To Search
              </button>
            </div>
          </div>
        </div>

        {/* ADOPT MODAL */}
        <input type="checkbox" id="adopt-modal" className="modal-toggle" />
        <form className="modal" onSubmit={() => navigate("/adoptionRequest")}>
          <div className="modal-box p-6 border-2 border-indigo-400">
            <h1 className="font-bold mb-5">Adoption Request</h1>
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="name">Name</label>
              <input
                required
                className="w-[90%] rounded-lg p-1 border-2 border-indigo-200"
                type="text"
                name="name"
                id="name"
              />

              <label htmlFor="email">Email</label>
              <input
                required
                className="w-[90%] rounded-lg p-1 border-2 border-indigo-200"
                type="email"
                name="email"
                id="email"
              />

              <label htmlFor="number">Phone Number</label>
              <input
                min="9"
                required
                className="w-[40%] rounded-lg p-1 border-2 border-indigo-200"
                placeholder="(555)-555-5555"
                type="number"
                name="number"
                id="number"
              />

              <label htmlFor="description">Description of household</label>
              <textarea
                required
                className="w-[80%] h-40 rounded-lg p-1 border-2 border-indigo-200 resize-none	"
                type="text"
                name="description"
                id="description"
              />

              <div className="flex w-full mt-2">
                <label>Current animals in household?</label>

                <div className="ml-5 gap-3 flex">
                  <label htmlFor="yes">Yes</label>
                  <input
                    required
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
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
        {/* END MODAL */}
      </div>
    </div>
  );
}

export default Animal;
