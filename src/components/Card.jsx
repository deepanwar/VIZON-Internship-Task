import React from "react";
import pc_image from "../assets/coding.png";

const Card = () => {
  return (
    <div className="flex flex-col items-center gap-2 p-2 rounded-lg border-4 border-transparent shadow-md lg:flex-row hover:border-blue-500 bg-gray-800 ">
      <img className=" h-full md:h-auto md:w-48 " src={pc_image} alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
          Cyber Squad
        </h5>
        <p className="mb-3 font-normal text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <button className="px-3 py-1 w-full  font-semibold text-white rounded-md bg-gray-700">
          Interested
        </button>
      </div>
    </div>
  );
};

export default Card;
