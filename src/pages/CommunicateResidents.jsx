import React, {useState} from 'react';

const CommunicateResidents = () => {
    const [menuOption, setMenuOption] = useState("");

    const handleMenuChange = (e) => {
        setMenuOption(e.target.value);
    };
    return (
        <div className="App">
            <div className="container">
                <div className="communicate-block col-container">
                    <div className="communicate-item">
                        <input className="communicate-input__name" type="text"
                               placeholder="Иванов Иван Иванович"/>
                    </div>
                    <div className="communicate-item col-container">
                        <div className="communicate-text">Тема сообщения</div>
                        <select className="communicate-select" value={menuOption}
                                onChange={handleMenuChange}>
                            <option value="" disabled>
                                Выберите тему
                            </option>
                            <option>Запрос документов</option>
                            <option>Запрос медицинской справки</option>
                            <option>Уведомление об изменениях в комнате</option>
                        </select>
                    </div>
                    <div className="communicate-item col-container">
                    <div className="communicate-text">Текст сообщения</div>
                        <input className="communicate-input__message" type="text"
                               placeholder="Сообщение"/>
                    </div>
                    <button type="submit" className="communicate-btn">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommunicateResidents;