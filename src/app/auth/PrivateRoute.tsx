import { Navigate } from "react-router-dom";

import { ROUTES } from "../routes";

type Props = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: Props): JSX.Element {
  // TODO
  const auth = false;

  return auth ? children : <Navigate to={ROUTES.login} />;
}
