import { message as messageType } from "@/app/libs/types";
import { avatar_2, avatar_3, avatar_4 } from "@/public/images";
import { FaYoutube } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import MessageCard from "./MessageCard";

const MessageBoard = () => {
  const messages: messageType[] = [
    {
      name: "sQich",
      profilePicture: avatar_4,
      message: "Messages are sent as chats if the person you are",
      icon: <FaYoutube className=" text-red-600 size-3" />,
      time: "12:35",
      number: 32,
    },
    {
      name: "Ra1n",
      profilePicture: avatar_3,
      message: "There is still gonna be call of duty.",
      icon: <FaCrown className=" text-yellow-600 size-3" />,
      time: "12:33",
      number: 8,
    },
    {
      name: "Hurley",
      profilePicture: avatar_2,
      message: "do surf utopia its a great map",
      time: "11:21",
      number: 13,
    },
  ];

  return (
    <div className="h-full w-full flex flex-col">
      {messages.map((message) => (
        <MessageCard key={message.number} message={message} />
      ))}
    </div>
  );
};

export default MessageBoard;
