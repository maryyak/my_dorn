import React from 'react';

const Register = () => {
    return (
        <div className="App">
            <div className="auth-block">
                <div className="auth-block__head col-container">
                    <div className="auth-block__title">Регистрация</div>
                </div>
                <div className="auth-block__form col-container">
                    <div className="auth-block__field col-container">
                        <label htmlFor="login" className="auth-block__label">ФИО</label>
                        <input id="FIO" type="FIO" placeholder="Иванов Иван Иванович" className="auth-block__input"/>
                    </div>
                    <div className="auth-block__field col-container">
                        <label htmlFor="studcard" className="auth-block__label">Номер студенческого билета</label>
                        <input id="studcard" type="studcard" placeholder="00А0000" className="auth-block__input"/>
                    </div>
                    <input className="auth-block__submit" type="submit" value="Применить"/>

                </div>
            </div>
        </div>
    );
};

export default Register;