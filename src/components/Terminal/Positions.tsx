import React from 'react';
import { Bitcoin, DollarSign } from 'lucide-react';
import { Position } from '../../types';

const positions: Position[] = [
  { symbol: 'BTC/USDT', type: 'long', entry: 48500, current: 50000, size: '0.5 BTC', pnl: 750, leverage: 10 },
  { symbol: 'ETH/USDT', type: 'short', entry: 3200, current: 3000, size: '5 ETH', pnl: 1000, leverage: 5 },
  { symbol: 'SOL/USDT', type: 'long', entry: 95, current: 98, size: '100 SOL', pnl: 300, leverage: 3 },
];

const Positions: React.FC = () => {
  return (
    <div className="space-y-4">
      {positions.map((position, index) => (
        <div key={index} className="bg-dark-800/50 rounded-lg p-4 hover:bg-dark-800/80 transition-all duration-300">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <Bitcoin className="text-accent-purple" size={24} />
              <div>
                <div className="font-bold font-mono">{position.symbol}</div>
                <div className="text-sm text-dark-300 font-mono">Size: {position.size}</div>
              </div>
            </div>
            <div className={`px-3 py-1.5 rounded text-sm font-mono ${
              position.type === 'long' 
                ? 'bg-accent-purple/10 text-accent-purple border border-accent-purple/30' 
                : 'bg-red-500/10 text-red-500 border border-red-500/30'
            }`}>
              {position.type.toUpperCase()}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-dark-900/50 p-3 rounded-lg">
              <div className="text-dark-300 text-sm font-mono">Entry</div>
              <div className="font-medium font-mono">${position.entry.toLocaleString()}</div>
            </div>
            <div className="bg-dark-900/50 p-3 rounded-lg">
              <div className="text-dark-300 text-sm font-mono">Current</div>
              <div className="font-medium font-mono">${position.current.toLocaleString()}</div>
            </div>
            <div className="bg-dark-900/50 p-3 rounded-lg">
              <div className="text-dark-300 text-sm font-mono">Leverage</div>
              <div className="font-medium font-mono">{position.leverage}x</div>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center bg-dark-900/50 p-3 rounded-lg">
            <div className="text-sm text-dark-300 font-mono">
              PnL
            </div>
            <div className={`flex items-center gap-1 ${position.pnl >= 0 ? 'text-accent-purple' : 'text-red-500'}`}>
              <DollarSign size={16} />
              <span className="font-bold font-mono">{Math.abs(position.pnl).toLocaleString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Positions;