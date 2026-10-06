import { createBrowserRouter } from "react-router"
import LandingPage from "../pages/LandingPage"
import AboutPage from "../pages/AboutPage"
import LoginPage from "@/pages/LoginPage"

export const router = createBrowserRouter([
    {
        path : '/',
        element : <LandingPage />,
    },
    {
        path : 'login',
        element : <LoginPage />,
    },
    {
        path : 'about',
        element : <AboutPage />,
    }
])