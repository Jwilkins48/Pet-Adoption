import React from "react";
import { useNavigate } from "react-router-dom";
import wave from "../components/Assets/waves.png";

function Inquiry() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 bg-indigo-200 p-12 rounded border-4 border-orange-200">
      <div className="card flex justify-between">
        <div>
          <h1 className="text-6xl text-orange-100">Thank You!</h1>
          <h3 className="text-3xl  text-indigo-400 mt-4">
            Your application will be reviewed and we'll get back to you soon!
          </h3>
        </div>

        <button
          className="btn mb-10 w-40 btn shadow-lg bg-[#fed7aa] border-transparent hover:bg-orange-100 hover:text-indigo-400 hover:shadow-xl hover:border-transparent btn-outline text-indigo-400 "
          onClick={() => navigate("/")}
        >
          Return Home
        </button>
      </div>

      <figure>
        <img className="w-full" src={wave} alt="friends waving" />
      </figure>
    </div>
  );
}

export default Inquiry;
