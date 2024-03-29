import { refreshTokenRequest } from "../api/authentication";
import { QueryClient } from "@tanstack/react-query";
import jwtDecode from "jwt-decode";

type DecodedToken = {
  iss: string;
  sub: string;
  iat: number;
  exp: number;
  jti: string;
};

let token: string | null = null;
let decodedToken: DecodedToken | null = null;

// throws error if refresh fails
export async function getToken(queryClient: QueryClient): Promise<string> {
  if (token && decodedToken && !isExpired(decodedToken)) {
    return token;
  }

  try {
    const newToken = await queryClient.fetchQuery(
      ["token", token],
      async () => await refreshTokenRequest(),
    );

    setToken(newToken);

    return newToken;
  } catch (e) {
    if (token && decodedToken) {
      clearToken();
      throw new Error("token is expired");
    }
    throw e;
  }
}

export function setToken(newToken: string): void {
  decodedToken = decodeToken(newToken);
  token = newToken;
}

function clearToken(): void {
  token = null;
  decodedToken = null;
}

function isExpired(decodedToken: DecodedToken): boolean {
  return Date.now() > decodedToken.exp * 1000;
}

function decodeToken(token: string): DecodedToken | null {
  try {
    return jwtDecode(token);
  } catch (_e) {
    // nothing
  }

  return null;
}
