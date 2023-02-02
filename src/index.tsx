import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { createRoutes } from "./app/createRoutes";

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter(createRoutes());

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
