import ChatBar from "../ChatBar";
import EventCard from "./EventCard";
import Glow from "./Glow";
import GunDisplay from "./GunDisplay";
import Navbar from "./Navbar";
import Statistic from "./Statistic";

const MainSection = () => {
  return (
    <div className="bg-accent-800 relative w-3/4 xl:w-full flex flex-col h-screen -z-20 pl-6 overflow-clip">
      <Glow />

      <Navbar />
      <div className="flex h-full">
        <div className=" w-3/4 h-full   ">
          <GunDisplay />
          <EventCard />
          <Statistic />
        </div>
        <ChatBar />
      </div>
    </div>
  );
};

export default MainSection;
