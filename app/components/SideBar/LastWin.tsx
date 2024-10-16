import { avatar_1, knife_1 } from "@/public/images";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

const LastWin = () => {
  return (
    <div className=" w-full h-32 xl:h-36 bg-accent-600 rounded-3xl py-4  px-4 xl:px-5">
      <div className="  h-3/5 w-full flex">
        <div className="w-full h-full flex  items-center space-x-4">
          <Image
            src={avatar_1}
            alt="avatar"
            width={30}
            height={30}
            className=" rounded-lg"
          />
          <div className=" flex flex-col justify-center ">
            <p className="text-accent-500 text-xs">Last Win</p>
            <p className=" text-xs text-white">Hurley</p>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center p-1 ">
          <Image
            src={knife_1}
            alt="knife"
            className=" w-full h-full object-contain scale-x-[-1]"
          />
        </div>
      </div>
      <div className="  h-2/5 w-full  flex items-end justify-between">
        <button className="  h-min w-min px-4 py-2 flex items-center justify-center text-slate-300 rounded-xl border-2 text-sm border-sky-600 ">
          Join
        </button>
        <div className=" flex space-x-2 items-end  ">
          <p className="text-slate-300 text-sm font-bold ">23h : 43m</p>
          <div className="flex items-center text-accent-500 text-sm">
            <FaUser />

            <p>128</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastWin;
