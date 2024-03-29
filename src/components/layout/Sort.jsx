import { useContext, useState } from "react";
import AnimalContext from "../../context/AnimalContext";
import dog from "../Assets/dog.webp";
import happy from "../Assets/happy.webp";
import horse from "../Assets/horse.webp";
import rabbit from "../Assets/rabbit.webp";
import { useNavigate } from "react-router-dom";

function Sort() {
  const [dropdown, setDropdown] = useState(false);
  const { setSort, makeCall } = useContext(AnimalContext);

  const onClick = (animal) => {
    makeCall(animal);
    setDropdown(false);
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 my-2">
      <div>
        <div className="grid grid-cols-4 gap-2 lg:grid-cols-1 md:grid-cols-4 items-center lg:flex">
          <button className="hidden lg:block" onClick={() => navigate("/")}>
            <i className="fa-solid fa-chevron-left text-indigo-300 text-xl mr-5 " />
          </button>
          <button
            onClick={() => onClick("dog")}
            className="bg-indigo-100 border-indigo-500 text-indigo-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown one card w-[4rem] h-[6rem] lg:h-[5rem] badge badge-outline justify-center items-center"
          >
            <img className="h-10 mb-2" src={dog} alt="dog" />
            Dogs
          </button>
          <button
            onClick={() => onClick("cat")}
            className="bg-green-100 hover:shadow-xl text-green-400 border-green-500 shadow-md animate__animated animate__fadeInDown two card w-[4rem] h-[6rem] lg:h-[5rem] badge justify-center items-center"
          >
            <img className="h-10 mb-2" src={happy} alt="cat" />
            Cats
          </button>
          <button
            onClick={() => onClick("horse")}
            className="bg-indigo-100 border-indigo-500 text-indigo-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown three card w-[4rem] h-[6rem] lg:h-[5rem] badge justify-center items-center"
          >
            <img className="h-10 mb-2" src={horse} alt="horse" />
            Horses
          </button>
          <div className="flex flex-col items-center">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="bg-green-100  border-green-500 text-green-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown four card w-[4rem] h-[6rem] lg:h-[5rem] badge  justify-center items-center"
            >
              <img className="h-10 mb-2" src={rabbit} alt="rabbit" />
              Other
            </button>

            <div
              className={
                dropdown
                  ? "block flex flex-col items-center mt-4 absolute top-[6rem] z-[1] gap-2 "
                  : "hidden"
              }
            >
              <button
                onClick={() => onClick("rabbit")}
                className="bg-indigo-100 border-indigo-500 text-indigo-700 hover:shadow-xl shadow-md animate__animated animate__fadeInDown three card w-[5rem] h-[5rem] lg:h-[4rem] badge justify-center items-center"
              >
                Rabbits
              </button>
              <button
                onClick={() => onClick("bird")}
                className="bg-green-100 border-green-500 text-indigo-400 hover:shadow-xl shadow-md animate__animated animate__fadeInDown two card w-[5rem] h-[5rem] lg:h-[4rem] badge justify-center items-center"
              >
                Birds
              </button>
              <button
                onClick={() => onClick("barnyard")}
                className=" bg-indigo-100 border-indigo-500 text-indigo-700 hover:shadow-xl shadow-md animate__animated animate__fadeInDown one card w-[5rem] h-[5rem] lg:h-[4rem] badge justify-center items-center"
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
