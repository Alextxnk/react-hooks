import { useState } from "react";

import { GamePlay } from "./GamePlay";
import { StartGame } from "./StartGame";

const Game = () => {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
};

export default Game;
