import React from "react";
import Card from "./Card";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#070707] px-6 sm:px-10 pt-[100px]">
      <h1 className=" text-white font-semibold text-2xl sm:text-4xl text-center py-5">
        Lorem ipsum dolor sit amet consectetur.
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 py-4 relative animate-slowfade">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <Card key={i} />
        ))}
      </div>
      <h1 className=" text-white font-semibold text-2xl sm:text-4xl text-center py-5">
        VIZON Lorem ipsum dolor sit amet consectetur.
      </h1>
    </div>
  );
};

export default Home;
