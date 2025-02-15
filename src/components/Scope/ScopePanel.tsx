import React from "react";
import Image from "next/image";
import { Panel } from "react-resizable-panels";
import { Scan, Star, BarChart2 } from "lucide-react";
import { CryptoAsset } from "../../types";
import  { Token }  from "@/components/Scope/Token";

const cryptoAssets: CryptoAsset[] = [
  {
    name: "BFX",
    symbol: "CHICK/USDT",
    subName: "Basketball Fox",
    imageName: "pic-1.png",
    messageNum: "368",
    time: "1h",
    user: "10",
    star: "3",
    cloth: "69",
    target: "2",
    attach: true,
    x: false,
    telegram: false,
    userNum: "231",
    starsNum: "2",
    vNum: "27",
    mcNum: "79",
  },
  {
    name: "BFX",
    symbol: "CHICK/USDT",
    subName: "Basketball Fox",
    imageName: "pic-1.png",
    messageNum: "368",
    time: "1h",
    user: "10",
    star: "3",
    cloth: "69",
    target: "2",
    attach: true,
    x: false,
    telegram: false,
    userNum: "231",
    starsNum: "2",
    vNum: "27",
    mcNum: "79",
  },
  {
    name: "BFX",
    symbol: "CHICK/USDT",
    subName: "Basketball Fox",
    imageName: "pic-1.png",
    messageNum: "368",
    time: "1h",
    user: "10",
    star: "3",
    cloth: "69",
    target: "2",
    attach: true,
    x: false,
    telegram: false,
    userNum: "231",
    starsNum: "2",
    vNum: "27",
    mcNum: "79",
  },
];

const ScopePanel: React.FC = () => {
  return (
    <Panel defaultSize={25}>
      <div className="h-full border-r border-dark-800/50 glass-effect">
        <div className="p-4 border-b border-dark-800/50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">SCOPE</h2>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-dark-800/50 rounded-lg transition-colors">
                <Star size={16} className="text-accent-purple" />
              </button>
              <button className="p-2 hover:bg-dark-800/50 rounded-lg transition-colors">
                <BarChart2 size={16} className="text-accent-purple" />
              </button>
              <button className="p-2 hover:bg-dark-800/50 rounded-lg transition-colors">
                <Scan size={16} className="text-accent-purple" />
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-dark-800/50 hover:bg-dark-800 rounded-lg text-sm font-mono transition-colors">
              All Markets
            </button>
            <button className="px-3 py-1.5 bg-accent-purple/20 text-accent-purple rounded-lg text-sm font-mono">
              Favorites
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 overflow-y-auto scrollbar-thin scrollbar-track-scroll-track scrollbar-thumb-scroll-thumb p-3 gap-2">
          {cryptoAssets.map((cryptoAsset, index) => (
            <Token key={index} {...cryptoAsset} />
          ))}
        </div>
      </div>
    </Panel>
  );
};

export default ScopePanel;
