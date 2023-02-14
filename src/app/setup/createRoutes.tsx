import { QueryClient } from "@tanstack/react-query";
import { RouteObject } from "react-router-dom";

import { DashboardPage } from "../pages/DashboardPage";
import { ErrorPage } from "../pages/ErrorPage";
import { LoginPage } from "../pages/LoginPage";
import { ROUTES } from "../routes";
import { App } from "./App";
import { NavigateIfLoggedIn } from "./NavigateIfLoggedIn";
import { Root } from "./Root";
import { rootLoader } from "./loaders/rootLoader";

export function createRoutes(queryClient: QueryClient): RouteObject[] {
  const routes = [
    {
      path: "/",
      loader: rootLoader(queryClient),
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [createLoginRoutes(), createAppRoutes()],
    },
  ];

  return routes;
}

function createLoginRoutes() {
  return {
    element: <NavigateIfLoggedIn />,
    children: [
      {
        path: ROUTES.login,
        element: <LoginPage />,
      },
    ],
  };
}

function createAppRoutes() {
  return {
    element: <App />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  };
}
