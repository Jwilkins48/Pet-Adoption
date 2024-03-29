import { useContext } from "react";
import AnimalContext from "../../context/AnimalContext";
import Input from "../layout/Input";
import Pagination from "../layout/Pagination";
import Sort from "../layout/Sort";
import AnimalCard from "./AnimalCard";

function SearchResults() {
  //Searched array
  const { currentPost, sort, animals, makeCall } = useContext(AnimalContext);

  const ASC = [...animals]
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((item) => {
      return (
        <div key={item.id}>
          <AnimalCard key={item.id} item={item} />
        </div>
      );
    });

  const DESC = [...animals]
    .sort((a, b) => (a.name > b.name ? -1 : 1))
    .map((item) => {
      return (
        <div key={item.id}>
          <AnimalCard key={item.id} item={item} />
        </div>
      );
    });

  if (sort === "DEFAULT") {
    return (
      <div className="results-wrapper mt-32">
        <Sort />
        <div className="grid grid-cols-1 gap-8 mb-5 lg:grid-cols-4 md:grid-cols-2">
          {currentPost?.map((item) => (
            <div key={item.id}>
              <AnimalCard key={item.id} item={item} />
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    );
  } else if (sort === "ASC") {
    return (
      <div className="results-wrapper mt-32">
        <Sort />
        <div className="grid grid-cols-1 gap-8 mb-5 lg:grid-cols-4 md:grid-cols-2">
          {ASC}
        </div>
        <Pagination />
      </div>
    );
  } else if (sort === "DESC") {
    return (
      <div className="results-wrapper mt-32">
        <Sort />
        <div className="grid grid-cols-1 gap-8 mb-5 lg:grid-cols-4 md:grid-cols-2">
          {DESC}
        </div>
        <Pagination />
      </div>
    );
  }
}

export default SearchResults;
