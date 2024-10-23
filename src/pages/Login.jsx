import React from 'react';

const Login = () => {
    return (
        <div className="App">
            <div className="auth-block">
                <div className="auth-block__head">
                    <div className="auth-block__title">Авторизация</div>
                </div>
                <div className="auth-block__form col-container">
                    <div className="auth-block__field col-container">
                        <label htmlFor="login" className="auth-block__label">Почта или номер студенческого билета</label>
                        <input id="login" type="email" placeholder="Укажите" className="auth-block__input"/>
                    </div>
                    <div className="auth-block__field col-container">
                        <label htmlFor="password" className="auth-block__label">Пароль</label>
                        <input id="password" type="password" placeholder="Укажите" className="auth-block__input"/>
                    </div>
                    <div className="auth-block__submit-block col-container">
                        <div className="auth-block__forgot">Забыли пароль?</div>
                        <input className="auth-block__submit" type="submit" placeholder="Применить"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;