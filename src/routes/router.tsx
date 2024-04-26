import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/Homepage/Homepage";
import { Layout } from "../layout/Layout";
import { Login } from "../pages/Login/Login";
import { Profile } from "../pages/Profile/Profile";

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
