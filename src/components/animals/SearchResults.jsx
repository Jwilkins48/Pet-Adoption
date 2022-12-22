import { useContext, useEffect } from "react";
import AnimalContext from "../../context/AnimalContext";
import AnimalCard from "./AnimalCard";

function SearchResults() {
  const { animalsArr } = useContext(AnimalContext);

  return (
    <div>
      {animalsArr.map((item) => (
        <div>
          <AnimalCard key={item.id} item={item} />
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
