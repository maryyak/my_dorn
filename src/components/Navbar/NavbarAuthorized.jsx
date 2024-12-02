import React from 'react';
import {Link} from "react-router-dom";

const NavbarAuthorized = ({userData}) => {
    return (

            <div className="navbar row-container">
                <div className="container navbar__container row-container">
                        <div className="navbar__links row-container">
                            <Link to="/" className="logo">
                                <img src="/assets/images/logo.png" alt="logo"/>
                            </Link>
                            <div className="navbar__col-container">
                                <div className="navbar__heading">Личный кабинет проживающего</div>
                                <div className="navbar__links row-container">
                                    <Link to="/rules" className="navbar__link">Правила проживания</Link>
                                    <Link to="/administration" className="navbar__link">Состав администрации</Link>
                                </div>
                            </div>
                        </div>
                        <div className="user__navbar row-container">
                            <div className="user__notifications">
                                <img src="/assets/images/notifications.png" alt="notifications"/>
                            </div>
                            <div className="user__info">
                                <Link to="/lk">
                                    <div className="user__name">
                                        {userData.firstName}
                                        &nbsp;{userData.lastName}
                                    </div>
                                    <div className="user__email">
                                    </div>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>

    );
};
export default NavbarAuthorized;