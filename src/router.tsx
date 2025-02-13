import { createBrowserRouter } from "react-router";
import AppLayout from "./layout/AppLayout";

const router = createBrowserRouter([{ path: "/", element: <AppLayout /> }]);

export default router;
