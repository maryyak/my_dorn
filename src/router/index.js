import HomePage from '../pages/HomePage';
import Administration from "../pages/Administration";
import Error from "../pages/Error";
import LivingRules from "../pages/LivingRules";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Events from "../pages/Events";
import PersonalAccount from "../pages/PersonalAccount";
import Notifications from "../pages/Notifications";
import DutySchedule from "../pages/DutySchedule";
import Applications from "../pages/Applications";
import SubmitApplication from "../pages/SubmitApplication";
import CommunicateResidents from "../pages/CommunicateResidents";

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
        path: '/account',
        element: <PersonalAccount/>,
    },
    {
        path:"/notifications",
        element: <Notifications/>,
    },
    {
        path:"/dutySchedule",
        element: <DutySchedule/>,
    },
    {
        path:"/applications",
        element: <Applications/>,
    },
    {
        path:"/submit-application",
        element: <SubmitApplication/>,
    },
    {
        path:"/communicate-residents",
        element: <CommunicateResidents/>,
    }
];