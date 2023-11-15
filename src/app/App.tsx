import { HashRouter } from "react-router-dom";
import { Layout } from "../widgets/Layout";
import { AppRouter } from "./providers/router";

function App() {
  return (
    <HashRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </HashRouter>
  );
}

export default App;
