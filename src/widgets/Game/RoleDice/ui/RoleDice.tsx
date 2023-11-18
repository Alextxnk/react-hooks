import {
  dice1,
  dice2,
  dice3,
  dice4,
  dice5,
  dice6
} from "../../../../shared/assets/images";

import styles from "./RoleDice.module.css";

interface RoleDiceProps {
  roleDice: () => void;
  currentDice: number;
}

const RoleDice = ({ roleDice, currentDice }: RoleDiceProps) => {
  const dices: string[] = [dice1, dice2, dice3, dice4, dice5, dice6];

  return (
    <div className={styles.DiceContainer}>
      <div className={styles.dice} onClick={roleDice}>
        <img src={dices[currentDice - 1]} alt={`dice ${currentDice}`} />
      </div>
      <p className={styles.p}>Click on Dice to roll</p>
    </div>
  );
};

export default RoleDice;
