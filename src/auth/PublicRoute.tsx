import { Redirect, Route, RouteProps } from "react-router-dom";
import { ROUTES } from "../routes";

interface PublicRouteProps extends RouteProps {
  component: any;
  isSignedIn: boolean;
  restricted: boolean;
}

export const PublicRoute = ({
  component: Component,
  isSignedIn,
  restricted,
  ...rest
}: PublicRouteProps) => (
  <Route
    {...rest}
    render={(props) =>
      isSignedIn && restricted ? (
        <Redirect to={ROUTES.root} />
      ) : (
        <Component {...props} />
      )
    }
  />
);
