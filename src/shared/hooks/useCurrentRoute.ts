import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { routes, routesConfig } from "../config/routes/routes";

export const useCurrentRoute = () => {
  const location = useLocation();

  return useMemo(() => {
    const route =
      routes.find((route) => location.pathname.endsWith(route)) || routes[0];
    return {
      ...routesConfig[route],
      route
    };
  }, [location.pathname]);
};
