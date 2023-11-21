import { useRef, useState } from "react";
import { NumberSelector } from "../../NumberSelector";
import { TotalScore } from "../../TotalScore";
import { Rules } from "../../Rules";
import { Button } from "../../../../shared/ui/Button";
import {
  dice1,
  dice2,
  dice3,
  dice4,
  dice5,
  dice6
} from "../../../../shared/assets/images";
import _ from "lodash";
import { classNames } from "../../../../shared/lib";
import "./GamePlay.css";

const GamePlay = () => {
  const [score, setScore] = useState<number>(0);
  const [selectedNumber, setSelectedNumber] = useState<number>();
  const [currentDice, setCurrentDice] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [showRules, setShowRules] = useState<boolean>(false);
  const diceRef = useRef(null);

  const sides = [
    { position: "front", dice: dice1 }, // 1
    { position: "back", dice: dice6 }, // 6
    { position: "top", dice: dice2 }, // 2
    { position: "bottom", dice: dice5 }, // 5
    { position: "right", dice: dice4 }, // 4
    { position: "left", dice: dice3 } // 3
  ];

  const roleDice = () => {
    if (!selectedNumber) {
      setError("Вы не выбрали число");
      return;
    } else {
      const randomNumber: number = _.random(1, 6);

      rolling(randomNumber);
      setCurrentDice(randomNumber);

      setTimeout(() => {
        if (selectedNumber === randomNumber) {
          setScore((prev) => prev + randomNumber);
        } else {
          setScore((prev) => prev - 2);
        }

        // setSelectedNumber(undefined);
      }, 4050);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  const rolling = (num: number) => {
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
    <main className="gamePlayContainer">
      <div className="topSection">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <div className="flex">
        <div ref={diceRef} className="dice">
          {sides.map((side, index) => (
            <div key={index} className={classNames("face", [side.position])}>
              <img
                className="img"
                src={side.dice}
                alt={`dice ${currentDice}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="buttons">
        <Button onClick={roleDice}>Бросить кости</Button>
        <Button className="outline" onClick={resetScore}>
          Сбросить счет
        </Button>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Скрыть" : "Показать"} правила
        </Button>
      </div>

      {showRules && <Rules />}
    </main>
  );
};

export default GamePlay;
