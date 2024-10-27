import React from 'react';
import {Link} from "react-router-dom";

const FooterUnauthorized = () => {
    return (
        <div className="footer row-container">
            <div className="container footer__container col-container">
                <div className="footer__nav row-container">
                        <Link to="/" className="logo">
                            <img src="/assets/images/logo.png" alt="logo"/>
                        </Link>
                        <div className="footer__links row-container">
                            <Link to="/rules" className="footer__link">Правила проживания</Link>
                            <Link to="/administration" className="footer__link">Состав администрации</Link>
                        </div>
                </div>
                <div className="footer_line"></div>
                <div className="footer_inf row-container">
                    <Link to="/" className="footer__confidentiality">Политика Конфиденциальности</Link>
                    <div className="footer__ourteam">©2024 YSSPML</div>
                </div>
            </div>
        </div>
    );
};

export default FooterUnauthorized;