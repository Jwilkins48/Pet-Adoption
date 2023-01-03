import React from "react";
import { Link } from "react-router-dom";

function NavBar({ title }) {
  return (
    <nav className="navbar mb-10 py-7 pt-8 shadow-lg bg-primary">
      <div className="container lg:mx-40 mr-5 ">
        <div>
          {/* Link to home */}
          <Link to="/" className="text-xl font-bold text-blue-500 nav-title">
            {title} <i class="fa-solid fa-paw text-orange-300"></i>
          </Link>
        </div>
        <div className="flex-1">
          <div className="flex justify-end">
            <Link to="/" className="btn  text-indigo-500 btn-ghost btn-sm">
              Home
            </Link>
            <Link to="/wishlist" className="btn btn-ghost btn-sm">
              <i className=" fa-regular  text-red-400 fa-heart text-lg"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
