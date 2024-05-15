import { useState } from "react";
import Notify from "../assets/notify.svg?react";
import Search from "../assets/search.svg?react";
import AlertItem from "./AlertItem";
import Filters from "./Filters";
import Close from "../assets/close.svg?react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";

const Alerts = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([
    { id: 1, name: "AMZN", price: 200, profit: 0.25, risk: "Low" },
    { id: 2, name: "AAPL", price: 150, profit: -0.1, risk: "High" },
    { id: 3, name: "GOOGL", price: 300, profit: 0.15, risk: "Low" },
    { id: 4, name: "MSFT", price: 180, profit: -0.05, risk: "High" },
    { id: 5, name: "TSLA", price: 700, profit: 0.3, risk: "High" },
    { id: 6, name: "NFLX", price: 400, profit: -0.2, risk: "Low" },
    { id: 7, name: "NVDA", price: 150, profit: 0.1, risk: "Low" },
    { id: 8, name: "FB", price: 320, profit: -0.15, risk: "High" },
    { id: 9, name: "BABA", price: 220, profit: 0.05, risk: "Low" },
    { id: 10, name: "AMD", price: 120, profit: -0.08, risk: "High" },
  ]);
  const [filteredData, setFilteredData] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState(null);

  const applyFilters = () => {
    if (filterOptions && filterOptions.risk) {
      const newData = data.filter((item) => item.risk === filterOptions.risk);
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
    setIsOpen(false);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <main className="flex justify-between w-full gap-3 h-full">
      <div className="flex flex-col w-full gap-3 h-full">
        <header className="flex gap-3 mb-2 items-center">
          <h2 className="text-sm md:text-4xl font-bold border-l-2 md:border-l-5 border-[#53ACFF] px-4">
            Alerts
          </h2>
          <div className="relative w-[70%] md:w-[50%]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-3 pr-8 py-2 bg-[#313131] text-white placeholder-gray-400 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search"
            />
            <Search className="w-5 h-5 absolute right-2 top-1/2 -translate-y-1/2" />
          </div>
          <Notify className="w-7 h-7 hidden md:block" />
          <button
            className="block md:hidden ml-auto px-4 rounded-md text-xs bg-[#53ACFF] p-2"
            onClick={() => setIsOpen(true)}
          >
            Filter
          </button>
        </header>
        <section className="flex flex-col gap-3 h-full w-full overflow-y-scroll">
          {filteredData
            .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            .map((item) => (
              <AlertItem key={item.id} item={item} />
            ))}
        </section>
      </div>
      <section className="hidden md:flex flex-col items-center overflow-y-scroll bg-[#181818] rounded-md w-[42%] h-full">
        <Filters filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
        <button
          onClick={applyFilters}
          className="items-center mt-1 hover:bg-[#313131] w-[40%] gap-2 rounded-lg bg-[#53ACFF] py-1.5 px-3 text-sm/6 font-semibold text-white"
        >
          Apply
        </button>
      </section>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative md:hidden z-30 focus:outline-none"
          onClose={closeDialog}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-filter backdrop-blur-lg">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full flex flex-col items-center rounded-xl bg-[#181818] p-6 backdrop-blur-2xl relative">
                  <button
                    className="absolute top-3 right-3 text-white"
                    onClick={closeDialog}
                    aria-label="Close dialog"
                  >
                    <Close className="h-4 w-4" />
                  </button>
                  <Filters filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
                  <div className="w-full flex items-center justify-center gap-7">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="items-center mt-1 hover:bg-[#313131] w-[40%] gap-2 rounded-lg border border-white bg-transparent py-1.5 px-3 text-sm/6 font-semibold text-white"
                    >
                      Save Filter
                    </button>
                    <button
                      onClick={applyFilters}
                      className="items-center mt-1 hover:bg-[#313131] w-[40%] gap-2 rounded-lg bg-[#53ACFF] py-1.5 px-3 text-sm/6 font-semibold text-white"
                    >
                      Apply
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
};

export default Alerts;
