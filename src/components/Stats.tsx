import React from "react";
import { FaTrophy, FaMedal, FaPercentage, FaRedo } from "react-icons/fa";

interface StatsProps {
  score: number;
  spins: number;
  wins: number;
  winRate: string;
}

const Stats: React.FC<StatsProps> = ({ score, spins, wins, winRate }) => (
  <div className="mb-6 grid grid-cols-[auto_1fr] gap-x-0 gap-y-1 items-center">
    <FaTrophy className="text-gray-700 text-2xl" />
    <span className="text-xl text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600 text-center">
      Score: {score}
    </span>
    <FaRedo className="text-gray-700 text-2xl" />
    <span className="text-xl text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600 text-center">
      Spins: {spins}
    </span>
    <FaMedal className="text-gray-700 text-2xl" />
    <span className="text-xl text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600 text-center">
      Wins: {wins}
    </span>
    <FaPercentage className="text-gray-700 text-2xl" />
    <span className="text-xl text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600 text-center">
      Win Rate: {winRate}%
    </span>
  </div>
);

export default Stats;
