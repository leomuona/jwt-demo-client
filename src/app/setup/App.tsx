import { AuthenticatedUserProvider } from "../AuthenticatedUserContext";
import { ROUTES } from "../routes";
import { useRootContext } from "./Root";
import { Navigate, Outlet } from "react-router-dom";

export function App(): JSX.Element {
  const { authenticatedUser } = useRootContext();

  if (!authenticatedUser) {
    return <Navigate to={ROUTES.login} replace />;
  }

  return (
    <AuthenticatedUserProvider authenticatedUser={authenticatedUser}>
      <Outlet />
    </AuthenticatedUserProvider>
  );
}
