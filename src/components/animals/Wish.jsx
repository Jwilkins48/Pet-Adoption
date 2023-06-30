import { useContext } from "react";
import paw from "../Assets/paw-prints.webp";
import AnimalContext from "../../context/AnimalContext";

import { Link, useNavigate } from "react-router-dom";

function Wish({ item }) {
  let gender = item.gender;
  let petImage = item.img.length > 0 ? item.img[0].medium : paw;
  const { removeFromWishlist } = useContext(AnimalContext);
  const navigate = useNavigate();

  return (
    <form className="card h-[35rem] pt-5 w-95 bg-base-100 shadow-xl mt-5 relative border-2 border-pink-300">
      <button onClick={() => removeFromWishlist(item.id)}>
        <i className="fa-solid fa-heart absolute right-12 badge px-2 py-3 top-8 badge-secondary" />
      </button>
      <figure className="px-2">
        <img
          className="rounded-xl h-60 w-[18rem]"
          src={petImage}
          alt="animal"
        />
      </figure>
      <div className="divider mx-4 mt-8">
        <i className="fa-solid fa-hippo text-primary" />
      </div>{" "}
      <div className="card-body">
        <div className="flex items-center">
          <h2 className="card-title">{item.name}</h2>
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
        <div className="card-actions justify-end mb-6">
          <Link className="text-gray-600" to={`/search/animals/${item.id}`}>
            Visit Profile
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Wish;
