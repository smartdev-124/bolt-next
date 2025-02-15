import React from "react";
import Image from "next/image";
import {
  Copy,
  MessageSquareIcon,
  User,
  Check,
  Columns2Icon,
  LucideTarget,
  Zap,
  EarthIcon,
  X,
} from "lucide-react";

interface XRayPanelProps {
  name: string;
  tick: boolean;
  butname: string;
  symbol: string;
  content: string;
  imageName: string;
  userNum: string;
  time: string;
  solNum: string;
}

export function XRayComp({
  name,
  tick,
  butname,
  symbol,
  content,
  imageName,
  userNum,
  time,
  solNum,
}: XRayPanelProps) {
  return (
    <div className=" border rounded-md gap-4 min-w-[475px] border-gray-700 p-3 hover:bg-gray-900 text-sm  flex w-full bg-gradient-to-r from-transparent via-[#150C12] to-transparent">
      <div className="flex flex-col items-center">
        <img src={`/images/pic-1.png`} className="rounded-lg h-12 w-12 mb-3 object-cover" />
        <div className="flex gap-1 items-center text-gray-200 py-1 px-2 bg-gray-400 bg-opacity-5 rounded-xl">
          <User className="h-4 w-4" />{" "}
          <p className="font-sans font-semibold">{userNum}</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex gap-2 items-center ">
          <p className="font-bold">{name}</p>
          <Check className="h-3 w-3 text-[#6696BA] border border-[#6696BA] rounded-full bg-[#000F22]" />
          <p className="text-xs font-sans px-2 py-[2px] text-[#DE83AE] border border-[#DE83AE] rounded-md bg-[#571D3B] ">
            {butname}
          </p>
        </div>
        <span className="font-sans text-gray-500">{symbol}</span>
        <p className="font-sans text-white mt-2">{content}</p>
        <div className="bg-gray-500 rounded-lg p-2 bg-opacity-10 w-full flex items-center justify-between my-2 ">
          <div className="flex gap-2 font-sans">
            <p className="font-semibold">EBND</p>
            <p className="text-green-500 font-semibold">210M</p>
            <div className="flex items-center gap-1 text-gray-500">
              <User className="h-4 w-4" />
              <h3>322</h3>
            </div>
          </div>
          <div className="justify-items-end">
            <div className="p-2 rounded-md bg-accent-purple hover:bg-accent-purple/90 flex items-center h-8 text-white">
              <Zap className="h-4 w-4 " />
              <div className="text-sm font-bold flex ml-1 gap-1">0.01</div>
            </div>
          </div>
        </div>
        <h3 className="font-sans  text-gray-500">{time}</h3>
      </div>
    </div>
  );
}
