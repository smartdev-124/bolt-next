import React from "react";
import {
  Bitcoin,
  TrendingUp,
  TrendingDown,
  Copy,
  Clock,
  Diamond,
  Users,
  CheckCircle2,
  Wallet,
  Globe,
  Send,
  Terminal,
  Sprout,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TreemapItem } from "../../types";
import { Button } from "@/components/ui/button";

const MarketMap: React.FC = () => {
  return (
    <div className="w-full flex bg-gray-800 h-screen text-xs">


      <div className="w-[45%] bg-green-900 p-2">
        <div className="flex justify-between">
          <p>DEGEN</p>
          <p className="rounded-full px-2 bg-slate-100 text-yellow-800">#1</p>
        </div>
        <div className="flex justify-between">
          <p>10.00%</p>
          <p>^5.99%</p>
        </div>
        <div className="flex justify-between">
          <p>1.00M TONY</p>
          <p>$10,000</p>
        </div>
        <div className="flex justify-between mx-2 bg-green-950 items-center p-1">
          <div className="flex">
            0x1234.....5678<p>(50.0 SOL)</p>
          </div>
          <Copy className="h-4 w-4 " />
        </div>
        <div className="flex justify-between absolute bottom-0 w-full p-2 ">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 " />
            0h
          </div>
          <p>$10,dfd000</p>
        </div>
      </div>


      <div className="w-[30%] bg-blue-950">
        <div className="flex justify-between">
          <p>DEGEN</p>
          <p>#1</p>
        </div>
        <div className="flex justify-between">
          <p>10.00%</p>
          <p>^5.99%</p>
        </div>
        <div className="flex justify-between">
          <p>1.00M TONY</p>
          <p>$10,000</p>
        </div>
        <div className="flex justify-between mx-2 bg-green-950 items-center p-1">
          <div className="flex">
            0x1234.....5678<p>(50.0 SOL)</p>
          </div>
          <Copy className="h-4 w-4 " />
        </div>
        <div className="flex justify-between absolute bottom-0 w-full p-2 ">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 " />
            0h
          </div>
          <p>$10,dfd000</p>
        </div>
      </div>


      <div className="w-[25%] bg-yellow-800">
        <div className="flex justify-between">
          <p>DEGEN</p>
          <p>#1</p>
        </div>
        <div className="flex justify-between">
          <p>10.00%</p>
          <p>^5.99%</p>
        </div>
        <div className="flex justify-between">
          <p>1.00M TONY</p>
          <p>$10,000</p>
        </div>
        <div className="flex justify-between mx-2 bg-green-950 items-center p-1">
          <div className="flex">
            0x1234.....5678<p>(50.0 SOL)</p>
          </div>
          <Copy className="h-4 w-4 " />
        </div>
        <div className="flex justify-between absolute bottom-0 w-full p-2 ">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 " />
            0h
          </div>
          <p>$10,dfd000</p>
        </div>
      </div>
    </div>
  );
};

export default MarketMap;
