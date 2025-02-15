export interface HolderData {
    address: string
    holding: number
    holdingPct: number
    balance: number
    type: string
    change: number
    unrealizedPnl: number
    isNew: boolean
    walletStat?: {
      avgHoldTime: number
      txCount: number
    }
  }
  
  export const tradingBotFeeMap: Record<string, string> = {
    "0x1234567890123456789012345678901234567890": "bloom",
    "0x2345678901234567890123456789012345678901": "banana",
    "0x3456789012345678901234567890123456789012": "mev-x",
    "0x4567890123456789012345678901234567890123": "pepe-boost",
    "0x5678901234567890123456789012345678901234": "bull-x",
    "0x6789012345678901234567890123456789012345": "fasol",
    "0x7890123456789012345678901234567890123456": "g-m-g-n",
    "0x8901234567890123456789012345678901234567": "maestro",
    "0x9012345678901234567890123456789012345678": "bonk-bot",
    "0x0123456789012345678901234567890123456789": "nova",
  }
  
  