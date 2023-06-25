import { useContext, useState } from "react";
import AnimalContext from "../../context/AnimalContext";
import dog from "../Assets/dog.png";
import happy from "../Assets/happy.png";
import horse from "../Assets/horse.png";
import rabbit from "../Assets/rabbit.png";
import { useNavigate } from "react-router-dom";

function Sort() {
  const { setSort, searchAnimal, dispatch, makeCall } =
    useContext(AnimalContext);
  const [dropdown, setDropdown] = useState(false);
  const onClick = async (animal) => {
    makeCall(animal);
    // const animalList = searchAnimal(animal);
    // dispatch({ type: "GET_ANIMALS", payload: animalList });
    setDropdown(false);
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 my-2">
      <div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 md:grid-cols-4 items-center lg:flex">
          <button className="hidden lg:block" onClick={() => navigate("/")}>
            <i className="fa-solid fa-chevron-left text-indigo-300 text-xl mr-5 " />
          </button>
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
            <img className="h-10 mb-2" src={happy} alt="cat" />
            Cats
          </button>
          <button
            onClick={() => onClick("horse")}
            className="bg-indigo-100 border-indigo-500 text-indigo-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown three card lg:w-[5rem] w-32 h-[6rem] lg:h-[5rem] badge justify-center items-center"
          >
            <img className="h-10 mb-2" src={horse} alt="horse" />
            Horses
          </button>
          <div className="flex flex-col items-center">
            <button
              // onClick={() => onClick("rabbit")}
              onClick={() => setDropdown(!dropdown)}
              className="bg-green-100  border-green-500 text-green-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown four card lg:w-[5rem] w-32 h-[6rem] lg:h-[5rem] badge  justify-center items-center"
            >
              <img className="h-10 mb-2" src={rabbit} alt="rabbit" />
              Other
            </button>

            <div
              className={
                dropdown
                  ? "block flex flex-col items-center mt-2 absolute top-[6rem] z-[1] gap-2 "
                  : "hidden"
              }
            >
              <button
                onClick={() => onClick("rabbit")}
                className="bg-indigo-100 border-indigo-500 text-indigo-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown three card lg:w-[4.5rem] w-32 h-[6rem] lg:h-[4rem] badge justify-center items-center"
              >
                Rabbits
              </button>
              <button
                onClick={() => onClick("bird")}
                className="bg-green-100 border-green-500 text-green-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown two card lg:w-[4.5rem] w-32 h-[6rem] lg:h-[4rem] badge justify-center items-center"
              >
                Birds
              </button>
              <button
                onClick={() => onClick("barnyard")}
                className=" bg-indigo-100 border-indigo-500 text-indigo-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown one card lg:w-[4.5rem] w-32 h-[6rem] lg:h-[4rem] badge justify-center items-center"
              >
                Barnyard
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <select
          className="rounded-xl shadow h-9 lg:w-56 md:w-96 w-72 border-2 border-indigo-300 text-indigo-400"
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
