import { useContext } from "react";
import paw from "../Assets/paw-prints.png";
import AnimalContext from "../../context/AnimalContext";
import { useNavigate } from "react-router-dom";

function AnimalCard({ item }) {
  let gender = item.gender;
  const { animalsArray } = useContext(AnimalContext);

  const navigate = useNavigate();
  let petImage = item.photos.length > 0 ? item.photos[0].medium : paw;
  return (
    <div className="card h-[35rem] w-95 bg-base-100 shadow-xl mt-5">
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
          <button
            onClick={() => {
              navigate(`animals/${item.name}`);
              console.log(animalsArray);
            }}
            className="btn btn-primary"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnimalCard;
