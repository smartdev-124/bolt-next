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
    <div className=" border rounded-md border-gray-700   p-3 hover:bg-gray-900 text-sm  flex w-full bg-gradient-to-r from-transparent via-[#150C12] to-transparent">
      <div>
        <img src={`/images/${imageName}`} className=" h-12 w-12 mt-3" />
        <div className="flex items-center">
          <User className="h-4 w-4 text-white " />{" "}
          <h3 className="font-sans text-white">{userNum}</h3>
        </div>
      </div>
      <div className=" px-4 w-full">
        <div className="flex gap-2 items-center ">
          <p className="font-bold">{name}</p>

          <Check className="h-4 w-4 text-[#6696BA] border border-[#6696BA] rounded-full bg-[#000F22]" />
          <p className="text-xs font-sans  px-2  text-[#DE83AE] border border-[#DE83AE] rounded-md bg-[#571D3B] ">
            {butname}
          </p>
        </div>
        <p className="font-sans text-gray-700">{symbol}</p>
        <p className="font-sans text-white mt-1">{content}</p>
        <div className="bg-gray-500 rounded-md p-2 bg-opacity-10 w-full flex items-center justify-between my-2 ">
          <div className="flex gap-2 font-sans">
            <h3>EBND</h3>
            <h3 className="text-green-800">EBND</h3>
            <User className="h-4 w-4 text-gray-700" />
            <h3>322</h3>
          </div>
          <div className="justify-items-end">
            <div className="text-black p-2 rounded-md bg-gradient-to-r from-purple-600 to-purple-400  flex items-center h-8">
              <Zap className="h-4 w-4 " />
              <div className="text-sm font-bold flex ml-1 gap-1">0.01</div>
            </div>
          </div>
        </div>
        <h3 className="font-sans  text-gray-700">{time}</h3>
      </div>
    </div>
  );
}
