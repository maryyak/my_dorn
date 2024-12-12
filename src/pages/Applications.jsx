import React, { useState } from "react";

const Applications = () => {

        const [menuOption, setMenuOption] = useState("Проход гостя");

        const handleMenuChange = (e) => {
            setMenuOption(e.target.value);
        };

        const renderAdditionalInfo = () => {
            switch (menuOption) {
                case "Проход гостя":
                    return (
                        <>
                            <div className="application-block__text col-container">
                                Укажите ФИО гостя
                                <input className="application-block__input" type="text"
                                       placeholder="Иванов Иван Иванович"/>
                            </div>
                            <div className="application-block__text col-container">
                                Выберите дату
                                <input className="application-block__input" type="date"/>
                            </div>
                            <div className="application-block__text">
                                Выберите временной диапазон:
                                <div className="application-block__time row-container">
                                    <input className="application-block__input" type="time" defaultValue="12:00"/>
                                    <span>до</span>
                                    <input className="application-block__input" type="time" defaultValue="13:00"/>
                                </div>
                            </div>
                            <div className="administration-item__btn ">
                                <a className="administration-item__hrefBtn" href="#">Отправить</a>
                            </div>
                        </>
                    );
                case "Габаритные предметы":
                    return (
                        <>

                            <div className="application-block__text col-container">
                                Выберите дату
                                <input className="application-block__input" type="date"/>
                            </div>
                            <div className="application-block__text">
                                Выберите время достаки:
                                <div className="application-block__time row-container">
                                    <input className="application-block__input" type="time" defaultValue="12:00"/>
                                </div>
                            </div>
                            <div className="administration-item__btn ">
                                <a className="administration-item__hrefBtn" href="#">Отправить</a>
                            </div>
                        </>
                    );
                case "Отсутствие (>3 дней)":
                    return (
                        <>

                            <div className="application-block__text">
                                Выберите диапозон:
                                <div className="application-block__time row-container">
                                    <input className="application-block__input" type="date"/>
                                    <span>до</span>
                                    <input className="application-block__input" type="date"/>
                                </div>
                            </div>
                            <div className="administration-item__btn ">
                                <a className="administration-item__hrefBtn" href="#">Отправить</a>
                            </div>
                        </>
                    );
                default:
                    return null;
            }
        };

    return (

        <div className="App">
            <div className="container">
                <div className="application-main">
                    <div className="application-heading row-container">
                        <div className="application-heading__title row-container">
                            <div className="support-block__img">
                                <img src="/assets/images/application-icon.png" alt="Самолетик"/>
                            </div>
                            <div className="application-heading__text">Подать заявление</div>
                        </div>

                        <label className="application-heading__menu">
                            <select className="application-heading__select" value={menuOption}
                                    onChange={handleMenuChange}>
                                <option value="Проход гостя">Проход гостя</option>
                                <option value="Габаритные предметы">Габаритные предметы</option>
                                <option value="Отсутствие (>3 дней)">Отсутствие (>3 дней)</option>
                            </select>
                        </label>
                    </div>
                    <div className="application-section">
                        {renderAdditionalInfo()}
                    </div>

                    </div>
                </div>
            </div>
        );

};

export default Applications;