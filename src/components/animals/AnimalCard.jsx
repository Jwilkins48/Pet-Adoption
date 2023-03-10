import { useContext, useState } from "react";
import paw from "../Assets/paw-prints.png";
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
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="animate__animated animate__fadeIn card h-[36rem] w-95 bg-base-100 shadow-xl my-2 relative"
    >
      <button type="submit">
        {isFound === true ? (
          <i className="fa-solid fa-heart absolute right-10 badge  px-2 py-3 top-3 badge-secondary"></i>
        ) : (
          <i className="fa-regular fa-heart absolute right-10 badge px-2 py-3 top-3 badge-ghost"></i>
        )}
      </button>
      <figure className="p-3">
        <img
          className="rounded-xl h-60 w-[18rem]"
          src={petImage}
          alt="animal"
        />
      </figure>
      <hr className="mt-8 w-80 mx-auto" />
      <div className="card-body">
        <div className="flex items-center">
          <h2
            style={{ fontSize: nameSize > 10 ? "13px" : "" }}
            className={nameSize >= 25 ? "truncate card-title" : "card-title"}
          >
            {item.name}
          </h2>
          <div className="badge badge-outline badge-primary ml-2 p-2.5">
            {item.age}
          </div>
          <div
            className={
              gender === "Male"
                ? "badge badge-primary ml-2 p-2.5"
                : "badge badge-secondary ml-2 p-2.5"
            }
          >
            {item.gender}
          </div>
        </div>
        <p>
          {item.description !== null
            ? item.description
            : `${item.name} is a beautiful ${item.age} ${item.species} in need of a loving family. Come meet them today!`}
        </p>
        {/* </div> */}

        <div className="card-actions justify-end">
          <Link
            className="text-base-content text-opacity-40"
            to={`/search/animals/${item.id}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </form>
  );
}

export default AnimalCard;
