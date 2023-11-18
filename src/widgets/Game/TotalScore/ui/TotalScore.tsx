import styles from "./TotalScore.module.css";

interface TotalScoreProps {
  score: number;
}

const TotalScore = ({ score }: TotalScoreProps) => {
  return (
    <div className={styles.ScoreContainer}>
      <h1 className={styles.h1}>{score}</h1>
      <p className={styles.p}>Total Score</p>
    </div>
  );
};

export default TotalScore;
