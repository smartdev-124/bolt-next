import { Tool } from '../../types';
import { Zap, ZapOff, CloudLightning as Lightning, CloudLightning as LightningBolt, Wallet, BanknoteIcon, PiggyBank, DollarSign } from 'lucide-react';
import { toast } from 'sonner';
import React from 'react';

export const tools: Tool[] = [
  { 
    icon: <Zap size={24} />, 
    label: 'Orders', 
    description: 'Manage your active orders', 
    key: 'Q', 
    action: () => {
      toast.error('Access Denied', {
        description: 'You need to connect your wallet first',
        icon: <ZapOff className="text-red-500" />,
        position: 'top-center',
        className: 'bg-dark-800/90 border border-red-500/20 text-white backdrop-blur-md',
        duration: 3000,
      });
    }
  },
  { 
    icon: <Lightning size={24} />, 
    label: 'Watch', 
    description: 'Your watchlist', 
    key: 'W', 
    action: () => {
      toast('Watchlist Opened', {
        description: 'View and manage your watchlist',
        icon: <Lightning className="text-accent-green" />,
        position: 'top-center',
        className: 'bg-dark-800/90 border border-accent-green/20 text-white backdrop-blur-md',
        duration: 2000,
      });
    }
  },
  { 
    icon: <LightningBolt size={24} />, 
    label: 'Live', 
    description: 'Live market data', 
    key: 'E', 
    action: () => {
      toast('Live Market Data', {
        description: 'Real-time market information',
        icon: <LightningBolt className="text-accent-green" />,
        position: 'top-center',
        className: 'bg-dark-800/90 border border-accent-green/20 text-white backdrop-blur-md',
        duration: 2000,
      });
    }
  },
  { 
    icon: <Zap size={24} />, 
    label: 'Alerts', 
    description: 'Price alerts', 
    key: 'R', 
    action: () => {
      toast('Price Alerts', {
        description: 'Manage your price alerts',
        icon: <Zap className="text-accent-green" />,
        position: 'top-center',
        className: 'bg-dark-800/90 border border-accent-green/20 text-white backdrop-blur-md',
        duration: 2000,
      });
    }
  },
  { 
    icon: <Wallet size={24} />, 
    label: 'Analysis', 
    description: 'Technical analysis', 
    key: 'A', 
    action: () => {
      toast('Technical Analysis', {
        description: 'View technical indicators and patterns',
        icon: <Wallet className="text-accent-green" />,
        position: 'top-center',
        className: 'bg-dark-800/90 border border-accent-green/20 text-white backdrop-blur-md',
        duration: 2000,
      });
    }
  },
  { 
    icon: <BanknoteIcon size={24} />, 
    label: 'Signals', 
    description: 'Trading signals', 
    key: 'S', 
    action: () => {
      toast('Trading Signals', {
        description: 'View AI-powered trading signals',
        icon: <BanknoteIcon className="text-accent-green" />,
        position: 'top-center',
        className: 'bg-dark-800/90 border border-accent-green/20 text-white backdrop-blur-md',
        duration: 2000,
      });
    }
  },
  { 
    icon: <PiggyBank size={24} />, 
    label: 'Tasks', 
    description: 'Trading tasks', 
    key: 'D', 
    action: () => {
      toast('Trading Tasks', {
        description: 'Manage your trading tasks',
        icon: <PiggyBank className="text-accent-green" />,
        position: 'top-center',
        className: 'bg-dark-800/90 border border-accent-green/20 text-white backdrop-blur-md',
        duration: 2000,
      });
    }
  },
  { 
    icon: <DollarSign size={24} />, 
    label: 'Flow', 
    description: 'Market flow', 
    key: 'F', 
    action: () => {
      toast('Market Flow', {
        description: 'View market order flow',
        icon: <DollarSign className="text-accent-green" />,
        position: 'top-center',
        className: 'bg-dark-800/90 border border-accent-green/20 text-white backdrop-blur-md',
        duration: 2000,
      });
    }
  },
];