import Alerts from "./components/Alerts";
import Filters from "./components/Filters";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className=" w-full flex gap-3 text-white  font-poppins h-screen bg-[#202020]">
      <SideBar />
      <div className="container flex md:ml-[70px]  w-full mr-2  py-4 h-full">
        <Alerts />
      </div>
    </div>
  );
};

export default App;
