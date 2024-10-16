import { stats } from "@/app/libs/data";
import { FaRegMoneyBillAlt, FaUser } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import StatCard from "./StatCard";

const Statistic = () => {
  return (
    <div className=" w-full h-1/4 xl:mt-8  py-5 pr-6 ">
      <div className=" flex justify-between mb-2">
        <p className=" text-accent-500  font-bold">Statistics</p>
        <div className=" flex gap-5">
          <div className=" flex space-x-1 text-accent-500 items-center font-semibold text-sm">
            <FaUser />
            <p>73</p>
          </div>
          <div className=" flex space-x-1 text-accent-500 items-center font-semibold text-sm">
            <FaRegMoneyBillAlt />
            <p>24.60</p>
          </div>
          <div className=" flex space-x-1 text-accent-500 items-center font-semibold text-sm">
            <FaGun />
            <p>56</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3   h-full ">
        {stats.map((stat) => (
          <StatCard key={stat.name} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default Statistic;
