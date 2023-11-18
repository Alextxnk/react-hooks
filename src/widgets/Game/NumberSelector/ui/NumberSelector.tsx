import { Box } from "../../Box";

import styles from "./NumberSelector.module.css";

interface NumberSelectorProps {
  setError: (error: string) => void;
  error: string;
  selectedNumber: number;
  setSelectedNumber: (selectedNumber: number) => void;
}

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber
}: NumberSelectorProps) => {
  const arrNumber: number[] = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value: number) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className={styles.NumberSelectorContainer}>
      <p className={styles.error}>{error}</p>
      <div className={styles.flex}>
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className={styles.p}>Select Number</p>
    </div>
  );
};

export default NumberSelector;
