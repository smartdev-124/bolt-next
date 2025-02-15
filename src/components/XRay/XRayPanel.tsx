import React from 'react';
import { Panel } from 'react-resizable-panels';
import { Link } from 'lucide-react';
import { XRay } from "../../types";
import { XRayComp } from '@/components/XRay/XRayComp';

const XRayDatas: XRay[] = [
  {
    name: "Crypto Analyst",
    tick: true,
    butname: "KOL",
    symbol: "@crypto_analyst",
    content: "Just analyzed this promising token. Check out the contract:",
    imageName: "user-1",
    userNum: "15.2k",
    time: "6/15/2023, 1:30:00 PM",
    solNum: "0.01",
  },
  {
    name: "Crypto Analyst",
    tick: true,
    butname: "KOL",
    symbol: "@crypto_analyst",
    content: "Just analyzed this promising token. Check out the contract:",
    imageName: "user-1",
    userNum: "15.2k",
    time: "6/15/2023, 1:30:00 PM",
    solNum: "0.01",
  },
  
]

const XRayPanel: React.FC = () => {
  return (
    <Panel defaultSize={30} >
      <div className="h-full border-l border-dark-800/50 glass-effect">
        <div className="p-4 border-b border-dark-800/50">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">X-RAY</h2>
            <button className="p-2 hover:bg-dark-800/50 rounded-lg transition-colors">
              <Link size={16} className="text-accent-purple" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 overflow-y-auto scrollbar-thin scrollbar-track-scroll-track scrollbar-thumb-scroll-thumb p-3 space-y-2">
                  {XRayDatas.map((XRayData, index) => (
                    <XRayComp key={index} {...XRayData} />
                  ))}
                </div>
      </div>
    </Panel>
  );
};

export default XRayPanel;