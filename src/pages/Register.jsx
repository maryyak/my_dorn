import React from 'react';

const Register = () => {
    return (
        <div className="App">
            <div className="reg-block">
                <div className="reg-block__head col-container">
                    <div className="reg-block__title">Регистрация</div>
                </div>
                <div className="reg-block__form col-container">
                    <div className="reg-block__field col-container">
                        <label htmlFor="login" className="reg-block__label">ФИО</label>
                        <input id="FIO" type="FIO" placeholder="Иванов Иван Иванович" className="reg-block__input"/>
                    </div>
                    <div className="reg-block__field col-container">
                        <label htmlFor="studcard" className="reg-block__label">Номер студенческого билета</label>
                        <input id="studcard" type="studcard" placeholder="00А0000" className="reg-block__input"/>
                    </div>
                    <div className="reg-block__btn col-container">
                        <a className="reg-block__hrefBtn" href="#">Применить</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;