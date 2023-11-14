import { FC, PropsWithChildren, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SidebarContext } from "../../../context/SidebarProvider";

import { Menu, X } from "lucide-react";
import styles from "./Sidebar.module.css";

export const showAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  show: {
    width: "auto",
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
};

const Sidebar: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.mainContainer}>
      <motion.div
        animate={{
          width: isOpen ? "350px" : "62px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 11
          }
        }}
        className={styles.Sidebar}
      >
        <div>
          <AnimatePresence>
            {isOpen ? (
              <div className={styles.displayFlex}>
                <div>
                  <X onClick={toggle} className={styles.menu} />
                </div>
                <motion.div
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <h2>React Hooks Course</h2>
                </motion.div>
              </div>
            ) : (
              <div>
                <Menu onClick={toggle} className={styles.menu} />
              </div>
            )}
          </AnimatePresence>
        </div>
        <main>{children}</main>
      </motion.div>
    </div>
  );
};

export default Sidebar;
