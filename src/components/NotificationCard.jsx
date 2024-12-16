import React from 'react';

const NotificationCard = ({data}) => {
    return (
        <div className={`${data.read ? "read" : ""} notification-card`}>
            <div className={"notification-card__description"}>
                <p className={"notification-card__date"}>{data.date}</p>
                {data.type === "message" && data.author && (
                    <div className={"notification-card__info"}>
                        <img
                            src={data.author.avatar}
                            alt={data.author.name}
                            className={"notification-card__photo"}
                        />
                        <span className={"notification-card__author"}>{data.author.name}</span>
                    </div>
                )}
                {data.text && <p>{data.text}</p>}
                {data.title && <h4>{data.title}</h4>}
                {data.status && <p>{data.status}</p>}
            </div>
            <div className={"notification-card__btn"}>
                {data.action && data.action.type === "button" && (
                    <button>
                        {data.action.label}
                    </button>
                )}
                {data.action && data.action.type === "link" && (
                    <a href={data.action.url}>
                        {data.action.label}
                    </a>
                )}
            </div>
        </div>
    );
};

export default NotificationCard;