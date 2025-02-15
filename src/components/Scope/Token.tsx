import React from "react";
import Image from "next/image";
import {
  Copy,
  MessageSquareIcon,
  User,
  Star,
  Columns2Icon,
  LucideTarget,
  Zap,
  EarthIcon,
  X,
} from "lucide-react";

interface TokenProps {
  name: string;
  symbol: string;
  subName: string;
  messageNum: string;
  time: string;
  user: string;
  star: string;
  cloth: string;
  target: string;
  attach?: boolean;
  x?: boolean;
  telegram?: boolean;
  userNum: string;
  starsNum: string;
  vNum: string;
  mcNum: string;
  imageName: string; // Added imageName to props (you were referencing it in the JSX)
}

export function Token({
  name,
  symbol,
  subName,
  imageName, // Corrected: Destructured imageName here
  messageNum,
  time,
  user,
  star,
  cloth,
  target,
  attach,
  x,
  telegram,
  userNum,
  starsNum,
  vNum,
  mcNum,
}: TokenProps) {
  return (
    <div className="bg-muted/10 border rounded-md border-gray-700  items-center px-3 hover:bg-gray-900 text-sm py-1 min-w-[400px]">
      <div className="items-center gap-4 justify-between w-full flex">
        <div className="flex gap-4 items-center">
          {/* <div
            className="w-12 h-12 max-w-[422px] rounded-2xl border border-transparent animate-border"
            style={{
              background:
                "conic-gradient(from var(--border-angle), rgba(71, 85, 105, 0.48) 80%, #6366F1 86%, #A5B4FC 90%, #6366F1 94%, rgba(71, 85, 105, 0.48)) border-box, #f00",
              padding: "10px",
            }}
          > */}
          <img
            src={`/images/${imageName}`}
            className="rounded-lg w-12 h-12 object-cover"
          />
          {/* </div> */}
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <h3 className="font-bold">{name}</h3>
              <h3 className="font-sans text-gray-400">{subName}</h3>
              <Copy className="h-4 w-4 text-gray-400" />
              <div className="flex items-center gap-1 text-gray-200">
                <MessageSquareIcon className="h-3 w-3 text-gray-400" />
                {messageNum}
              </div>
            </div>
            <div className="flex gap-4 items-center text-xs">
              <p className="text-gray-400 font-sans">{time}</p>
              {user && (
                <div className="flex items-center gap-1 text-[#3E8F50]">
                  <User className="h-4 w-4" />
                  {user}%
                </div>
              )}
              {star && (
                <div className="flex items-center gap-1  text-[#E33123]">
                  <Star className="h-4 w-4 " />
                  {star}%
                </div>
              )}
              {cloth && (
                <div className="flex items-center gap-1  text-[#E33123]">
                  <Columns2Icon className="h-4 w-4 " />
                  {cloth}%
                </div>
              )}
              {target && (
                <div className="flex items-center gap-1  text-[#3E8F50]">
                  <LucideTarget className="h-4 w-4 " />
                  {target}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="py-3 flex items-center justify-between">
          <div className="justify-items-end">
            {/* <div className="p-2 rounded-md bg-gradient-to-r from-purple-600 to-purple-400  flex items-center h-8 text-white"> */}
            <div className="p-2 rounded-md bg-accent-purple hover:bg-accent-purple/90 flex items-center h-8 text-white">
              <Zap className="h-4 w-4" />
              <div className="text-sm font-bold flex ml-1 gap-1">0.01</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-1">
        <div className="flex gap-2 text-gray-300">
          <EarthIcon className="h-4 w-4" />
          <svg className="h-4 w-4 filter invert" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
            <path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229" stroke="#000A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {/* <img src={`/images/telegram.svg`} className="h-4 w-4 filter invert" /> */}
          <X className="h-4 w-4 " />
        </div>
        <div className="flex gap-2">
          <span className="text-gray-400 flex">
            V:<p className="text-gray-200 font-bold ml-1">${vNum}K</p>
          </span>
          <span className="text-gray-400 flex">
            MC:<p className="text-gray-200 font-bold ml-1">${mcNum}K</p>
          </span>
        </div>
      </div>
    </div>
  );
}
