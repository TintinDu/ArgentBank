import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Layout } from "../layout";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: "Failed to load page",
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
