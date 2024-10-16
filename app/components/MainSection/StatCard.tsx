import { stat } from "@/app/libs/types";
import Image from "next/image";
import { ImArrowUp } from "react-icons/im";

interface Props {
  stat: stat;
}

const StatCard = ({
  stat: {
    characterImage,
    firstPrice,
    firstWeaponImage,
    increase,
    involved,
    name,
    secondPrice,
    secondWeaponImage,
  },
}: Props) => {
  return (
    <div className=" h-max w-full flex justify-between px-6 py-5 bg-accent-600  rounded-2xl">
      <div className="flex gap-6 w-1/2">
        <Image src={characterImage} alt="character image" className=" avatar" />
        <div className=" flex flex-col justify-center ">
          <p className="text-accent-500 text-xs">{name}</p>
          <p className=" text-xs text-white font-bold flex gap-1">
            {firstPrice} $
          </p>
        </div>
        <Image
          src={firstWeaponImage}
          alt="character image"
          className=" size-12 rotate-90"
        />
      </div>
      {involved ? (
        <button className=" border-2 border-accent-400 rounded-xl text-slate-100 text-xs px-4 py-2 h-max">
          Involved
        </button>
      ) : (
        <div className=" w-2/3 h-10 flex justify-between ">
          <button className=" border-2 border-green-500 rounded-xl text-slate-100 text-xs px-5 py-2">
            {secondPrice} $
          </button>
          <Image
            src={secondWeaponImage!}
            alt="character image"
            className=" object-contain w-max rotate-12"
          />
          <div className=" flex gap-2  h-full items-center">
            <p className="  text-xs text-white font-bold flex gap-1">
              {increase} $
            </p>
            <ImArrowUp className=" text-green-500 size-3" />
          </div>
        </div>
      )}
    </div>
  );
};

export default StatCard;
