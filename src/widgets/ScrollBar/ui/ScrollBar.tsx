import styles from "./ScrollBar.module.css";

const ScrollBar = () => {
  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progressBar}></div>
    </div>
  );
};

export default ScrollBar;
