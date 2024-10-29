import React from 'react';
import {Link} from "react-router-dom";
import UserProfile from "../UI/UserProfile/UserProfile";

const NavbarAuthorized = ({userData}) => {
    return (
        <div className="navbar row-container">
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

    );
};
export default NavbarAuthorized;