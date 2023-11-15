import { FC, PropsWithChildren, useMemo, useState } from "react";
import { SidebarContext } from "./SidebarContext";

const SidebarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const defaultProps = useMemo(
    () => ({
      isOpen: isOpen,
      setIsOpen: setIsOpen
    }),
    [isOpen]
  );

  return (
    <SidebarContext.Provider value={defaultProps}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
