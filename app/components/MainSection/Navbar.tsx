import { avatar_1, flag_1 } from "@/public/images";
import Image from "next/image";
import { FaWallet } from "react-icons/fa";
import { GiMoon } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className=" flex justify-between pr-6">
      <div className=" flex w-1/3 space-x-4 text-accent-500 py-6">
        <div className="">
          <IoHome className=" text-white" />
          <div className=" w-full bg-sky-700 h-1 rounded-full"></div>
        </div>

        <GiMoon />

        <RiCustomerServiceFill />
      </div>
      <div className=" flex w-1/3 items-center space-x-5">
        <button className=" h-max border-2 border-accent-400 px-6 py-3 rounded-2xl text-sm font-semibold text-slate-200 z-50">
          Refill
        </button>
        <div className=" flex space-x-2 items-center">
          <FaWallet className="text-accent-500" />
          <p className=" font-semibold text-slate-200">
            68213.50
            <span className="font-bold text-blue-700">$</span>
          </p>
        </div>
      </div>
      <div className=" flex w-1/3  xl:w-64 justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={avatar_1}
            alt="user profile picture"
            width={40}
            height={40}
            className=" rounded-xl"
          />
          <p className=" text-white text-sm font-semibold">userName</p>
        </div>
        <Image src={flag_1} alt="user flag" className=" rounded-full size-7" />
      </div>
    </div>
  );
};

export default Navbar;
