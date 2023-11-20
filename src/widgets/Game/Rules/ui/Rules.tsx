import styles from "./Rules.module.css";

const Rules = () => {
  return (
    <div className={styles.RulesContainer}>
      <h2 className={styles.h2}>Как играть в Кости</h2>
      <div className={styles.text}>
        <p>Выберите любое число</p>
        <p>Нажмите на кнопку "Бросить кости"</p>
        <p>
          Если выбранное число равно номеру кости, вы получите столько же очков,
          сколько и на кости
        </p>
        <p>Если вы угадаете неправильно, то вы потеряете 2 очка</p>
      </div>
    </div>
  );
};

export default Rules;
