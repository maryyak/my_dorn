import HomePage from '../pages/HomePage';
import Administration from "../pages/Administration";
import Error from "../pages/Error";
import LivingRules from "../pages/LivingRules";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Events from "../pages/Events";
import DutySchedule from "../pages/DutySchedule";
import SubmitApplication from "../pages/SubmitApplication";
import Applications from "../pages/Applications";
import CommunicateResidents from "../pages/CommunicateResidents";
import Decommission from "../pages/Decommission";
import Profile from "../pages/Profile";
import Notifications from "../pages/Notifications";

export const routes = [
    {
        path: '/',
        element: <HomePage />,
        title: 'Новости'
    },
    {
        path: '/administration',
        element: <Administration />,
        title: 'Состав администрации'
    },
    {
        path: '/rules',
        element: <LivingRules />,
        title: 'Правила проживания'
    },
    {
        path: '/login',
        element: <Login />,
        title: 'Вход'
    },
    {
        path: '/register',
        element: <Register />,
        title: 'Регистрация'
    },
    {
        path: '/events',
        element: <Events />,
        title: 'Мероприятия'
    },
    {
        path: '/error',
        element: <Error />,
        title: 'Ошибка'
    },
    {
        path: '/duty-schedule',
        element: <DutySchedule />,
        title: 'График дежурства'
    },
    {
        path: '/submit-application',
        element: <SubmitApplication />,
        title: 'Подать заявление'
    },
    {
        path: '/applications',
        element: <Applications />,
        title: 'Заявления'
    },
    {
        path: '/communicate-residents',
        element: <CommunicateResidents />,
        title: 'Связь с проживающими'
    },
    {
        path: '/decommission',
        element: <Decommission />,
        title: 'Снятие с учета'
    },
    {
        path: '/profile',
        element: <Profile />,
        title: 'Профиль'
    },
    {
        path: '/notifications',
        element: <Notifications />,
        title: 'Уведомления'
    }
];
