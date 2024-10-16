import { message } from "@/app/libs/types";
import Image from "next/image";

interface Props {
  message: message;
}
const MessageCard = ({
  message: { icon, message, name, number, profilePicture, time },
}: Props) => {
  return (
    <div className=" flex gap-2 border-b py-2 border-accent-600 w-full">
      <div className="flex flex-col gap-2 w-max items-center justify-center">
        <Image
          src={profilePicture}
          alt="profile picture"
          className=" xl:w-12 w-16 rounded-lg"
        />
        {icon}
      </div>

      <div className=" flex flex-col gap-2 w-full">
        <div className=" flex justify-between w-full">
          <div className="flex text-sm gap-2">
            <p className=" text-slate-100">{name}</p>
            <p className=" text-accent-500 text-xs font-bold">{`[${number}]`}</p>
          </div>
          <p className=" text-accent-500 text-xs font-semibold">{time}</p>
        </div>
        <div className=" text-accent-500 text-xs font-semibold">{message}</div>
      </div>
    </div>
  );
};

export default MessageCard;
