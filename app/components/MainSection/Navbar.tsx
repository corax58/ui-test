import React from "react";
import { FaHome } from "react-icons/fa";
import { GiMoon } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className=" flex">
      <div className=" flex space-x-4 text-accent-500 py-6">
        <div className="">
          <IoHome className=" text-white" />
          <div className=" w-full bg-sky-700 h-1 rounded-full"></div>
        </div>

        <GiMoon />

        <RiCustomerServiceFill />
      </div>
      <div>
        <button className=" border-2 border-accent-500 px-4 py-2 rounded-2xl text-white bg-black z-50">
          Refill
        </button>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
