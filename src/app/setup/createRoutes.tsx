import { RouteObject } from "react-router-dom";

import { DashboardPage } from "../pages/DashboardPage";
import { ErrorPage } from "../pages/ErrorPage";
import { LoginPage } from "../pages/LoginPage";
import { ROUTES } from "../routes";
import { App } from "./App";
import { NavigateIfLoggedIn } from "./NavigateIfLoggedIn";
import { Root } from "./Root";

export function createRoutes(): RouteObject[] {
  const routes = [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [createNavigateIfLoggedInRoutes(), createAppRoutes()],
    },
  ];

  return routes;
}

function createNavigateIfLoggedInRoutes() {
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
