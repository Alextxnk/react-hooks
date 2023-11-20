import { useState, useRef } from "react";
import _ from "lodash";

import { Button } from "../../../shared/ui/Button";
import { classNames } from "../../../shared/lib";
import {
  dice1,
  dice2,
  dice3,
  dice4,
  dice5,
  dice6
} from "../../../shared/assets/images";
import "./Dice.css";

export const sides = [
  { position: "front", dice: dice1 }, // 1
  { position: "back", dice: dice6 }, // 6
  { position: "top", dice: dice2 }, // 2
  { position: "bottom", dice: dice5 }, // 5
  { position: "right", dice: dice4 }, // 4
  { position: "left", dice: dice3 } // 3
];

const Dice = () => {
  const [value, setValue] = useState<number>(1);
  const diceRef = useRef(null);
  let random: number = 0;

  const randomDice = () => {
    // const random: number = _.random(1, 10);
    random = _.random(1, 10);

    if (random >= 1 && random <= 6) {
      rollDice(random);
      // setValue(random);
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
      setValue(random);
    }, 4050);
  };

  return (
    <div className="diceContainer">
      <div ref={diceRef} className="dice">
        {sides.map((side, index) => (
          <div key={index} className={classNames("face", [side.position])}>
            <img className="img" src={side.dice} alt={`dice ${value}`} />
          </div>
        ))}
      </div>
      <span className="result">Результат: {value}</span>
      <Button onClick={randomDice}>Бросить кости</Button>
      {/*<button onClick={randomDice} className="roll">
        Бросить кости
      </button>*/}
    </div>
  );
};

export default Dice;
