import { Navigate, Outlet } from "react-router-dom";

import { ROUTES } from "../routes";
import { useRootContext } from "./Root";

export function NavigateIfLoggedIn(): JSX.Element {
  const { authenticatedUser } = useRootContext();

  if (authenticatedUser) {
    return <Navigate to={ROUTES.root} />;
  }

  return <Outlet />;
}
