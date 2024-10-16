import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { Gun } from "../../libs/types";

interface Props {
  gun: Gun;
}

const GunCard = ({
  gun: { name, star, image, accentColor, condition, score },
}: Props) => {
  return (
    <div className="w-full p-4 h-max space-y-4 bg-accent-600 rounded-3xl">
      <div className="flex space-x-1 items-center">
        {star && <BsStarFill size={9} className=" text-yellow-600" />}
        <p className=" text-xs text-accent-500 font-semibold truncate">
          {name}
        </p>
      </div>
      <Image src={image} alt="gun" className=" object-contain rotate-12  " />
      <div className=" flex justify-between items-end">
        <div className="flex flex-col">
          <p className=" text-[10px] text font-semibold text-accent-500">
            {condition}
          </p>
          <p className=" text-xs font-semibold text-white">{score}</p>
        </div>
        <div
          className={`rounded-full size-[6px] bg-${accentColor}-500`}
          style={{ backgroundColor: accentColor }}
        ></div>
      </div>
    </div>
  );
};

export default GunCard;
