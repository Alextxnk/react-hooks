import { useState } from "react";
import { NumberSelector } from "../../NumberSelector";
import { TotalScore } from "../../TotalScore";
import { RoleDice } from "../../RoleDice";
import Rules from "../../Rules/ui/Rules";
import { Button } from "../../../../shared/ui/Button";

import styles from "./GamePlay.module.css";
// import { Dice } from "../../../Dice";

const GamePlay = () => {
  const [score, setScore] = useState<number>(0);
  const [selectedNumber, setSelectedNumber] = useState<number>();
  const [currentDice, setCurrentDice] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [showRules, setShowRules] = useState<boolean>(false);

  const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <main className={styles.container}>
      <div className={styles.topSection}>
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      {/*<Dice />*/}
      <div className={styles.btns}>
        <Button className="outline" onClick={resetScore}>
          Reset Score
        </Button>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </main>
  );
};

export default GamePlay;
