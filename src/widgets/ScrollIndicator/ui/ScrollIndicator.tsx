import { useEffect, useState } from "react";
import styles from "./ScrollIndicator.module.css";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handler = () => {
      const documentElement = document.documentElement;
      const scrolled = documentElement.scrollTop;
      const maxHeight =
        documentElement.scrollHeight - documentElement.clientHeight;
      const scrollPercent = (scrolled / maxHeight) * 100;

      setScroll(scrollPercent);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progressBar} style={{ width: scroll + "%" }}></div>
    </div>
  );
};

export default ScrollIndicator;
