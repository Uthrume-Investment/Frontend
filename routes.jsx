import { createBrowserRouter } from "react-router-dom";
import Index from "./src/pages/Index";

const routes = createBrowserRouter([
    {
        path: '/',
        exact: true,
        element: <Index />
    }
])

export default routes;