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
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {animals?.map((item) => (
          <AnimalCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
