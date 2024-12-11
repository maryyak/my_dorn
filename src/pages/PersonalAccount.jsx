import React, { useState, useContext} from 'react';
import { UserContext } from "../components/UserProvider";
import SupportBlock from "../components/SupportBlock";

const PersonalAccount = () => {
    const { userData, setUserData } = useContext(UserContext);
    const [telegramNick, setTelegramNick] = useState(userData.telegram || '');
    const [email, setEmail] = useState(userData.email || '');
    const [photo, setPhoto] = useState(userData.photo || "https://via.placeholder.com/80");

    const handleTelegramChange = (event) => setTelegramNick(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);

    const [telegramPlaceholder, setTelegramPlaceholder] = useState('@tgnick');
    const [emailPlaceholder, setEmailPlaceholder] = useState('ivanov@gmail.com');

    const handleSave = () => {
        setUserData((prev) => ({
            ...prev,
            telegram: telegramNick.trim() || '',
            email: email.trim() || '',
        }));
    };
    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPhoto(reader.result);
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="App">
            <div className="container account-main">
                <div className="account-col col-container">
                    <div className="user-block">
                        <div className="user-block__inf row-container">
                            <img
                                src={photo}
                                alt="User"
                                className="user-block__photo"
                                style={{cursor: 'pointer'}}
                                onClick={() => document.getElementById('photoUpload').click()}
                            />
                            <input
                                id="photoUpload"
                                type="file"
                                accept="image/*"
                                style={{display: 'none'}}
                                onChange={handlePhotoUpload}
                            />
                            <div className="user-block__text col-container">
                                <div className="user-block__fio">
                                    {userData.lastName}
                                    &nbsp;{userData.firstName}
                                    &nbsp;{userData.middleName}
                                </div>
                                <div className="user-block__room">
                                    Комната {userData.roomNumber}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="support-block__main">
                            <SupportBlock/>
                    </div>
                </div>
                <div className="account-col col-container">
                    <div className="notifications">
                        <div className="notifications-block row-container">
                            <div className="notifications-block__img">
                                <img src="/assets/images/notification.png" alt="notifications"/>
                            </div>
                            <label className="notifications-block__checkbox row-container">
                                <input className="checkbox" type="checkbox"/>
                                <div>Уведомлять о новостях</div>
                            </label>
                            <label className="notifications-block__checkbox row-container">
                                <input className="checkbox" type="checkbox"/>
                                <div>Уведомлять о мероприятиях</div>
                            </label>
                        </div>
                    </div>
                    <div className="edit">
                        <div className="edit-block col-container">
                                <div className="edit-block__heading row-container">
                                    <div className="edit-block__text">Редактировать</div>
                                    <div className="edit-block__img">
                                        <img src="/assets/images/edit-icon.png" alt="edit"/>
                                    </div>
                                </div>
                                <div className="edit-block__inf ">
                                    <div className="edit-block__tg col-container">
                                        <div className="edit-block__Text">Telegram:</div>
                                        <div className="edit-block__Text">Электронная почта:</div>
                                    </div>
                                    <div className="edit-block__tg  col-container">
                                        <input
                                            className="edit-block__input"
                                            type="text"
                                            value={telegramNick}
                                            placeholder={telegramPlaceholder}
                                            onChange={handleTelegramChange}
                                            onFocus={() => setTelegramPlaceholder('')}
                                            onBlur={() => setTelegramPlaceholder(telegramNick ? '' : '@tgnick')}
                                        />
                                        <input
                                            className="edit-block__input"
                                            type="email"
                                            value={email}
                                            placeholder={emailPlaceholder}
                                            onChange={handleEmailChange}
                                            onFocus={() => setEmailPlaceholder('')}
                                            onBlur={() => setEmailPlaceholder(email ? '' : 'email')}
                                        />
                                    </div>
                                </div>
                            <div className="edit-block__save row-container">
                                <button className="edit-block__button" onClick={handleSave}>
                                    Сохранить изменения
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default PersonalAccount;