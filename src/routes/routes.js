import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import ForgotPassword from "../views/Auth/ForgotPassword";
import ForgotUsername from "../views/Auth/ForgotUsername";
import Login from "../views/Auth/Login";
import Registration from "../views/Auth/Registration";
import Landing from "../views/Main/Landing";
import MarketSelector from "../views/Subscription/MarketSelector";
import PackageSelector from "../views/Subscription/PackageSelector";
import PeriodSelector from "../views/Subscription/PeriodSelector";
import ProductSelector from "../views/Subscription/ProductSelector";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "subscription/market",
        element: <MarketSelector />,
    },
    {
        path: "subscription/package",
        element: <PackageSelector />,
    },
    {
        path: "subscription/period",
        element: <PeriodSelector />,
    },
    {
        path: "subscription/product",
        element: <ProductSelector />,
    },
    {
        path: "auth/login",
        element: <Login />,
    },
    {
        path: "auth/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "auth/forgot-username",
        element: <ForgotUsername />,
    },
    {
        path: "auth/registration",
        element: <Registration />,
    },
    {
        path: "main/landing",
        element: <Landing />,
    },
]);

export default router;