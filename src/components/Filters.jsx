import React, { useState } from "react";
import Search from "../assets/search.svg?react";
import Health from "../assets/health.svg?react";
import Materials from "../assets/materials.svg?react";
import Energy from "../assets/energy.svg?react";
import Credit from "../assets/credit.svg?react";
import Shopping from "../assets/shopping.svg?react";
import House from "../assets/house.svg?react";
import IT from "../assets/it.svg?react";
import Communication from "../assets/communication.svg?react";
import Industrials from "../assets/industrials.svg?react";
import Utility from "../assets/utility.svg?react";
import Finance from "../assets/finance.svg?react";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import WheelPicker from "./WheelPicker";

const Filters = ({ setFilterOptions, filterOptions }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [search, setSearch] = useState("");
  const [industries, setIndustries] = useState([
    {
      id: 1,
      name: "Health Care",
      icon: Health,
    },
    {
      id: 2,
      name: "Materials",
      icon: Materials,
    },
    {
      id: 3,
      name: "Energy",
      icon: Energy,
    },
    {
      id: 4,
      name: "Consumer discretionary",
      icon: Credit,
    },
    {
      id: 5,
      name: "Consumer staples",
      icon: Shopping,
    },
    {
      id: 6,
      name: "Real Estate",
      icon: House,
    },
    {
      id: 7,
      name: "IT",
      icon: IT,
    },
    {
      id: 8,
      name: "Communication",
      icon: Communication,
    },
    {
      id: 9,
      name: "Industrials",
      icon: Industrials,
    },
    {
      id: 10,
      name: "Utilities",
      icon: Utility,
    },
    {
      id: 11,
      name: "Financials",
      icon: Finance,
    },
  ]);
  const market = ["Micro", "Small", "Large"];
  const risks = ["Low", "Medium", "High"];
  const [selected, setSelected] = useState(market[0]);
  const [selectedRisk, setSelectedRisk] = useState(risks[0]);
  const handleAddIndustry = (industry) => {
    if (!selectedOptions.includes(industry.name)) {
      setSelectedOptions([...selectedOptions, industry.name]);
      const newIndustries = selectedOptions;
      setFilterOptions((prev) => ({ ...prev, industries: newIndustries }));
    }
  };
  return (
    <div className=" p-2 text-white w-full flex flex-col gap-3">
      <h2 className="text-2xl text-center font-semibold">Filters</h2>
      {/*  Selected Filters */}

      <div className="flex items-center justify-between">
        <h4 className="text-[#979797]">Filters Applied</h4>
        {selectedOptions.length > 0 ||
          filterOptions ? (
            <h4
              onClick={() => {
                setSelectedOptions([]);
                setFilterOptions(null);
              }}
              className="text-white cursor-pointer"
            >
              Clear All
            </h4>
          ) : null}
      </div>

      <div className="flex gap-1 flex-wrap items-center bg-[#202020] min-h-[40px] w-full rounded-md">
        {selectedOptions.length > 0 &&
          selectedOptions.map((option) => (
            <div
              key={option}
              className="bg-[#53ACFF] text-black h-[20px] flex items-center gap-3  m-1 px-1 rounded-md "
            >
              <span className="text-xs ">{option}</span>
              <span
                onClick={() =>
                  setSelectedOptions(
                    selectedOptions.filter((o) => o !== option)
                  )
                }
                className="text-xs cursor-pointer"
              >
                X
              </span>
            </div>
          ))}
      </div>

      {/*  Industries */}
      <div className="bg-[#202020] gap-3 w-full flex flex-col font-semibold p-3 rounded-md">
        <h3>Stock</h3>
        <div className="flex gap-1 justify-between w-full">
          <div className="relative w-[77%]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-3 placeholder:font-normal pr-8 py-1 bg-[#313131] text-white  placeholder-gray-400 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
              placeholder="$ Ticker"
            />
            <Search className="w-5 h-5 absolute right-2 top-1/2 -translate-y-1/2" />
          </div>
          <button className="bg-[#53ACFF] font-normal px-2 rounded-md text-xs">
            My Filters
          </button>
        </div>
        <h3>Industry</h3>
        <div className=" w-full grid grid-cols-2 truncate  gap-y-2    ">
          {industries
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((industry) => (
              <div
                onClick={() => handleAddIndustry(industry)}
                key={industry.id}
                className="flex    items-center cursor-pointer"
              >
                <div className="flex gap-2 items-center p-1 hover:bg-[#313131] rounded-md">
                  <industry.icon />
                  <span className="text-xs font-normal  whitespace-nowrap">
                    {industry.name}
                  </span>
                </div>
              </div>
            ))}
        </div>
        {/*  Radio Groups */}
        <div className="flex items-center justify-around gap-28  ">
          <div className="flex flex-col   gap-3">
            <h3 className="font-semibold text-sm md:text-md">Market Cap</h3>
            <RadioGroup
              value={selected}
              onChange={(e) => {
                setSelected(e);
                setFilterOptions((prev) => ({ ...prev, market: e }));
              }}
              aria-label="Server size"
            >
              {market.map((item) => (
                <Field key={item} className="flex items-center gap-2">
                  <Radio
                    value={item}
                    className="group my-1 flex size-5 items-center justify-center rounded-full border bg-[#494949] data-[checked]:bg-blue-400"
                  >
                    <span className="invisible size-2 rounded-full bg-[#494949] group-data-[checked]:visible" />
                  </Radio>
                  <Label className="text-xs md:text-md font-normal">
                    {item}
                  </Label>
                </Field>
              ))}
            </RadioGroup>
          </div>
          <div className="flex flex-col   gap-3">
            <h3 className="font-semibold text-sm md:text-md">Risk Level</h3>
            <RadioGroup
              value={selectedRisk}
              onChange={(e) => {
                setSelectedRisk(e);
                setFilterOptions((prev) => ({ ...prev, risk: e }));
              }}
              aria-label="Server size"
            >
              {risks.map((item) => (
                <Field key={item} className="flex items-center gap-2">
                  <Radio
                    value={item}
                    className="group my-1 flex size-5 items-center justify-center rounded-full border bg-[#494949] data-[checked]:bg-blue-400"
                  >
                    <span className="invisible size-2 rounded-full bg-[#494949] group-data-[checked]:visible" />
                  </Radio>
                  <Label className="text-xs md:text-md font-normal">
                    {item}
                  </Label>
                </Field>
              ))}
            </RadioGroup>
          </div>
        </div>
        {/*  Wheel Pickers */}
        <div className="flex mt-4 justify-around gap-20 items center">
          <div className="flex flex-col gap-3 items-center">
            <h3 className=" text-xs  md:text-sm">Strategy</h3>
            <WheelPicker
              slides={[
                "Big Option",
                "Merger Arbitrage",
                "Short Reports",
                "Other",
              ]}
            />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <h3 className=" text-xs md:text-sm">Asset</h3>
            <WheelPicker slides={["Stocks", "Options", "Futures", "Crypto"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
