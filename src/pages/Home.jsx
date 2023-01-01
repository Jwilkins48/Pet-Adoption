import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AnimalContext from "../context/AnimalContext";
import adopt from "../components/Assets/project.png";
import dog from "../components/Assets/dog.png";
import happy from "../components/Assets/happy.png";
import horse from "../components/Assets/horse.png";
import rabbit from "../components/Assets/rabbit.png";
import Input from "../components/layout/Input";
import "animate.css";

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
    <div className="home w-full grid sm:grid-cols-1 md:grid-cols-2 gap-8 ">
      <div className="flex-col flex justify-center">
        <h1 className="word text-indigo-400 text-6xl tracking-tight text-5xl lg:w-[40rem] mb-10 ml-4">
          Ready To Meet Your New Best Friend?
        </h1>

        <Input />
        <div className="container grid lg:grid-cols-4  sm:grid-cols-2 flex justify-start gap-8 ml-2">
          <button
            onClick={() => onClick("dog")}
            className="customPink hover:shadow-xl shadow-md animate__animated animate__fadeInDown one card w-[9rem] badge badge-outline badge-secondary h-[8rem] justify-center items-center"
          >
            <img className="h-20 mb-2" src={dog} alt="dog" />
            Dogs
          </button>
          <button
            onClick={() => onClick("cat")}
            className="customBlue hover:shadow-xl shadow-md animate__animated animate__fadeInDown two card w-[9rem] badge badge-outline badge-primary h-[8rem] justify-center items-center"
          >
            <img className="h-20 mb-2" src={happy} alt="dog" />
            Cats
          </button>
          <button
            onClick={() => onClick("horse")}
            className="customPink hover:shadow-xl shadow-md animate__animated animate__fadeInDown three card w-[9rem] badge badge-outline badge-secondary h-[8rem] justify-center items-center"
          >
            <img className="h-20 mb-2" src={horse} alt="dog" />
            Horses
          </button>
          <button
            onClick={() => onClick("rabbit")}
            className="customBlue hover:shadow-xl shadow-md animate__animated animate__fadeInDown four card w-[9rem] badge badge-outline badge-primary h-[8rem] justify-center items-center"
          >
            <img className="h-20 mb-2" src={rabbit} alt="dog" />
            Other Animals
          </button>
        </div>
      </div>
      <div>
        <figure className="ml-16 mb-10">
          <img src={adopt} alt="animal friends" />
        </figure>
      </div>
    </div>
  );
}

export default Home;
