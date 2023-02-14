import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { createRoutes } from "./app/setup/createRoutes";
import { createQueryClient } from "./app/setup/queryClient";

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);

const queryClient = createQueryClient();

const router = createBrowserRouter(createRoutes(queryClient));

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
