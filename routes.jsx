import { createBrowserRouter } from "react-router-dom";

// pages
import Index from "./src/pages/Index";
import InvestmentPage from "./src/pages/InvestmentPage";
import Default from "./src/Layouts/Default";
import About from "./src/pages/About"
import Analytics from "./src/pages/Analytics"
import LegalInfo from "./src/pages/LegalInfo"

const routes = createBrowserRouter([
    {
        path: '/',
        exact: true,
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Index />
            },
            {
                path:'/investment_plans',
                element: <InvestmentPage />
            },
            {
                path:'/analytics',
                element: <Analytics />
            },
            {
                path:'/legal_info',
                element: <LegalInfo />
            },
            {
                path:'/about',
                element: <About />
            }
        ]
    },
])

export default routes;