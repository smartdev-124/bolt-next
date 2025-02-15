import { ReactNode } from 'react';

export interface CryptoAsset {
  name: string;
  symbol: string;
  subName: string;
  imageName: string;
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
}

export interface Tool {
  icon: ReactNode;
  label: string;
  description: string;
  key: string;
  action: () => void;
}

export interface TreemapItem {
  name: string;
  value: number;
  change: number;
  marketCap: string;
  volume: string;
}

export interface Position {
  symbol: string;
  type: 'long' | 'short';
  entry: number;
  current: number;
  size: string;
  pnl: number;
  leverage: number;
}

export interface UserProfile {
  username: string;
  avatar: string;
}

export interface XRay {
  name: string;
  tick: boolean;
  butname: string;
  symbol: string;
  content: string;
  imageName: string;
  userNum: string;
  time: string;
  solNum: string;
}
