import HomePage from '../pages/HomePage';
import Administration from "../pages/Administration";
import Error from "../pages/Error";
import LivingRules from "../pages/LivingRules";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Events from "../pages/Events";
import PersonalAccount from "../pages/PersonalAccount";

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
        path: '/events',
        element: <Events/>,
    },
    {
        path: '/error',
        element: <Error/>,
    },
    {
        path: '/lk',
        element: <PersonalAccount/>,
    }
];