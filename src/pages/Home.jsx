import { useContext } from "react";
import "animate.css";
import { useNavigate } from "react-router-dom";
import AnimalContext from "../context/AnimalContext";
import dog from "../components/Assets/dog.png";
import happy from "../components/Assets/happy.png";
import horse from "../components/Assets/horse.png";
import rabbit from "../components/Assets/rabbit.png";
import Input from "../components/layout/Input";

function Home() {
  const { searchAnimal, dispatch } = useContext(AnimalContext);
  const navigate = useNavigate();

  const onClick = async (animal) => {
    navigate("/search");
    const animalList = searchAnimal(animal);
    console.log(animalList);
    dispatch({ type: "GET_ANIMALS", payload: animalList });
  };
  return (
    <div className="w-full">
      <h1 className="text-5xl lg:w-[40rem] mb-10 ml-4">
        Ready To Meet Your New Best Friend?
      </h1>

      <Input />
      <div className="container flex justify-start gap-12 ml-3">
        <button
          onClick={() => onClick("dog")}
          className="animate__animated animate__fadeInDown one card w-[9rem] badge badge-outline badge-secondary h-[8rem] justify-center items-center"
        >
          <img className="h-20 mb-2" src={dog} alt="dog" />
          Dogs
        </button>
        <button
          onClick={() => onClick("cat")}
          className="animate__animated animate__fadeInDown two card w-[9rem]  badge badge-outline badge-primary h-[8rem] justify-center items-center"
        >
          <img className="h-20 mb-2" src={happy} alt="dog" />
          Cats
        </button>
        <button
          onClick={() => onClick("horse")}
          className="animate__animated animate__fadeInDown three card w-[9rem] badge badge-outline badge-secondary h-[8rem] justify-center items-center"
        >
          <img className="h-20 mb-2" src={horse} alt="dog" />
          Horses
        </button>
        <button
          onClick={() => onClick("rabbit")}
          className="animate__animated animate__fadeInDown four card w-[9rem] badge badge-outline badge-primary h-[8rem] justify-center items-center"
        >
          <img className="h-20 mb-2" src={rabbit} alt="dog" />
          Other Animals
        </button>
      </div>
    </div>
  );
}

export default Home;
