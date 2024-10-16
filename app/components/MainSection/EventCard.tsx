import { EventCards } from "@/app/libs/data";
import Image from "next/image";

const EventCard = () => {
  return (
    <div className=" w-full  h-44 mt-10">
      <div className=" grid grid-cols-3  gap-5 xl:gap-4 pr-6">
        {EventCards.map((card) => (
          <div
            key={card.color}
            className=" h-44 xl:h-52  w-full xl:w-44 flex rounded-3xl"
            style={{ backgroundColor: card.color }}
          >
            <Image
              src={card.image}
              alt="card image"
              quality={100}
              className=" object-cover absolute -mt-7"
            />
            <div className=" size-full flex items-end p-5">
              <p className=" text-xs text-slate-100 font-semibold">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
