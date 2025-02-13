import { createBrowserRouter } from "react-router";
import AppLayout from "./layout/AppLayout";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
