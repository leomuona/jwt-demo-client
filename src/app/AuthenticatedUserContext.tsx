import { AuthenticatedUser } from "./models/authenticatedUser";
import { ReactNode, createContext, useContext } from "react";

const Context = createContext<AuthenticatedUser | undefined>(undefined);

type Props = {
  authenticatedUser: AuthenticatedUser;
  children: ReactNode;
};

export function AuthenticatedUserProvider({
  authenticatedUser,
  children,
}: Props): JSX.Element {
  return (
    <Context.Provider value={authenticatedUser}>{children}</Context.Provider>
  );
}

export function useAuthenticatedUser(): AuthenticatedUser {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error(
      "useAuthenticatedUser must be used within a AuthenticatedUserProvider",
    );
  }

  return context;
}
