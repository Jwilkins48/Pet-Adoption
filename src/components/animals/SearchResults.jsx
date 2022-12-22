import { useContext } from "react";
import AnimalContext from "../../context/AnimalContext";
import Input from "../layout/Input";
import AnimalCard from "./AnimalCard";

function SearchResults() {
  //Searched array
  const { animals } = useContext(AnimalContext);

  return (
    <div>
      <Input />
      {animals.map((item) => (
        <div>
          <AnimalCard key={item.name} item={item} />
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
