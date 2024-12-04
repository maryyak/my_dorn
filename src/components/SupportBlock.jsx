import React from "react";
const SupportBlock = () => {
    return (
        <div className="support-block col-container">
            <div className="support-block__header row-container">
                <div className="support-block__img">
                    <img src="/assets/images/plane-icon.png" alt="Самолетик"/>
                </div>
                <span className="support-block__text">Связаться с поддержкой</span>
            </div>
            <textarea className="support-block__input" placeholder="Ваш вопрос"></textarea>
            <div className="support-block__btn">
                <input className="support-block__submit" type="submit" value="Отправить"/>
            </div>
        </div>
    );
};

export default SupportBlock;
