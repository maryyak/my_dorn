import React, {useEffect, useState} from 'react';
import EventsList from "../components/EventsList";
import useFetch from "../hooks/useFetch";

const Events = () => {
    const [eventsList, setEventsList] = useState([]);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useFetch('/data/eventsData.json', setEventsList);

    const handleAddOption = (event) => {
        event.preventDefault();
        const newDate = new Date(`${date}T${time}`);

        const day = String(newDate.getDate()).padStart(2, '0');
        const month = String(newDate.getMonth() + 1).padStart(2, '0');
        const year = String(newDate.getFullYear()).slice(-2);
        if (date && time) {
            eventsList.push({
                "id": eventsList.length + 1,
                "title": `${day}.${month}.${year} в ${time}`,
                "options": []
            });

            setTime('');
            setDate('');
        }
    }

    return (
        <div className="App">
            <div className="container">
                <div className="polls">
                    {eventsList.map((event) => (
                        <EventsList
                            key={event.id}
                            title={event.title}
                            options={event.options}
                        />
                    ))}
                </div>
                <div className="events-createVote col-container">
                    <div className="events-createVote__head row-container">
                        <div className="img-container events-createVote__img">
                            <img src="/assets/images/events-decoration.png"/>
                        </div>
                        <div className="events-createVote__title">
                            Создать новое голосование
                        </div>
                    </div>
                    <form className="events-createVote__form col-container" onSubmit={handleAddOption}>
                        <div className="events-createVote__field col-container">
                            <label className="events-createVote__label">Выберите дату проведения</label>
                            <input
                                id="date"
                                type="date"
                                className="events-createVote__input"
                                placeholder="01.01.2001"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="events-createVote__field col-container">
                            <label className="events-createVote__label">Выберите время проведения</label>
                            <input
                                id="time"
                                type="time"
                                className="events-createVote__input"
                                placeholder="18:00"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="events-createVote__btn">Создать</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Events;