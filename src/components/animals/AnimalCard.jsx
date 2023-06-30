import { useContext, useState } from "react";
import paw from "../Assets/paw-prints.webp";
import AnimalContext from "../../context/AnimalContext";
import { useNavigate, Link } from "react-router-dom";
import "animate.css";

function AnimalCard({ item }) {
  let gender = item.gender;
  let nameSize = item.name.length;
  const { addToWishlist, removeFromWishlist, uniqueWishlist } =
    useContext(AnimalContext);
  const [wishlist, setWishlist] = useState(false);

  //Check if object is in wishlist array
  const isFound = uniqueWishlist.some((element) => {
    if (element.id === item.id) {
      return true;
    }
    return false;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const wish = {
      id: item.id,
      name: item.name,
      img: item.photos,
      gender: item.gender,
      age: item.age,
      description: item.description,
      checked: wishlist,
    };
    if (wish.checked === false) {
      item.clicked = true;
      addToWishlist(wish);
    } else {
      item.clicked = false;
      removeFromWishlist(item.id);
    }
    setWishlist(!wishlist);
  };

  const navigate = useNavigate();
  let petImage = item.photos.length > 0 ? item.photos[0].medium : paw;
  return (
    <form className="animate__animated animate__fadeIn card relative border-2 border-indigo-300 bg-indigo-100 shadow-xl h-[36rem] my-2 ">
      <button onClick={(e) => handleSubmit(e)}>
        {isFound === true ? (
          <i className="fa-solid fa-heart absolute right-10 badge px-2 py-3 top-8 badge-secondary"></i>
        ) : (
          <i className="fa-regular fa-heart absolute right-10 badge px-2 py-3 top-8 badge-ghost"></i>
        )}
      </button>
      <figure className="p-3">
        <img
          className="rounded-xl mt-2 h-64 w-[18rem]"
          src={petImage}
          alt="animal"
        />
      </figure>
      <div className="divider mx-4 mt-8">
        <i className="fa-solid fa-hippo text-primary" />
      </div>
      <div className="card-body py-1">
        <div className="flex items-center">
          <h2
            style={{ fontSize: nameSize > 10 ? "13px" : "" }}
            className={nameSize >= 8 ? "truncate card-title" : "card-title"}
          >
            {item.name}
          </h2>
          <div className="badge text-base-100 badge-primary ml-2 p-2.5">
            {item.age}
          </div>
          <div
            className={
              gender === "Male"
                ? "badge badge-info text-base-100 ml-2 p-2.5"
                : "badge badge-secondary text-neutral ml-2 p-2.5"
            }
          >
            {item.gender}
          </div>
        </div>
        <p className="leading-6 description">
          {item.description !== null
            ? item.description
            : `${item.name} is a beautiful ${item.age} ${item.species} in need of a loving family. Come meet them today!`}
        </p>

        <div className="card-actions justify-end mb-6">
          <Link className="text-gray-600" to={`/search/animals/${item.id}`}>
            Visit Profile
          </Link>
        </div>
      </div>
    </form>
  );
}

export default AnimalCard;
