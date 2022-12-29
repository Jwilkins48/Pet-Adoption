import { useContext } from "react";
import Wish from "../components/animals/Wish";
import AnimalContext from "../context/AnimalContext";

function Wishlist() {
  const { wishlistArr } = useContext(AnimalContext);
  //remove duplicates
  let uniqueWishlist = Array.from(new Set(wishlistArr.map((a) => a.id))).map(
    (id) => {
      return wishlistArr.find((a) => a.id === id);
    }
  );

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {uniqueWishlist?.map((item) => (
          <Wish key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
