import React from "react";
import { Link } from "react-router-dom";

function NavBar({ title }) {
  return (
    <nav className="navbar mb-10 py-7 pt-8 shadow-lg bg-primary">
      <div className="container lg:mx-40 mr-5 ">
        <div>
          {/* Link to home */}
          <Link to="/" className="text-xl nav-title">
            {title}
          </Link>
        </div>
        <div className="flex-1">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
