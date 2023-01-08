import { useContext } from "react";
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
    <div className="flex justify-between items-center gap-5">
      <div className="flex gap-5">
        <button
          onClick={() => onClick("dog")}
          className="bg-indigo-100 border-indigo-500 text-indigo-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown one card w-[5rem] badge badge-outline h-[5rem] justify-center items-center"
        >
          <img className="h-10 mb-2" src={dog} alt="dog" />
          Dogs
        </button>
        <button
          onClick={() => onClick("cat")}
          className="bg-green-100 hover:shadow-xl text-green-400 border-green-500 shadow-md animate__animated animate__fadeInDown two card w-[5rem] badge  h-[5rem] justify-center items-center"
        >
          <img className="h-10 mb-2" src={happy} alt="dog" />
          Cats
        </button>
        <button
          onClick={() => onClick("horse")}
          className="bg-indigo-100 border-indigo-500 text-indigo-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown three card w-[5rem] badge  h-[5rem] justify-center items-center"
        >
          <img className="h-10 mb-2" src={horse} alt="dog" />
          Horses
        </button>
        <button
          onClick={() => onClick("rabbit")}
          className="bg-green-100  border-green-500 text-green-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown four card w-[5rem] badge  h-[5rem] justify-center items-center"
        >
          <img className="h-10 mb-2" src={rabbit} alt="dog" />
          Rabbits
        </button>
      </div>

      <select
        className="rounded-xl shadow h-9 w-56 border-2 border-indigo-300 text-indigo-400"
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
  );
}

export default Sort;
