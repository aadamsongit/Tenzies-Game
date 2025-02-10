import { useState } from "react"
import Die from "./Die"

/**
 * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `generateAllNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die components and render those in place of our
 * manually-written 10 Die elements.
 */

export default function App() {
    const [dice, setDice] = useState(generateAllNewDice())
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    
    // Map over the dice array and pass each die value as a prop to the Die component
    const dicemap = dice.map((die, index) => (
        <Die key={index} value={die} />
    ));
    
    return (
        <main>
            <div className="dice-container">
            {dicemap}
            </div>
        </main>
    )
}