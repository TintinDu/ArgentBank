import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/Homepage/Homepage";
import { Layout } from "../layout/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: "Failed to load page",
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);
