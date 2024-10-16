import { FaVk } from "react-icons/fa";
import { HiMiniSpeakerWave, HiPaperAirplane } from "react-icons/hi2";

const MessageBox = () => {
  return (
    <div className="  w-full h-1/5 ">
      <input
        type="text"
        placeholder="Write your message ..."
        className=" h-2/5 w-full bg-accent-700 px-6 text-sm font-semibold text-accent-400"
      />
      <div className=" h-3/5 w-full bg-accent-600 flex items-center justify-between px-6">
        <div className=" flex  text-accent-500 items-center gap-2">
          <FaVk size={20} />
          <HiMiniSpeakerWave size={20} />
          <input
            type="range"
            name=""
            id=""
            className=" h-0.5 bg-red-500 w-1/2 "
          />
        </div>
        <button className=" p-2 rounded-xl flex justify-center items-center bg-sky-600">
          <HiPaperAirplane className=" text-white" />
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
