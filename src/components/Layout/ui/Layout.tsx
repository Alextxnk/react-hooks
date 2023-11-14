import { FC, PropsWithChildren } from "react";
import { useCurrentRoute } from "../../../hooks/useCurrentRoute";
import { SidebarProvider } from "../../../context/SidebarProvider";
import { Sidebar } from "../../Sidebar";
import { Navigation } from "../../Navigation";

import styles from "./Layout.module.css";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { title, description } = useCurrentRoute();

  return (
    <div className={styles.root}>
      <SidebarProvider>
        <Sidebar>
          <Navigation />
        </Sidebar>
      </SidebarProvider>
      <div className={styles.container}>
        <h2 className={styles.title}>{description || title}</h2>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
};
