"use client";

import { subtitle } from '@/components/primitives'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'
import StrategyComponent from './_components/StrategyComponent'
import { useAccount } from 'wagmi';
import WalletConnection from '@/components/wallet-connection';

export default function Page() {
  const { isConnected } = useAccount();

  return (
    <div className="py-5 pt-24 overflow-x-hidden w-full">
      <div className="flex flex-col gap-3 items-start">
        <div className="flex flex-col items-start justify-start pb-5">
          <motion.span
            className={cn(subtitle({ sizeText: "xl" }), "font-bold text-start")}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Strategy
          </motion.span>
          <motion.span
            className={cn(subtitle(), "text-start")}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Choose top influencer strategies instantly—select, follow, and trade smarter.
          </motion.span>
        </div>
        {isConnected ? <StrategyComponent /> : <WalletConnection />}
      </div>
    </div>
  )
}
