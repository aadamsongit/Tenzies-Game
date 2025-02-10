import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  // Generates an array of dice objects
  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(), // Unique identifier for each die
      }));
  }

  // Function to replace all dice with new ones
  function rollDice() {
    setDice(generateAllNewDice());
  }

  // Function to handle holding a die
  function hold(id) {
    console.log(id); // Logs the unique ID of the clicked die
  }

  // Maps over dice and creates Die components
  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id} // React key for efficient rendering
      value={dieObj.value} // Pass value to Die component
      isHeld={dieObj.isHeld} // Pass isHeld to Die component
      hold={() => hold(dieObj.id)} // Pass a function to handle clicking
    />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
