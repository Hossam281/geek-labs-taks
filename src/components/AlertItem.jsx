import Tag from "../assets/tag.svg?react";
import Doc from "../assets/doc.svg?react";
import Chart from "../assets/chart.svg?react";
import LowRisk from "../assets/lowRisk.svg?react";
import HighRisk from "../assets/highRisk.svg?react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
const AlertItem = ({item}) => {
  return (
    <Disclosure as="div" className="flex  flex-col" key={item.id}>
              <DisclosureButton className="py-2 rounded-md flex items-center justify-around  p-2 h-[60px] text-left bg-[#313131]">
                <div className="flex gap-2 items-center text-xs md:text-lg w-[20%] justify-center">
                  <Tag className="md:w-5 md:h-5 w-3 h-3" />
                  {item.name}
                </div>
                <div className="h-[80%] border-l border-[#414040]"></div>
                <div className="flex gap-2 items-center text-xs md:text-lg w-[20%] justify-center">
                  <Doc className="md:w-5 md:h-5" />
                  {item.price}
                </div>
                <div className="h-[80%] border-l border-[#414040]"></div>
                <div className="flex gap-2 items-center text-xs md:text-lg w-[20%] justify-center">
                  <Chart className="md:w-5 md:h-5" />
                  <span
                    className={`
                      ${item.profit < 0 ? "text-red-500" : "text-green-500"} text-xs md:text-lg`
                    }
                  >
                    {item.profit}
                  </span>
                </div>
                <div className="h-[80%] border-l border-[#414040]"></div>
                <div className="flex gap-2 items-center text-xs md:text-lg w-[20%] justify-center">
                  {item.risk === "High" ? (
                    <HighRisk className="md:w-5 md:h-5" />
                  ) : (
                    <LowRisk className="md:w-5 md:h-5" />
                  )}
                  {item.risk}
                </div>
              </DisclosureButton>

              <DisclosurePanel className="text-white bg-[#181818] rounded-md rounded-t-none">
                <div className="p-2">
                  <p>
                    <span className="font-bold">$TSLA</span> just announced an
                    acquisition of <span className="font-bold">$NFLX</span> at{" "}
                    <span className="font-bold">$200 B.</span>
                  </p>
                  <p>
                    This is an{" "}
                    <span className="text-[#53ACFF] underline">
                      arbitrage opportunity
                    </span>{" "}
                    , with the max gain being %X if the deal closes, but the
                    possible risk is %Y  if the deal fails, If the deal success
                    is % and therefore the recommended play is{" "}
                    <span className="text-[#53ACFF] underline">long/short</span>{" "}
                    $ABC
                  </p>
                </div>
              </DisclosurePanel>
            </Disclosure>
  )
}

export default AlertItem