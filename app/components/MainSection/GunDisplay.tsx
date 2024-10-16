import { gun_1 } from "@/public/images";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

const GunDisplay = () => {
  return (
    <div className=" w-full flex h-44 xl:h-52 pt-5 gap-5">
      <div className=" w-1/2  h-full flex justify-center">
        <div className="relative z-0 left-20  ">
          <div className="absolute  size-44 rounded-full border-t-8 border-b-8 border-blue-500  animate-spin"></div>
        </div>
        <div className="flex z-5 w-72">
          <Image
            src={gun_1}
            alt=" main gun"
            className=" z-50 rotate-12 object-contain "
          />
        </div>
      </div>
      <div className=" w-1/2  h-full flex flex-col justify-between ">
        <p className=" text-xl text-accent-500  font-bold">Information</p>
        <div className=" space-y-4">
          <div className=" flex items-center space-x-4 ">
            <p className=" text-3xl font-bold  text-slate-100">7.19$</p>
            <FaAngleDoubleRight className=" text-blue-600" />
            <p className=" text-3xl font-bold  text-slate-100">8.15$</p>
          </div>
          <div className="flex space-x-4">
            <button className=" px-8 py-3 space-x-1 rounded-2xl flex font-semibold text-sm  bg-accent-900">
              <p className=" text-slate-100">1.7</p>
              <p className="text-accent-500">$</p>
            </button>
            <button className=" px-5 py-3 space-x-1 rounded-2xl flex font-semibold text-sm  bg-inherit border-2 border-sky-600">
              <p className=" text-slate-100">recieve</p>
              <p className="text-accent-500">2.54x</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GunDisplay;
