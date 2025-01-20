import { TbCircleX } from "react-icons/tb";
import MainSection from "./components/MainSection/";
import SideBar from "./components/SideBar/";

export default function Home() {
  return (
    <div className="w-screen h-screen flex ">
      <div className=" flex gap-2 p-2 font-bold bg-black text-white lg:hidden h-full w-full items-center justify-center">
        <TbCircleX size={60} />
        This site only works on desktop, please switch to desktop mode.
      </div>
      <div className=" hidden lg:flex h-screen">
        <SideBar />
        <MainSection />
      </div>
    </div>
  );
}
