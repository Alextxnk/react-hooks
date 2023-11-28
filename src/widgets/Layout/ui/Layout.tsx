import { FC, PropsWithChildren } from "react";
import { useCurrentRoute } from "../../../shared/hooks/useCurrentRoute";
import { SidebarProvider } from "../../../app/providers/SidebarProvider";
import { Sidebar } from "../../Sidebar";
import { Navigation } from "../../Navigation";
import { ScrollIndicator } from "../../ScrollIndicator";

import styles from "./Layout.module.css";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { title, description } = useCurrentRoute();

  return (
    <div
      className={styles.root}
      style={{
        height: description === "ScrollIndicator" ? "500vh" : "100vh"
      }}
    >
      <SidebarProvider>
        <Sidebar>
          <Navigation />
        </Sidebar>
      </SidebarProvider>
      <div className={styles.container}>
        <ScrollIndicator />
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        {description ? (
          <>
            <h3 className={styles.description}>{description}</h3>
            <div className={styles.mainWithDesc}>{children}</div>
          </>
        ) : (
          <div className={styles.main}>{children}</div>
        )}
      </div>
    </div>
  );
};
