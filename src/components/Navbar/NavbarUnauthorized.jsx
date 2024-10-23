import React from 'react';
import {Link} from "react-router-dom";

const NavbarUnauthorized = () => {
    return (
        <div className="navbar row-container">
            <div className="container navbar__container row-container">
                <div className="navbar__nav row-container">
                    <Link to="/" className="logo">
                        <img src="/assets/images/logo.png" alt="logo"/>
                    </Link>
                    <div className="navbar__links row-container">
                        <Link to="/rules" className="navbar__link">Правила проживания</Link>
                        <Link to="/administration" className="navbar__link">Состав администрации</Link>
                    </div>
                </div>
                <div className="navbar__btns row-container">
                    <Link className="navbar__btn" to="/login">Войти</Link>
                    <Link className="navbar__btn" to="/register">Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarUnauthorized;