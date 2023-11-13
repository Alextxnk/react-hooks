import { createContext } from "react";

export interface SidebarContextProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextProps>({});
