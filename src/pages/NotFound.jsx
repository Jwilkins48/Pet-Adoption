import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="card h-80 w-[80%] mx-auto flex items-center justify-center bg-primary border-4 border-orange-100">
      <h1 className="text-4xl mb-10 text-orange-200 font-bold">
        Page Not Found!
      </h1>
      <div className="flex gap-3">
        <button
          className="btn mb-10 w-40 btn shadow-lg bg-[#fed7aa] border-transparent hover:bg-orange-100 hover:text-indigo-400 hover:shadow-xl hover:border-transparent btn-outline text-indigo-400 "
          onClick={() => navigate("/search")}
        >
          Return To Search
        </button>
        <button
          className="btn mb-10 w-40 btn shadow-lg bg-[#fed7aa] border-transparent hover:bg-orange-100 hover:text-indigo-400 hover:shadow-xl hover:border-transparent btn-outline text-indigo-400 "
          onClick={() => navigate("/")}
        >
          Return Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
