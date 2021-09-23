import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRoute } from "./auth/PrivateRoute";
import { PublicRoute } from "./auth/PublicRoute";
import { ROUTES } from "./routes";
import { Dashboard } from "./views/Dashboard";
import { Login } from "./views/Login";

export function App(): JSX.Element | null {
  // todo auth
  const auth = true;

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          isSignedIn={auth}
          component={Dashboard}
          path={ROUTES.root}
          exact
        />
        <PublicRoute
          isSignedIn={auth}
          restricted={true}
          component={Login}
          path={ROUTES.login}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}
