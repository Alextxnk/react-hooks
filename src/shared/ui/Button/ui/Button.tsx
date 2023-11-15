import { FC, PropsWithChildren } from "react";
import { classNames } from "../../../lib";

import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={classNames(styles.btn, [], { [styles.outline]: className })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
