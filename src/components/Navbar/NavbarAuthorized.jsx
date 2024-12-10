import React from 'react';
import {Link} from "react-router-dom";
import UserProfile from "../UI/UserProfile/UserProfile";
import BackButton from "../UI/BackButton/BackButton";

const NavbarAuthorized = ({userData}) => {
    return (
        <>
            <div className="navbar__auth row-container">
                <div className="container navbar__container row-container">
                    <div className="navbar__nav row-container">
                        <Link to="/" className="logo">
                            <img src="/assets/images/logo.png" alt="logo"/>
                        </Link>
                        <div className="navbar__col-container col-container">
                            {userData.userType === 'resident' &&
                                <div className="navbar__heading">Личный кабинет проживающего</div>
                            }
                            {userData.userType === 'dormHead' &&
                                <div className="navbar__heading">Личный кабинет старосты</div>
                            }
                            {userData.userType === 'commandant' &&
                                <div className="navbar__heading">Личный кабинет комменданта</div>
                            }
                            <div className="navbar__links row-container">
                                <Link to="/rules" className="navbar__link">Правила проживания</Link>
                                <Link to="/administration" className="navbar__link">Состав администрации</Link>
                            </div>
                        </div>
                    </div>
                    <UserProfile/>
                </div>
            </div>
            <div className="subnavbar row-container">
                <div className="subnavbar__container container row-container">
                    {(userData.userType === 'resident' || userData.userType === 'dormHead') &&
                        <>
                            <Link to="/duty-schedule" className="subnavbar__link">График дежурства</Link>
                            <Link to="/submit-application" className="subnavbar__link">Подать заявление</Link>
                            <Link to="/events" className="subnavbar__link">Мероприятия</Link>
                        </>
                    }
                    {userData.userType === 'commandant' &&
                        <>
                            <Link to="/communicate-residents" className="subnavbar__link">Связь с проживающими</Link>
                            <Link to="/applications" className="subnavbar__link">Заявления</Link>
                            <Link to="/events" className="subnavbar__link">Мероприятия</Link>
                            <Link to="/decommission" className="subnavbar__link">Снятие с учета</Link>
                        </>
                    }
                </div>
            </div>
            <div className="navbar-back row-container">
                <div className="navbar-back__container container row-container">
                    <BackButton/>
                </div>
            </div>
        </>
    );
};
export default NavbarAuthorized;