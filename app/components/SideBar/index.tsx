import { guns, multipliers } from "@/app/libs/data";
import { FaBell, FaYoutube } from "react-icons/fa";
import Graph from "./Graph";
import GunCard from "./GunCard";
import LastWin from "./LastWin";

const SideBar = () => {
  const multiplierClassNames =
    " w-full h-full flex items-center justify-center text-slate-300 rounded-xl border-2 text-sm ";

  return (
    <div className=" bg-accent-900  w-1/4 xl:w-1/5 h-screen flex flex-col px-4 space-y-6 pt-6">
      <div className="w-full flex justify-end space-x-4  items-center ">
        <div className="flex">
          <FaBell className=" text-accent-500" />
          <div className=" rounded-full w-1 h-1 bg-green-500 "></div>
        </div>
        <div className="flex">
          <FaYoutube className="text-accent-500" />
          <div className=" rounded-full w-1 h-1 bg-red-500"></div>
        </div>
      </div>

      <Graph />
      <div className=" flex w-full  h-10 space-x-3">
        {multipliers.map((multiplier) => (
          <div
            className={multiplierClassNames + ` border-${multiplier.color}-600`}
          >
            <p>{multiplier.value}</p>
          </div>
        ))}
      </div>
      <LastWin />
      <div className=" w-full flex justify-between items-center ">
        <div className="flex flex-col">
          <p className=" text-xs font-semibold text-accent-500">Checked</p>
          <p className=" text-sm font-semibold text-white">0.0$</p>
        </div>
        <div className=" flex  space-x-2">
          <p className=" text-xs font-semibold text-accent-500">All</p>
          <div className=" border-2 border-blue-600 size-4 rounded"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3  flex-grow no-scrollbar overflow-y-scroll">
        {guns.map((gun) => (
          <GunCard key={gun.name} gun={gun} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
