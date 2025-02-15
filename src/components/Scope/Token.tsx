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
    <div className="bg-muted/10 border rounded-md border-gray-700  items-center px-3 hover:bg-gray-900 text-sm py-1">
      <div className="items-center gap-4 justify-between grid-cols-6 grid">
        <div className="col-span-1">
          <img
            src={`/images/${imageName}`}
            className=" border border-green-500 w-12 h-12"
          />
        </div>
        <div className="py-3 flex items-center justify-between col-span-5">
          <div className="space-y-1">
            <div className="flex gap-2 items-center">
              <h3 className="font-bold">{name}</h3>
              <h3 className="font-sans text-gray-700">{subName}</h3>
              <Copy className="h-4 w-4 text-gray-700" />
              <div className="flex items-center gap-1">
                <MessageSquareIcon className="h-4 w-4 text-gray-700" />
                {messageNum}
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <h3 className="font-sans">{time}</h3>
              {user && (
                <div className="flex items-center gap-1  text-green-700">
                  <User className="h-4 w-4" />
                  {user}%
                </div>
              )}
              {star && (
                <div className="flex items-center gap-1  text-red-700">
                  <Star className="h-4 w-4 " />
                  {star}%
                </div>
              )}
              {cloth && (
                <div className="flex items-center gap-1  text-red-700">
                  <Columns2Icon className="h-4 w-4 " />
                  {cloth}%
                </div>
              )}
              {target && (
                <div className="flex items-center gap-1  text-green-700">
                  <LucideTarget className="h-4 w-4 " />
                  {target}
                </div>
              )}
            </div>
          </div>
          <div className="justify-items-end">
            <div className="text-black p-2 rounded-md bg-gradient-to-r from-purple-600 to-purple-400  flex items-center h-8">
              <Zap className="h-4 w-4 " />
              <div className="text-sm font-bold flex ml-1 gap-1">0.01</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <EarthIcon className="h-4 w-4 " />
          <img src={`/images/telegram.svg`} className="h-4 w-4 filter invert" />
          <X className="h-4 w-4 " />
        </div>
        <div className="mr-4 flex gap-2">
          <span className="text-gray-600 flex">
            V:<p className="text-white">${vNum}K</p>
          </span>
          <span className="text-gray-600 flex">
            MC:<p className="text-white">${mcNum}K</p>
          </span>
        </div>
      </div>
    </div>
  );
}
