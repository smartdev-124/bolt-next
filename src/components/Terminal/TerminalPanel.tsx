import React, { useState } from 'react';
import { Panel } from 'react-resizable-panels';
import { RefreshCw, Filter, ChevronDown, Plus, LineChart, Camera, Map, Wallet } from 'lucide-react';
import MarketMap from './MarketMap';
import Positions from './Positions';



const TerminalPanel: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('Market Map');

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'Market Map':
        return <MarketMap />;
      case 'Positions':
        return <Positions />;
      default:
        return null;
    }
  };

  return (
    <Panel defaultSize={55} minSize={30}>
      <div className="h-full glass-effect">
        <div className="p-4 border-b border-dark-800/50">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">TERMINAL</h2>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-dark-800/50 rounded-lg transition-colors">
                <RefreshCw size={16} className="text-accent-purple" />
              </button>
              <button className="p-2 hover:bg-dark-800/50 rounded-lg transition-colors">
                <Filter size={16} className="text-accent-purple" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-hidden flex flex-col">
          <div className="flex items-center gap-2 mb-4 flex-shrink-0">
            <button className="bg-dark-800/50 flex items-center gap-2 px-4 py-2 rounded-lg font-mono">
              <span>BTCUSDT</span>
              <ChevronDown size={16} />
            </button>
            <button className="p-2 hover:bg-dark-800/50 rounded-lg transition-colors">
              <Plus size={16} className="text-accent-purple" />
            </button>
            <button className="bg-dark-800/50 flex items-center gap-2 px-4 py-2 rounded-lg font-mono">
              <span>1m</span>
              <ChevronDown size={16} />
            </button>
            <button className="p-2 hover:bg-dark-800/50 rounded-lg transition-colors">
              <LineChart size={16} className="text-accent-purple" />
            </button>
            <button className="p-2 hover:bg-dark-800/50 rounded-lg transition-colors">
              <Camera size={16} className="text-accent-purple" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4">
            {/* Chart Section */}
            <div className="bg-dark-800/50 rounded-lg h-[calc(50vh-180px)] p-4">
              <div className="h-full flex items-center justify-center text-dark-300 font-mono">
                Chart Visualization
              </div>
            </div>

            {/* Tabs Section */}
            <div className="space-y-4">
              <div className="flex gap-2">
                <button 
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedTab === 'Market Map' 
                      ? 'bg-accent-purple/20 text-accent-purple' 
                      : 'hover:bg-dark-800/50'
                  }`}
                  onClick={() => setSelectedTab('Market Map')}
                >
                  <div className="flex items-center gap-2 font-mono">
                    <Map size={16} />
                    Market Map
                  </div>
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedTab === 'Positions' 
                      ? 'bg-accent-purple/20 text-accent-purple' 
                      : 'hover:bg-dark-800/50'
                  }`}
                  onClick={() => setSelectedTab('Positions')}
                >
                  <div className="flex items-center gap-2 font-mono">
                    <Wallet size={16} />
                    Positions
                  </div>
                </button>
              </div>
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default TerminalPanel;