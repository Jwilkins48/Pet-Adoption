import { useContext } from "react";
import AnimalContext from "../../context/AnimalContext";

function Pagination() {
  const { postPerPage, totalPosts, setCurrentPage, currentPage } =
    useContext(AnimalContext);
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="">
      <div className="absolute bottom-2 right-5 flex gap-5">
        {pages.map((page, index) => {
          return (
            <button
              onClick={() => setCurrentPage(page)}
              className={
                page === currentPage
                  ? "btn btn-secondary px-8"
                  : "btn  btn-primary px-8"
              }
              key={index}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
