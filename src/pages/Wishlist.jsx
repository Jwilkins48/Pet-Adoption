import { useContext } from "react";
import Wish from "../components/animals/Wish";
import AnimalContext from "../context/AnimalContext";
import { useNavigate } from "react-router-dom";
import adopt from "../components/Assets/adoptAll.png";

function Wishlist() {
  const { uniqueWishlist } = useContext(AnimalContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
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
                  className="btn w-40 shadow-lg bg-[#fed7aa] text-orange-500 mr-5 border-transparent hover:bg-orange-100 hover:text-indigo-400 hover:shadow-xl hover:border-transparent btn-outline "
                >
                  Back To Search
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="btn w-40 shadow-lg bg-indigo-200 text-indigo-500 border-transparent hover:bg-orange-100 hover:text-indigo-400 hover:shadow-xl hover:border-transparent btn-outline "
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
