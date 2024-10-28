import React from 'react';
import PollList from "../components/PollList";

const Events = () => {
    return (
        <div className="App">
            <div className="container">
                <PollList/>
                <div className="events-createVote col-container">
                    <div className="events-createVote__head row-container">
                        <div className="img-container events-createVote__img">
                            <img src="/assets/images/events-decoration.png"/>
                        </div>
                        <div className="events-createVote__title">
                            Создать новое голосование
                        </div>
                    </div>
                    <div className="events-createVote__form col-container">
                        <div className="events-createVote__field col-container">
                            <label className="events-createVote__label">Выберите дату проведения</label>
                            <input id="date" type="date" className="events-createVote__input " placeholder="01.01.2001"/>
                        </div>
                        <div className="events-createVote__field col-container">
                            <label className="events-createVote__label">Выберите время проведения</label>
                            <input id="time" type="time" className="events-createVote__input" placeholder="18:00"/>
                        </div>
                        <div className="events-createVote__btn">
                            <a className="events-createVote__hrefBtn" href="#">Создать</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Events;