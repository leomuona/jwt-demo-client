import { useAuthenticatedUser } from "../AuthenticatedUserContext";

export function DashboardPage(): JSX.Element {
  const authenticatedUser = useAuthenticatedUser();
  return (
    <div>
      <h1>Hi {authenticatedUser.name}!</h1>
      <p>TODO: dashboard</p>
    </div>
  );
}
