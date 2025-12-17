/**
 * Slot Utilities
 *
 * Provides utility functions for the slot machine, such as generating image elements for slot symbols.
 */

const images = [
  "/img/slot-cherry.png",
  "/img/slot-lemon.png",
  "/img/slot-melon.png",
  "/img/slot-prune.png",
  "/img/slot-seven.png",
];
const alts = ["cherry", "lemon", "melon", "prune", "seven"];

export const getImgElement = (slotNumber: number) => {
  return (
    <img
      src={images[slotNumber]}
      alt={alts[slotNumber]}
      className="w-full h-full object-contain"
    />
  );
};
