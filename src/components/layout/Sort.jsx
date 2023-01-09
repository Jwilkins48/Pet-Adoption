import { useContext, useState } from "react";
import AnimalContext from "../../context/AnimalContext";
import dog from "../Assets/dog.png";
import happy from "../Assets/happy.png";
import horse from "../Assets/horse.png";
import rabbit from "../Assets/rabbit.png";

function Sort() {
  const { setSort, searchAnimal, dispatch } = useContext(AnimalContext);
  const onClick = async (animal) => {
    const animalList = searchAnimal(animal);
    dispatch({ type: "GET_ANIMALS", payload: animalList });
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 my-2">
      <div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:flex">
          <button
            onClick={() => onClick("dog")}
            className="bg-indigo-100 border-indigo-500 text-indigo-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown one card lg:w-[5rem] w-32  w-32 h-[6rem] lg:h-[5rem] badge badge-outline justify-center items-center"
          >
            <img className="h-10 mb-2" src={dog} alt="dog" />
            Dogs
          </button>
          <button
            onClick={() => onClick("cat")}
            className="bg-green-100 hover:shadow-xl text-green-400 border-green-500 shadow-md animate__animated animate__fadeInDown two card lg:w-[5rem]  w-32 h-[6rem] lg:h-[5rem] w-32 badge justify-center items-center"
          >
            <img className="h-10 mb-2" src={happy} alt="dog" />
            Cats
          </button>
          <button
            onClick={() => onClick("horse")}
            className="bg-indigo-100 border-indigo-500 text-indigo-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown three card lg:w-[5rem] w-32  w-32 h-[6rem] lg:h-[5rem] badge justify-center items-center"
          >
            <img className="h-10 mb-2" src={horse} alt="dog" />
            Horses
          </button>
          <button
            onClick={() => onClick("rabbit")}
            className="bg-green-100  border-green-500 text-green-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown four card lg:w-[5rem] w-32 h-[6rem] lg:h-[5rem] badge  justify-center items-center"
          >
            <img className="h-10 mb-2" src={rabbit} alt="dog" />
            Rabbits
          </button>
        </div>
      </div>

      <div>
        <select
          className="rounded-xl shadow h-9 lg:w-56 w-72 border-2 border-indigo-300 text-indigo-400"
          name="sort"
          id="sort"
          defaultValue={"DEFAULT"}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="DEFAULT">None</option>
          <option value="ASC">Ascending (A-Z)</option>
          <option value="DESC">Descending (Z-A)</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
