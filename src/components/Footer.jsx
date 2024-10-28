import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "./UserProvider";

const Footer = () => {
    const {userData} = useContext(UserContext);

    return (
        <div className="footer row-container">
            <div className="container footer__container col-container">
                <div className="footer__nav row-container">
                    <Link to="/" className="logo">
                        <img src="/assets/images/logo.png" alt="logo"/>
                    </Link>
                    <div className="user__col-container">
                        {userData.userType !== 'unauthorized' &&
                            <div className="user row-container">
                                <div className="user__notifications">
                                    <img src="/assets/images/notifications.png" alt="notifications"/>
                                </div>
                                <div className="user__info">
                                    <div className="user__name">
                                        {userData.firstName}
                                        &nbsp;{userData.lastName}
                                    </div>
                                    <div className="user__email">

                                    </div>
                                </div>
                            </div>
                        }
                        <div className="footer__links row-container">
                            <Link to="/rules" className="footer__link">Правила проживания</Link>
                            <Link to="/administration" className="footer__link">Состав администрации</Link>
                        </div>
                    </div>
                </div>
                <div className="footer__line"></div>
                <div className="footer__inf row-container">
                    <Link to="/" className="footer__confidentiality">Политика Конфиденциальности</Link>
                    <div className="footer__ourteam">©2024 YSSPML</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;