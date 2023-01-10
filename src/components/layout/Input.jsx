import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AnimalContext from "../../context/AnimalContext";

function Input() {
  const navigate = useNavigate();
  const { dispatch, searchAnimal } = useContext(AnimalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/search");
    const animalList = searchAnimal(e.target.value);
    console.log(animalList);
    dispatch({ type: "GET_ANIMALS", payload: animalList });
  };
  return (
    <div className="grid grid-cols-1 mb-8 gap-8">
      <div className="w-full">
        <select
          onChange={(e) => handleSubmit(e)}
          className="select select-bordered select-secondary w-full h-16"
        >
          <option value="select">Select Animal</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="bird">Birds</option>
          <option value="barnyard">Barnyard animals</option>
          <option value="horse">Horses</option>
          <option value="rabbit">Rabbits</option>
        </select>
      </div>
    </div>
  );
}

export default Input;
