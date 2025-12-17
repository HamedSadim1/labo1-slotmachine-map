/**
 * Game Button Component
 *
 * A reusable button component for the slot machine game.
 * Supports primary and danger variants with hover and disabled states.
 */

import React from "react";

interface GameButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant: "primary" | "danger";
}

const buttonClasses =
  "text-white font-bold py-2 px-4 rounded-lg transition duration-300 min-w-24 flex items-center justify-center whitespace-nowrap";

const GameButton: React.FC<GameButtonProps> = ({
  onClick,
  disabled,
  children,
  variant,
}) => {
  const baseClasses = buttonClasses;
  const variantClasses =
    variant === "primary"
      ? "bg-linear-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500"
      : "bg-linear-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variantClasses} ${baseClasses}`}
    >
      {children}
    </button>
  );
};

export default GameButton;
