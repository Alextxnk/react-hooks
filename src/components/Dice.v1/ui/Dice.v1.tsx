import { useState, useRef } from "react";
import _ from "lodash";
import { classNames } from "../../../lib";
import "./Dice.css";

export const sides = [
  { position: "front" },
  { position: "back" },
  { position: "top" },
  { position: "bottom" },
  { position: "right" },
  { position: "left" }
];

const Dice1 = () => {
  const [value, setValue] = useState<number>(1);
  const diceRef = useRef(null);

  const randomDice = () => {
    const random: number = _.random(1, 10);
    console.log("🚀 ~ file: Dice.tsx:28 ~ randomDice ~ random:", random);

    if (random >= 1 && random <= 6) {
      rollDice(random);
      setValue(random);
    } else {
      randomDice();
    }
  };

  const rollDice = (num: number) => {
    diceRef.current.style.animation = "rolling 4s";

    setTimeout(() => {
      switch (num) {
        case 1:
          diceRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
          break;
        case 2:
          diceRef.current.style.transform = "rotateX(-90deg) rotateY(0deg)";
          break;
        case 3:
          diceRef.current.style.transform = "rotateX(0deg) rotateY(90deg)";
          break;
        case 4:
          diceRef.current.style.transform = "rotateX(0deg) rotateY(-90deg)";
          break;
        case 5:
          diceRef.current.style.transform = "rotateX(90deg) rotateY(0deg)";
          break;
        case 6:
          diceRef.current.style.transform = "rotateX(180deg) rotateY(0deg)";
          break;
        default:
          break;
      }

      diceRef.current.style.animation = "none";
    }, 4050);
  };

  return (
    <div className="container">
      <div ref={diceRef} className="dice">
        {sides.map((side, index) => (
          <div
            key={index}
            className={classNames("face", [side.position])}
          ></div>
        ))}
      </div>
      <div>{value}</div>
      <button onClick={randomDice} className="roll">
        Roll Dice
      </button>
    </div>
  );
};

export default Dice1;
