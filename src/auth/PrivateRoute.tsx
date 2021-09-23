import { Redirect, Route, RouteProps } from "react-router-dom";
import { ROUTES } from "../routes";

interface PrivateRouteProps extends RouteProps {
  component: any;
  isSignedIn: boolean;
}

export const PrivateRoute = ({
  component: Component,
  isSignedIn,
  ...rest
}: PrivateRouteProps) => (
  <Route
    {...rest}
    render={(props) =>
      isSignedIn ? <Component {...props} /> : <Redirect to={ROUTES.login} />
    }
  />
);
