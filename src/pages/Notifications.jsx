import React, {useState} from 'react';
import useFetch from "../hooks/useFetch";
import NotificationCard from "../components/NotificationCard";

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useFetch('/data/notificationsData.json', setNotifications);

    return (
        <div className="App">
            <div className="container">
                {notifications.map((item) => (
                    <NotificationCard key={item.id} data={item}/>
                ))}
            </div>
        </div>
    );
};

export default Notifications;