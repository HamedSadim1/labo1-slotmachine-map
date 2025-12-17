import React from "react";
import { getImgElement } from "../utils/slotUtils";

interface SlotProps {
  slotNumber: number;
  isSpinning: boolean;
}

const Slot: React.FC<SlotProps> = ({ slotNumber, isSpinning }) => {
  const spinningClass = isSpinning ? "animate-spin" : "";
  return (
    <div
      className={`bg-linear-to-br from-yellow-400 to-yellow-600 rounded-lg mx-2 shadow-md transition-transform w-16 h-16 flex items-center justify-center ${spinningClass}`}
    >
      {getImgElement(slotNumber)}
    </div>
  );
};

export default Slot;
