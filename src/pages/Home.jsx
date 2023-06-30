import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AnimalContext from "../context/AnimalContext";
import adopt from "../components/Assets/project.webp";
import dog from "../components/Assets/dog.webp";
import happy from "../components/Assets/happy.webp";
import horse from "../components/Assets/horse.webp";
import rabbit from "../components/Assets/rabbit.webp";
import Input from "../components/layout/Input";
import "animate.css";

function Home() {
  const { makeCall } = useContext(AnimalContext);
  const navigate = useNavigate();

  const onClick = async (animal) => {
    navigate("/search");
    makeCall(animal);
  };
  return (
    <div className="home w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-28">
      <div className="flex-col flex justify-center">
        <h1 className="word text-indigo-400 tracking-tight text-[2.5rem] lg:text-[3rem] lg:w-[40rem] mb-2 ml-3">
          Ready To Meet Your New Best Friend?
        </h1>

        <Input />
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8 flex justify-start ml-2">
          <button
            onClick={() => onClick("dog")}
            className="customPink hover:shadow-xl shadow-md animate__animated animate__fadeInDown one card w-[9rem] badge badge-outline badge-secondary h-[8rem] justify-center items-center"
          >
            <img width="82" height="100" className="mb-2" src={dog} alt="dog" />
            Dogs
          </button>
          <button
            onClick={() => onClick("cat")}
            className="customBlue hover:shadow-xl shadow-md animate__animated animate__fadeInDown two card w-[9rem] badge badge-outline badge-primary h-[8rem] justify-center items-center"
          >
            <img
              width="82"
              height="100"
              className="mb-2"
              src={happy}
              alt="dog"
            />
            Cats
          </button>
          <button
            onClick={() => onClick("horse")}
            className="customPink hover:shadow-xl shadow-md animate__animated animate__fadeInDown three card w-[9rem] badge badge-outline badge-secondary h-[8rem] justify-center items-center"
          >
            <img
              width="82"
              height="100"
              className="mb-2"
              src={horse}
              alt="dog"
            />
            Horses
          </button>
          <button
            onClick={() => onClick("rabbit")}
            className="customBlue hover:shadow-xl shadow-md animate__animated animate__fadeInDown four card w-[9rem] badge badge-outline badge-primary h-[8rem] justify-center items-center"
          >
            <img
              width="82"
              height="100"
              className="mb-2"
              src={rabbit}
              alt="dog"
            />
            Rabbits
          </button>
        </div>
      </div>
      <div>
        <figure className="lg:ml-10 mb-10">
          <img width="650" height="100" src={adopt} alt="animal friends" />
        </figure>
      </div>
    </div>
  );
}

export default Home;
