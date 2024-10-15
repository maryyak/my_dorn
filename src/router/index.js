import HomePage from '../pages/HomePage';
import Administration from "../pages/Administration";
import Error from "../pages/Error";

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
        path: '/error',
        element: <Error/>,
    }
];