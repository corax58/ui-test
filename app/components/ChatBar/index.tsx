import { BiArrowToRight } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import MessageBoard from "./MessageBoard";
import MessageBox from "./MessageBox";

const ChatBar = () => {
  return (
    <div className=" bg-accent-900 w-1/3 h-full rounded-tl-3xl">
      <div className="h-4/5  px-4 pt-4 xl:px-6 xl:pt-6 ">
        <div className="text-accent-500 flex justify-between border-b pb-4 border-accent-600">
          <BiArrowToRight className=" size-6 " />
          <div className="flex gap-2 items-center">
            <div className=" flex items-end">
              <FaUser />
              <div className=" size-1.5 rounded-full bg-green-500   -mb-0.5 -ml-1"></div>
            </div>
            <p className=" text-xs font-semibold">430</p>
          </div>
        </div>
        <MessageBoard />
      </div>
      <MessageBox />
    </div>
  );
};

export default ChatBar;
