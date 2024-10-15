import MainSection from "./components/MainSection/";
import SideBar from "./components/SideBar/";

export default function Home() {
  return (
    <div className="w-screen h-screen flex ">
      <SideBar />
      <MainSection />
    </div>
  );
}
