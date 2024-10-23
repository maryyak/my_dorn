import HomePage from '../pages/HomePage';
import Administration from "../pages/Administration";
import Error from "../pages/Error";
import LivingRules from "../pages/LivingRules";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routes = [
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        path: '/administration',
        element: <Administration/>,
    },
    {
        path: '/rules',
        element: <LivingRules/>,
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>,
    },
    {
        path: '/error',
        element: <Error/>,
    }
];