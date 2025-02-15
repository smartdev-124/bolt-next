import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { tools } from './tools';

interface ActionBarProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  activeKey: string | null;
}

const ActionBar: React.FC<ActionBarProps> = ({ isExpanded, setIsExpanded, activeKey }) => {
  const dragNodeRef = React.useRef(null);
  const [animatingKeys, setAnimatingKeys] = useState<Set<string>>(new Set());

  // Handle key press animation
  useEffect(() => {
    if (activeKey && !animatingKeys.has(activeKey)) {
      setAnimatingKeys(prev => {
        const next = new Set(prev);
        next.add(activeKey);
        return next;
      });

      // Remove the key after animation completes (0.5 seconds)
      setTimeout(() => {
        setAnimatingKeys(prev => {
          const next = new Set(prev);
          next.delete(activeKey);
          return next;
        });
      }, 500);
    }
  }, [activeKey]);

  return (
    <Draggable 
      handle=".drag-handle" 
      bounds="parent"
      nodeRef={dragNodeRef}
    >
      <div 
        ref={dragNodeRef}
        className="fixed"
        style={{ 
          left: '50%', 
          bottom: '20px', 
          transform: 'translateX(-50%)',
          minWidth: isExpanded ? '400px' : 'auto'
        }}
      >
        <div className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'p-4' : 'p-2'
        } glass-effect shadow-lg relative`}>
          {/* Corner borders */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top left corner */}
            <div className="absolute top-0 left-0 w-3 h-3">
              <div className="absolute top-0 left-0 w-2 h-[2px] bg-accent-purple/50"></div>
              <div className="absolute top-0 left-0 w-[2px] h-2 bg-accent-purple/50"></div>
            </div>
            {/* Top right corner */}
            <div className="absolute top-0 right-0 w-3 h-3">
              <div className="absolute top-0 right-0 w-2 h-[2px] bg-accent-purple/50"></div>
              <div className="absolute top-0 right-0 w-[2px] h-2 bg-accent-purple/50"></div>
            </div>
            {/* Bottom left corner */}
            <div className="absolute bottom-0 left-0 w-3 h-3">
              <div className="absolute bottom-0 left-0 w-2 h-[2px] bg-accent-purple/50"></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-2 bg-accent-purple/50"></div>
            </div>
            {/* Bottom right corner */}
            <div className="absolute bottom-0 right-0 w-3 h-3">
              <div className="absolute bottom-0 right-0 w-2 h-[2px] bg-accent-purple/50"></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-2 bg-accent-purple/50"></div>
            </div>
          </div>

          {/* <div className="flex items-center gap-2">
            <div 
              className="drag-handle w-full h-1 bg-accent-purple/30 rounded-full mb-2 cursor-move hover:bg-accent-purple/40 transition-colors"
              onDoubleClick={() => setIsExpanded(!isExpanded)}
            />
          </div> */}
          {/* <div className="flex items-center gap-2 relative">
            {tools.map((tool, index) => (
              <div key={index} className="relative group">
                <button 
                  className={`w-10 h-10 flex items-center justify-center transition-all duration-300 border border-white/10 ${
                    animatingKeys.has(tool.key)
                      ? 'bg-accent-purple/20 text-accent-purple border-accent-purple/30 aura-effect' 
                      : 'hover:bg-dark-800/50 hover:border-white/20'
                  }`}
                  onClick={tool.action}
                >
                  {/* Aura light effect */}
                  {/* {animatingKeys.has(tool.key) && (
                    <div className="absolute inset-0 animate-aura">
                      <div className="absolute inset-0 bg-accent-purple/20 blur-md" />
                      <div className="absolute inset-0 bg-accent-purple/10 blur-xl" />
                    </div>
                  )}
                  {tool.icon}
                  <span className="absolute bottom-1 right-1 text-[8px] font-mono text-dark-300 group-hover:text-accent-purple transition-colors">
                    {tool.key}
                  </span>
                </button>
                {(isExpanded || activeKey === tool.key) && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-dark-800/90 text-xs whitespace-nowrap">
                    <div className="font-medium flex items-center gap-2 font-mono">
                      {tool.label}
                      <span className="px-2 py-1 bg-dark-900/50 text-[10px] text-accent-purple">{tool.key}</span>
                    </div>
                    <div className="text-dark-300 text-xs font-mono">{tool.description}</div>
                  </div>
                )}
              </div>
            ))}
          </div> */} 
        </div>
      </div>
    </Draggable>
  );
};

export default ActionBar;