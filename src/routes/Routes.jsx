import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            }
        ]
    }
])

export default router;