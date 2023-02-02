import { RouteObject } from "react-router-dom";

import { Root } from "./Root";
import { PrivateRoute } from "./auth/PrivateRoute";
import { DashboardPage } from "./pages/DashboardPage";
import { ErrorPage } from "./pages/ErrorPage";
import { LoginPage } from "./pages/LoginPage";
import { ROUTES } from "./routes";

export function createRoutes(): RouteObject[] {
  const routes = [
    {
      path: ROUTES.root,
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          ),
        },
        {
          path: ROUTES.login,
          element: <LoginPage />,
        },
      ],
    },
  ];

  return routes;
}
