import Die from "./Die"
import React from "react"

/**
 * Challenge:
 * 
 * Write a function (generateAllNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */

export default function App() {
    
    function generateAllNewDice() {
        const newDice = []; // Initialize an empty array
        
        for (let i = 0; i < 10; i++) {
            // Generate a random number between 1 and 6 (inclusive)
            newDice.push(Math.floor(Math.random() * 6) + 1);
        }

        console.log(newDice); // Log the array after the loop completes
        return newDice;
    }

generateAllNewDice(); 
    
    return (
        <main>
            <div className="dice-container">
                <Die value={1} />
                <Die value={2} />
                <Die value={3} />
                <Die value={4} />
                <Die value={5} />
                <Die value={6} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
        </main>
    )
}