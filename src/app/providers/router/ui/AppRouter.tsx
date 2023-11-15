import { Route, Routes } from "react-router-dom";
import { routes, routesConfig } from "../../../../shared/config/routes/routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.slice(1).map((route) => (
        <Route key={route} path={route} element={routesConfig[route].element} />
      ))}
      {routes.length && (
        <Route path={"*"} element={routesConfig[routes[0]].element} />
      )}
    </Routes>
  );
};

export default AppRouter;
