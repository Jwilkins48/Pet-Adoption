import { useContext } from "react";
import Wish from "../components/animals/Wish";
import AnimalContext from "../context/AnimalContext";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const { uniqueWishlist } = useContext(AnimalContext);
  const navigate = useNavigate();
  return (
    <div className="mt-32">
      <h1
        className={
          uniqueWishlist?.length > 0
            ? "block text-5xl underline lg:mt-[-50px] mb-10 text-indigo-500 font-bold"
            : "hidden"
        }
      >
        WISHLIST
      </h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 animate__animated animate__fadeIn">
        {uniqueWishlist?.length > 0 ? (
          uniqueWishlist?.map((item) => <Wish key={item.id} item={item} />)
        ) : (
          <div>
            <div>
              <h1 className="text-6xl font-bold text-indigo-500 mb-10 w-96 ">
                No items in wishlist!
              </h1>
              <div className="flex">
                <button
                  onClick={() => navigate("/search")}
                  className="btn w-40 shadow-lg bg-[#fed7aa] text-orange-500 mr-5 border-transparent hover:bg-orange-100 hover:text-orange-300 hover:shadow-xl hover:border-transparent btn-outline "
                >
                  Back To Search
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="btn w-40 shadow-lg bg-indigo-300 text-indigo-500 border-transparent hover:bg-indigo-200 hover:text-indigo-400 hover:shadow-xl hover:border-transparent btn-outline "
                >
                  Back To Home
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
