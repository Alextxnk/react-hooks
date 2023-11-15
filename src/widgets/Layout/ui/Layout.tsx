import { FC, PropsWithChildren } from "react";
import { useCurrentRoute } from "../../../shared/hooks/useCurrentRoute";
import { SidebarProvider } from "../../../app/providers/SidebarProvider";
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
        <h2 className={styles.title}>{title}</h2>
        {description ? (
          <>
            <h3 className={styles.description}>{description}</h3>
            <div className={styles.mainWithDesc}>{children}</div>
          </>
        ): (
          <div className={styles.main}>{children}</div>
        )}

      </div>
    </div>
  );
};
