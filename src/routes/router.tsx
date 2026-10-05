import { createBrowserRouter } from "react-router"
import LandingPage from "../pages/LandingPage"
import AboutPage from "../pages/AboutPage"

export const router = createBrowserRouter([
    {
        path : '/',
        element : <LandingPage />,
    },
    {
        path : 'about',
        element : <AboutPage />,
    }
])