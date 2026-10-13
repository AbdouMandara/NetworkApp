import { createBrowserRouter } from "react-router"
import LandingPage from "../pages/LandingPage"
import AboutPage from "../pages/AboutPage"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"
import Dashboard from "@/pages/Dashboard"
import QuizzPage from "@/pages/QuizzPage"
import CoursPage from "@/pages/CoursPage"
import PagesLevel from "@/pages/PagesLevel"

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
        path : 'quizz',
        element : <QuizzPage />,
    },
    {
        path : 'cours',
        element : <CoursPage />,
    },
    {
        path : 'about',
        element : <AboutPage />,
    },
    {
        path: 'quizz/:level_id',
        element: <PagesLevel />,
    }
])