"use client";
import { guns, multipliers } from "@/app/libs/data";
import { useState } from "react";
import { FaBell, FaYoutube } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import Graph from "./Graph";
import GunCard from "./GunCard";
import LastWin from "./LastWin";

const SideBar = () => {
  const [allGunsSelected, setAllGunsSelected] = useState<boolean>(true);

  return (
    <div className=" bg-accent-900  w-1/4 xl:w-1/4 h-screen flex flex-col px-4 space-y-6 pt-6">
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
          <div key={multiplier.value} className={multiplier.className}>
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
          <div
            className=" border-2 border-blue-600 size-5 p-1 rounded-lg cursor-pointer"
            onClick={() => setAllGunsSelected(!allGunsSelected)}
          >
            {allGunsSelected && (
              <ImCheckmark className=" size-full text-slate-100" />
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3   h-2/6 no-scrollbar overflow-y-scroll">
        {guns.map((gun) => (
          <GunCard key={gun.id} gun={gun} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
