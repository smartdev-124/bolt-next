"use client";

import React, { useState, useEffect } from 'react';
import { PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { LogOut, Power, User, Search, Command } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import ScopePanel from '@/components/Scope/ScopePanel'
import TerminalPanel from '@/components/Terminal/TerminalPanel';
import XRayPanel from '@/components/XRay/XRayPanel';

import { UserProfile } from '@/types';
import { tools } from '@/components/ActionBar/tools';

export default function Home() {
  const [isActionBarExpanded, setIsActionBarExpanded] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const userProfile: UserProfile = {
    username: "Alex.trader",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  };

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
    toast(isLoggedIn ? 'Disconnected' : 'Connected successfully', {
      icon: isLoggedIn ? <LogOut className="text-accent-purple" /> : <User className="text-accent-purple" />,
      position: 'top-center',
      className: 'bg-dark-800 border border-dark-700 text-white',
      duration: 2000,
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast('Search initiated', {
        description: `Searching for "${searchQuery}"`,
        icon: <Search className="text-accent-purple" />,
        position: 'top-center',
        className: 'bg-dark-800/90 border border-accent-purple/20 text-white backdrop-blur-md',
        duration: 2000,
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      setActiveKey(key);

      // Find and execute the matching tool action
      const tool = tools.find(t => t.key === key);
      if (tool) {
        tool.action();
      }
    };

    const handleKeyUp = () => {
      setActiveKey(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col bg-dark-950 text-white">
      <Toaster 
        theme="dark"
        position="top-center"
        toastOptions={{
          style: {
            background: 'rgba(26, 26, 26, 0.8)',
            border: '1px solid rgba(36, 36, 36, 0.8)',
            backdropFilter: 'blur(8px)',
            color: 'white',
          },
          className: 'toast-custom',
        }}
      />
      
      {/* Top Bar with Glassmorphism */}
      <div className="h-16 border-b border-dark-800/50 glass-effect px-4 flex items-center justify-between flex-shrink-0 z-50 relative">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative bg-dark-800/50 p-2 rounded-lg">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMNiA2VjEwTDEyIDE0TDE4IDEwVjZMMTIgMloiIGZpbGw9IiM4QjVDRjYiLz4KPHBhdGggZD0iTTEyIDIyTDYgMThWMTRMMTIgMThMMTggMTRWMThMMTIgMjJaIiBmaWxsPSIjOEI1Q0Y2Ii8+Cjwvc3ZnPgo=" alt="Trench Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-wider">TRENCH</span>
              <div className="px-2 py-0.5 bg-accent-purple/10 border border-accent-purple/20 rounded text-[10px] font-medium text-accent-purple font-mono uppercase">
                Lite
              </div>
            </div>
          </div>

          <form onSubmit={handleSearch} className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-dark-300 group-focus-within:text-accent-purple transition-colors" />
            </div>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              <kbd className="hidden group-focus-within:flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-dark-300 bg-dark-900/50 rounded">
                <Command size={10} />
                <span>K</span>
              </kbd>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search markets..."
              className="w-[300px] h-9 pl-9 pr-16 bg-dark-800/50 border border-dark-700/50 rounded-lg text-sm font-mono 
                placeholder:text-dark-300 focus:outline-none focus:ring-1 focus:ring-accent-purple/50 focus:border-accent-purple/50
                transition-all duration-200"
            />
          </form>
        </div>

        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 px-4 py-2 bg-dark-800/50 rounded-lg">
              <img 
                src={userProfile.avatar} 
                alt="User Avatar" 
                className="w-8 h-8 rounded-lg object-cover ring-2 ring-accent-purple/30"
              />
              <span className="text-sm font-medium text-white/90">{userProfile.username}</span>
            </div>
            <button 
              onClick={handleAuth}
              className="p-2 hover:bg-dark-800/50 rounded-lg transition-colors"
            >
              <LogOut size={18} className="text-dark-300 hover:text-white transition-colors" />
            </button>
          </div>
        ) : (
          <button 
            onClick={handleAuth}
            className="px-4 py-2 bg-accent-purple hover:bg-accent-purple/90 rounded-lg flex items-center gap-2 transition-all duration-200"
          >
            <Power size={16} />
            <span>Connect</span>
          </button>
        )}
      </div>

      <PanelGroup direction="horizontal" className="flex-1">
        <ScopePanel />
        <PanelResizeHandle />
        <TerminalPanel />
        <PanelResizeHandle />
        <XRayPanel />
      </PanelGroup>

      
    </div>
  );
}

