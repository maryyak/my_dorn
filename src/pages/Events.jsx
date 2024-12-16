import React, { useContext, useEffect, useState } from "react";
import EventsList from "../components/EventsList";
import { UserContext } from "../components/UserProvider";

const Events = () => {
    const [eventsList, setEventsList] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]); // Список для отображаемых событий
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [filterDate, setFilterDate] = useState(""); // Состояние для фильтрации
    const [expandedEventId, setExpandedEventId] = useState(null);
    const { userData } = useContext(UserContext);

    const fetchEvents = async () => {
        try {
            const response = await fetch("/data/eventsData.json");
            const data = await response.json();
            setEventsList(data);
            setFilteredEvents(data); // Изначально показываем все события
            localStorage.setItem("eventsList", JSON.stringify(data));
        } catch (error) {
            console.error("Error loading events data:", error);
        }
    };

    useEffect(() => {
        const storedEvents = localStorage.getItem("eventsList");

        if (storedEvents) {
            const parsedEvents = JSON.parse(storedEvents);
            setEventsList(parsedEvents);
            setFilteredEvents(parsedEvents);
        } else {
            fetchEvents();
        }
    }, []);

    useEffect(() => {
        setEventsList((prevList) =>
            [...prevList].sort((a, b) => new Date(a.date) - new Date(b.date))
        );
    }, [eventsList.length]);

    const handleAddOption = (event) => {
        event.preventDefault();

        if (date && time) {
            const newDate = new Date(`${date}T${time}`);

            const day = String(newDate.getDate()).padStart(2, "0");
            const month = String(newDate.getMonth() + 1).padStart(2, "0");
            const year = String(newDate.getFullYear()).slice(-2);

            const newEvent = {
                id: eventsList.length + 1,
                title: `${day}.${month}.${year} в ${time}`,
                options: [],
                date: newDate.toISOString(),
                userName: `${userData.firstName} ${userData.lastName}`,
            };

            const updatedEvents = [...eventsList, newEvent];
            setEventsList(updatedEvents);
            setFilteredEvents(updatedEvents);
            localStorage.setItem("eventsList", JSON.stringify(updatedEvents));
            setTime("");
            setDate("");
        }
    };

    const toggleAccordion = (id) => {
        setExpandedEventId((prevId) => (prevId === id ? null : id));
    };

    const handleFilterByDate = () => {
        if (filterDate) {
            const filtered = eventsList.filter((event) => {
                try {
                    const eventDate = new Date(event.date).toISOString().split("T")[0];
                    return eventDate === filterDate;
                } catch (error) {
                    return false;
                }
            });
            setFilteredEvents(filtered);
        }
    };

    const handleShowAllEvents = () => {
        setFilteredEvents(eventsList);
    };

    return (
        <div className="App">
            <div className="container">
                <div className="polls">
                    <div className="filter-section ">
                        <div className="filter-row row-container">
                            <div className="filter-date">Фильтровать по дате:</div>
                            <input
                                type="date"
                                id="filter-date"
                                value={filterDate}
                                onChange={(e) => setFilterDate(e.target.value)}
                            />
                            <button onClick={handleFilterByDate}>
                                Показать мероприятия
                            </button>
                        </div>

                        <button onClick={handleShowAllEvents}>
                            Показать все мероприятия
                        </button>
                    </div>
                    {filteredEvents.map((event) => (
                        <div key={event.id} className="event-card">
                            <div
                                className="event-card__header"
                                onClick={() => toggleAccordion(event.id)}
                                style={{
                                    cursor: "pointer",
                                    backgroundColor: "#f5f5f5",
                                    padding: "10px",
                                    marginBottom: "5px",
                                    border: "1px solid #ddd",
                                }}
                            >
                                <h4>{event.title}</h4>
                                <small>Создатель: {event.userName}</small>
                            </div>
                            {expandedEventId === event.id && (
                                <div
                                    className="event-card__content"
                                    style={{ padding: "10px" }}
                                >
                                    <EventsList
                                        title={event.title}
                                        options={event.options}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="events-createVote col-container">
                    <div className="events-createVote__head row-container">
                        <div className="img-container events-createVote__img">
                            <img
                                src="/assets/images/events-decoration.png"
                                alt="Decoration"
                            />
                        </div>
                        <div className="events-createVote__title">
                            Создать новое мероприятие
                        </div>
                    </div>
                    <form
                        className="events-createVote__form col-container"
                        onSubmit={handleAddOption}
                    >
                        <div className="events-createVote__field col-container">
                            <label className="events-createVote__label">
                                Выберите дату проведения
                            </label>
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
                            <label className="events-createVote__label">
                                Выберите время проведения
                            </label>
                            <input
                                id="time"
                                type="time"
                                className="events-createVote__input"
                                placeholder="18:00"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="events-createVote__btn">
                            Создать
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Events;
