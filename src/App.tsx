import { useCallback, useEffect } from "react";
import {
  FaRedo,
  FaTrash,
  FaGamepad,
  FaTrophy,
  FaPlayCircle,
  FaPause,
} from "react-icons/fa";
import Slot from "./components/Slot";
import Stats from "./components/Stats";
import GameButton from "./components/GameButton";
import { useSlotMachine } from "./hooks/useSlotMachine";
import { playSpinSound } from "./utils/soundUtils";

function App() {
  const { state, dispatch } = useSlotMachine();

  const spin = useCallback(() => {
    if (state.isSpinning) return;
    playSpinSound();
    dispatch({ type: "START_SPIN" });
    setTimeout(() => {
      const willWin = Math.random() < 0.5;
      let newSlots: number[];
      if (willWin) {
        const winSymbol = Math.floor(Math.random() * 5);
        newSlots = state.slots.map(() => winSymbol);
      } else {
        newSlots = state.slots.map(() => Math.floor(Math.random() * 5));
        while (newSlots.every((slot) => slot === newSlots[0])) {
          newSlots = state.slots.map(() => Math.floor(Math.random() * 5));
        }
      }
      dispatch({ type: "END_SPIN", newSlots, isWin: willWin });
    }, 1000);
  }, [state.isSpinning, state.slots]);

  const resetScore = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  const toggleAutoSpin = useCallback(() => {
    dispatch({ type: "TOGGLE_AUTO_SPIN" });
  }, []);

  useEffect(() => {
    if (state.isAutoSpin && !state.isSpinning) {
      const timer = setTimeout(() => {
        spin();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [state.isAutoSpin, state.isSpinning, spin]);

  const isWin = state.slots.every((slot) => slot === state.slots[0]);
  const winRate =
    state.spins > 0 ? ((state.wins / state.spins) * 100).toFixed(1) : "0.0";

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          <FaGamepad className="inline mr-2" />
          Slotmachine
        </h1>
        <div className="flex justify-center items-center mb-6">
          {state.slots.map((slotNumber, index) => (
            <Slot
              key={index}
              slotNumber={slotNumber}
              isSpinning={state.isSpinning}
            />
          ))}
        </div>
        {isWin ? (
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            <FaTrophy className="inline mr-2" />
            You Win!
          </h2>
        ) : (
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Try Again
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-6">
          <GameButton
            onClick={spin}
            disabled={state.isSpinning || state.isAutoSpin}
            variant="primary"
          >
            <FaRedo className="inline mr-2" />
            {state.isSpinning ? "Spinning..." : "Spin"}
          </GameButton>
          <GameButton
            onClick={toggleAutoSpin}
            variant={state.isAutoSpin ? "danger" : "primary"}
          >
            {state.isAutoSpin ? (
              <FaPause className="inline mr-2" />
            ) : (
              <FaPlayCircle className="inline mr-2" />
            )}
            {state.isAutoSpin ? "Stop" : "Auto"}
          </GameButton>
          <GameButton onClick={resetScore} variant="danger">
            <FaTrash className="inline mr-2" />
            Reset
          </GameButton>
        </div>
        <Stats
          score={state.score}
          spins={state.spins}
          wins={state.wins}
          winRate={winRate}
        />
      </div>
    </div>
  );
}

export default App;
