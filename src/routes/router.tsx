import { createBrowserRouter } from "react-router"
import LandingPage from "../pages/LandingPage"
import AboutPage from "../pages/AboutPage"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"
import Dashboard from "@/pages/Dashboard"

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
        path : 'register',
        element : <RegisterPage />,
    },
    {
        path : 'dashboard',
        element : <Dashboard />,
    },
    {
        path : 'about',
        element : <AboutPage />,
    },
])