import { useContext } from "react";
import paw from "../Assets/paw-prints.png";
import AnimalContext from "../../context/AnimalContext";

import { Link } from "react-router-dom";

function Wish({ item }) {
  let gender = item.gender;
  let petImage = item.img.length > 0 ? item.img[0].medium : paw;
  const { removeFromWishlist } = useContext(AnimalContext);

  return (
    <form className="card h-[35rem] pt-5 w-95 bg-base-100 shadow-xl mt-5 relative">
      <button onClick={() => removeFromWishlist(item.id)}>
        <i className="fa-solid fa-heart absolute right-10 badge  px-2 py-3 top-3 badge-secondary"></i>
      </button>
      <figure className="px-2">
        <img
          className="rounded-xl h-60 w-[18rem]"
          src={petImage}
          alt="animal"
        />
      </figure>
      <hr className="mt-8 w-80 mx-auto" />
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

export default Wish;
