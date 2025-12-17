import { useReducer } from "react";

interface SlotMachineState {
  slots: number[];
  score: number;
  spins: number;
  wins: number;
  isSpinning: boolean;
  isAutoSpin: boolean;
}

type SlotMachineAction =
  | { type: "START_SPIN" }
  | { type: "END_SPIN"; newSlots: number[]; isWin: boolean }
  | { type: "RESET" }
  | { type: "TOGGLE_AUTO_SPIN" };

const initialState: SlotMachineState = {
  slots: [0, 1, 2, 3, 4].map(() => Math.floor(Math.random() * 5)),
  score: 0,
  spins: 0,
  wins: 0,
  isSpinning: false,
  isAutoSpin: false,
};

const slotMachineReducer = (
  state: SlotMachineState,
  action: SlotMachineAction
): SlotMachineState => {
  switch (action.type) {
    case "START_SPIN":
      return { ...state, isSpinning: true, spins: state.spins + 1 };
    case "END_SPIN":
      return {
        ...state,
        slots: action.newSlots,
        isSpinning: false,
        score: action.isWin ? state.score + 100 : state.score,
        wins: action.isWin ? state.wins + 1 : state.wins,
      };
    case "RESET":
      return {
        ...initialState,
        slots: [0, 1, 2, 3, 4].map(() => Math.floor(Math.random() * 5)),
      };
    case "TOGGLE_AUTO_SPIN":
      return { ...state, isAutoSpin: !state.isAutoSpin };
    default:
      return state;
  }
};

export const useSlotMachine = () => {
  const [state, dispatch] = useReducer(slotMachineReducer, initialState);
  return { state, dispatch };
};
