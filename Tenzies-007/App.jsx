import { useState } from "react";
import Die from "./Die";

export default function App() {
    /**
     * Challenge: Update the array of numbers in state to be
     * an array of objects instead. Each object should look like:
     * { value: <random number>, isHeld: false }
     */
    
    const [dice, setDice] = useState(generateAllNewDice());
    
    // Function to generate an array of 10 objects
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6), // Random number
                isHeld: false                        // Default to false
            }));
    }
    
    function rollDice() {
        setDice(generateAllNewDice());
    }
    
    // Map over the dice array of objects
    const diceElements = dice.map((die, index) => (
        <Die 
            key={index} 
            value={die.value} 
            isHeld={die.isHeld} 
        />
    ));
    
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button onClick={rollDice}>Roll Dice</button>
        </main>
    );
}
