import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {
    const [dice, setDice] = useState(generateAllNewDice());

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }));
    }

    function updateDice(action, payload) {
        setDice(oldDice => {
            if (action === "roll") {
                return oldDice.map(die =>
                    die.isHeld
                        ? die
                        : { ...die, value: Math.ceil(Math.random() * 6) }
                );
            } else if (action === "hold") {
                return oldDice.map(die =>
                    die.id === payload.id
                        ? { ...die, isHeld: !die.isHeld }
                        : die
                );
            } else {
                return oldDice;
            }
        });
    }

    function rollDice() {
        updateDice("roll");
    }

    function hold(id) {
        updateDice("hold", { id });
    }

    const diceElements = dice.map(dieObj => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    ));

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    );
}
