import { useContext } from "react";
import AnimalContext from "../../context/AnimalContext";
import Input from "../layout/Input";
import Pagination from "../layout/Pagination";
import AnimalCard from "./AnimalCard";

function SearchResults() {
  //Searched array
  const { currentPost } = useContext(AnimalContext);

  return (
    <div>
      <Input />
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {currentPost?.map((item) => (
          <AnimalCard key={item.id} item={item} />
        ))}

        <Pagination />
      </div>
    </div>
  );
}

export default SearchResults;
