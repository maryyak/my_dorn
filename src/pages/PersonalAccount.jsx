import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../components/UserProvider";
import SupportBlock from "../components/SupportBlock";

const PersonalAccount = () => {
    const { userData, setUserData } = useContext(UserContext);
    const [telegramNick, setTelegramNick] = useState(userData.telegram || ''); // Локальное значение никнейма
    const [email, setEmail] = useState(userData.email || '');
    // Обработчик для изменения временного значения
    // Обработчики для изменения временных значений
    const handleTelegramChange = (event) => setTelegramNick(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);

    // Сохранение Telegram и Email
    const handleSave = () => {
        setUserData((prev) => ({
            ...prev,
            telegram: telegramNick.trim() || '', // Убираем пробелы
            email: email.trim() || '', // Убираем пробелы
        }));
    };
    return (
        <div className="App">
            <div className="container">
                <div className="personal_account col-container">
                    <div className="personal_account__1 row-container">
                        <div className="user__block row-container">
                            <img
                                src="https://via.placeholder.com/80" // Заглушка для аватара
                                alt="User"
                                className="profile__photo"
                            />
                            <div className="user__infor col-container">
                                <div className="user__fio">
                                    {userData.lastName}
                                    &nbsp;{userData.firstName}
                                    &nbsp;{userData.middleName}
                                </div>
                                <div className="user__room">
                                    Комната {userData.roomNumber}
                                </div>
                            </div>
                        </div>
                        <div className="notifications row-container">
                            <div className="notification-img">
                                <img src="/assets/images/notification.png" alt="notifications"/>
                            </div>
                            <label className="notifications__checkbox">
                                <input className="checkbox"
                                       type="checkbox"
                                />
                                Уведомлять о новостях
                            </label>
                            <label className="notifications__checkbox">
                                <input className="checkbox"
                                       type="checkbox"
                                />
                                Уведомлять о мероприятиях
                            </label>
                        </div>

                    </div>
                    <div className="personal_account__2 row-container">
                        <SupportBlock/>
                        <div className="edit-main">
                            <div className="edit col-container">
                                <div className="edit_block row-container">
                                    <div className="edit_block__heading">Редактировать</div>
                                    <div className="edit-img">
                                        <img src="/assets/images/edit-icon.png" alt="edit"/>
                                    </div>
                                </div>
                                <div className="edit_inf col-container">
                                    <div className="edit_tg row-container">
                                        <div className="edit_text">Telegram:</div>
                                        <div >
                                            <input
                                                className="edit_tg__input"
                                                type="text"
                                                value={telegramNick || '@tgnick'} // Если пусто, показываем "@tgnick"
                                                onChange={handleTelegramChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="edit_tg row-container">
                                        <div className="edit_text">Электронная почта:</div>
                                        <div>
                                            <input
                                                className="edit_tg__input"
                                                type="email"
                                                value={email || 'email'} // Если пусто, показываем подсказку
                                                onChange={handleEmailChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="save_button row-container">
                                    <button className="edit_save__button" onClick={handleSave}>
                                        Сохранить изменения
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PersonalAccount;