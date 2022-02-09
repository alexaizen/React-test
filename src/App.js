import { useSelector } from "react-redux";

import Layout from "./UI/Layout";
import Dashboard from "./Pages/Dashboard";
import LeftSidebar from "./LeftSidebar";
import { Route, Switch } from "react-router-dom";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Tasks from "./Pages/Tasks";
import Welcome from "./Pages/Welcome";

function App() {
  const isLogedIn = useSelector((state) => state.isLogedIn);

  return (
    <Layout>
      <LeftSidebar />
      <Switch>
        {isLogedIn && (
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
        )}

        {isLogedIn && (
          <Route path="/tasks" exact>
            <Tasks />
          </Route>
        )}
        {isLogedIn && (
          <Route path="/profile" exact>
            <Profile />
          </Route>
        )}
        {isLogedIn && (
          <Route path="/settings" exact>
            <Settings />
          </Route>
        )}
        <Route path="*">
          <Welcome />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
