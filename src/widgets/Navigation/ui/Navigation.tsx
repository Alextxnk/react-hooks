import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { routes, routesConfig } from "../../../shared/config/routes/routes";
import { useCurrentRoute } from "../../../shared/hooks/useCurrentRoute";
import { SidebarContext } from "../../../app/providers/SidebarProvider";

// import cn from "classnames";
import { showAnimation } from "../../Sidebar";
import { BookOpenText } from "lucide-react";
import styles from "./Navigation.module.css";

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = (props) => {
  const { isOpen } = useContext(SidebarContext);

  const currentRoute = useCurrentRoute();

  return (
    <div>
      <ul className={styles.root}>
        {routes.map((route) => (
          <li key={route}>
            <Link
              className={
                currentRoute.route === route ? styles.linkActive : styles.link
              }
              to={route}
            >
              <div className={styles.displayFlex}>
                <div>
                  <BookOpenText className={styles.icon} />
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      {routesConfig[route].title}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
