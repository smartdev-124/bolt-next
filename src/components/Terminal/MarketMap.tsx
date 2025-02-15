import React from "react";
import {
  Bitcoin,
  TrendingUp,
  TrendingDown,
  Copy,
  Clock,
  Diamond,
  User,
  CheckCircle2,
  Rotate3dIcon,
  TimerOffIcon,
  ArrowUpNarrowWide,
  ArrowDownNarrowWide,
  Expand,
  Triangle,
  LeafIcon,
  Sprout,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TreemapItem } from "../../types";
import { Button } from "@/components/ui/button";

const MarketMap: React.FC = () => {
  return (
    <div className="p-1 h-full">
      <div className="flex justify-between">
        <p>Top Holders</p>
        <p className="border rounded-md border-gray-600 p-1 px-2 text-sm mb-6 hover:bg-gray-700 cursor-pointer">View All</p>
      </div>
      <div className="w-full flex  text-xs gap-1 p-1 bg-gray-900 rounded-md h-full justify-between">
        <div className="w-[45%] bg-[#0D372B] p-2 flex flex-col h-72 rounded-md justify-between">
          <div>
          <div className="flex justify-between">
            <div className="flex items-center bg-[#0A5533] rounded-full px-1 text-[#28915E] border border-[#28915E] font-mono font-bold gap-1"><User className="h-3 w-3 text-[#28915E]" /> DEGEN</div>
            <p className="rounded-full px-2 bg-[#EFD698] text-[#8F5C2F]">#1</p>
          </div>
          <div className="flex justify-between mt-3 text-sm font-bold">
            <p className="text-[#2EB86B]">10.00%</p>
            <p className="text-[#2C7756] flex font-mono text-xs items-center"><ArrowUpNarrowWide className="h-3 w-3 " />5.99%</p>
          </div>
          <div className="flex justify-between text-[#5A766C] font-thin">
            <p>1.00M TONY</p>
            <p>$10,000</p>
          </div>
          <div className="flex justify-between bg-[#082219] items-center p-1 mt-1 rounded-md text-[#5A766C] text-[11px]">
            <div className="flex ">
              0x1234.....5678<p>(50.0 SOL)</p>
            </div>
            <Copy className="h-3 w-3 " />
          </div>
          </div>
          <div className="flex justify-between bottom-0   text-[#5A766C] ">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 " />
              0h
              <TimerOffIcon className="h-3 w-3 " />
              <p className="text-gray-600">13m</p>
            </div>
            <div className="flex gap-1"><Rotate3dIcon className="h-4 w-4 " />0<p>tx</p></div>
          </div>
        </div>

        <div className="w-[30%] bg-[#2C2D65] p-2 flex flex-col h-72 rounded-md justify-between">
          <div>
          <div className="flex justify-between">
            <div className="flex items-center bg-[#393A80] rounded-full px-1 text-[#4E4EA5] border border-[#4E4EA5] font-mono font-bold gap-1"><Expand className="h-3 w-3 text-[#4E4EA5]" /> DEV</div>
            <p className="rounded-full px-2 bg-[#ECE6E2] text-[#655D49] ">#2</p>
          </div>
          <div className="flex justify-between mt-3 text-sm font-bold">
            <p className="text-[#6461C8]">8.00%</p>
            <p className="text-[#825175] flex"><ArrowDownNarrowWide className="h-4 w-4 " />5.99%</p>
          </div>
          <div className="flex justify-between text-[#C2BFDE] font-thin">
            <p>800,00K TONY</p>
            <p>$5,000</p>
          </div>
          <div className="flex justify-between bg-[#1A1A3C] items-center mt-1 rounded-md text-[#C2BFDE] text-[11px]">
            <div className="flex gap-1 items-center">
            <LeafIcon className="h-3 w-3 text-accent-green ml-1" />
            <div className="flex p-1">0x2345.....6789<p>(50.0 SOL)</p></div>
            </div>
            <Copy className="h-3 w-3 mr-2" />
          </div>
          </div>
          <div className="flex justify-between bottom-0   text-[#C2BFDE] ">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 " />
              0h
              <TimerOffIcon className="h-3 w-3 " />
              <p className="text-gray-600">13m</p>
            </div>
            <div className="flex gap-1"><Rotate3dIcon className="h-4 w-4 " />0<p>tx</p></div>
          </div>
        </div>

        <div className="w-[25%] bg-[#483912] p-2 flex flex-col h-72 rounded-md justify-between">
          <div>
          <div className="flex justify-between">
            <div className="flex items-center bg-[#6C5214] rounded-full px-1 text-[#AC8918] border border-[#AC8918] font-mono font-bold gap-1"><Triangle className="h-3 w-3 text-[#AC8918]" /> SUS</div>
            <p className="rounded-full px-2 bg-[#EFD698] text-[#8F5C2F] ">#3</p>
          </div>
          <div className="flex justify-between mt-3 text-sm font-bold">
            <p className="text-[#D7B41B]">6.00%</p>
            <p className="text-[#2C7756] flex "><ArrowUpNarrowWide className="h-4 w-4 " />3.00%</p>
          </div>
          <div className="flex justify-between text-[#716859] font-thin">
            <p>600.00K TONY</p>
            <p>$3,000</p>
          </div>
          <div className="flex justify-between bg-[#2A220B] items-center p-1 mt-1 rounded-md text-[#716859] text-[11px]">
            <div className="flex ">
              0x3456.....7890<p>(50.0 SOL)</p>
            </div>
            <Copy className="h-3 w-3 " />
          </div>
          </div>
          <div className="flex justify-between bottom-0   text-[#5A766C] ">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 " />
              0h
              <TimerOffIcon className="h-3 w-3 " />
              <p className="text-gray-600">13m</p>
            </div>
            <div className="flex gap-1"><Rotate3dIcon className="h-4 w-4 " />0<p>tx</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketMap;
