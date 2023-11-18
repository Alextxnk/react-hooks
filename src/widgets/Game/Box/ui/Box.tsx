import { FC, PropsWithChildren } from "react";

import { classNames } from "../../../../shared/lib";
import styles from "./Box.module.css";

interface BoxProps extends PropsWithChildren {
  isSelected: boolean;
  onClick: () => void;
}

const Box: FC<BoxProps> = ({ children, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.Box, [], { [styles.selected]: isSelected })}
    >
      {children}
    </div>
  );
};

export default Box;
