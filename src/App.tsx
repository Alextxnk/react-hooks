import { HashRouter, Route, Routes } from "react-router-dom";
import { routes, routesConfig } from "./routes";
import { Layout } from "./components/Layout";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          {routes.slice(1).map((route) => (
            <Route
              key={route}
              path={route}
              element={routesConfig[route].element}
            />
          ))}
          {routes.length && (
            <Route path={"*"} element={routesConfig[routes[0]].element} />
          )}
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
