import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimalContext from "../../context/AnimalContext";

function Input() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const { dispatch, searchAnimal } = useContext(AnimalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Answer");
    } else {
      navigate("/search");
      const animalList = searchAnimal();
      dispatch({ type: "GET_ANIMALS", payload: animalList });
      setName("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                className="w-full bg-gray-200 input input-lg text-black"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg btn-secondary"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
