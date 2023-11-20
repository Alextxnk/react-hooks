import { Button } from "../../../../shared/ui/Button";

import dices from "../../../../shared/assets/images/dices.png";
import styles from "./StartGame.module.css";

interface StartGameProps {
  toggle: () => void;
}

const StartGame = ({ toggle }: StartGameProps) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={dices} alt="Dices" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.h1}>Игра в Кости</h1>
        <Button onClick={toggle}>Играть</Button>
      </div>
    </div>
  );
};

export default StartGame;
