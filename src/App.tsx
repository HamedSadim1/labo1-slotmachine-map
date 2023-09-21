import React from "react";
import logo from "./logo.svg";
import "./App.css";

const slotNumbers = [0, 1, 2, 3, 4];
const getImgTekst = (slotNumber: number) => {
  switch (slotNumber) {
    case 0:
      return <img src={require("./img/slot-cherry.png")} width="50"></img>;
      break;
    case 1:
      return (
        <img src={require("./img/slot-lemon.png")} width="50" alt=""></img>
      );
      break;
    case 2:
      return <img src={require("./img/slot-melon.png")} width="50"></img>;
      break;
    case 3:
      return <img src={require("./img/slot-prune.png")} width="50"></img>;
      break;
    case 4:
      return <img src={require("./img/slot-seven.png")} width="50"></img>;
      break;
  }
};
let slotWin =
  slotNumbers[0] === slotNumbers[1] &&
  slotNumbers[1] === slotNumbers[2] &&
  slotNumbers[2] === slotNumbers[3] &&
  slotNumbers[3] === slotNumbers[4];
let randomSlotNumbers = slotNumbers.map((slotNumber) =>
  Math.floor(Math.random() * 5)
);
console.log(randomSlotNumbers);

function App() {
  return (
    <React.Fragment>
      <div>
        <h1>Slotmachine</h1>
        {slotNumbers.map((slotNumber: number, index: number) => (
          <span key={index}>{getImgTekst(slotNumber)}</span>
        ))}
        <br />

        {randomSlotNumbers.map((slotNumber: number, index: number) => (
          <span key={index}>{getImgTekst(slotNumber)}</span>
        ))}
        {slotWin ? <h2>You win</h2> : <h2>You lose</h2>}
        <button type="button" className="btn btn-secondary btn-sm">
          <a className="link-dark" href="/">
            Refresh
          </a>
        </button>
      </div>
    </React.Fragment>
  );
}
export default App;
