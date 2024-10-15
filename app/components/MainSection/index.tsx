import React from "react";
import Glow from "./Glow";
import Navbar from "./Navbar";

const MainSection = () => {
  return (
    <div className="bg-accent-800 relative w-3/4 xl:w-full -z-20">
      <Glow />
      <div className=" px-6">
        <Navbar />
      </div>
    </div>
  );
};

export default MainSection;
