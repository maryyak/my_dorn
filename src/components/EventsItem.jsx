import React from 'react';

const EventsItem = ({percentage, index, text, handleVote}) => {

    return (
        <div key={index} className="poll__container">
            <svg width="200" height="200">
                <circle cx="100" cy="100" r="70" className="poll__background"/>
                <circle
                    cx="100"
                    cy="100"
                    r="70"
                    className="poll__fill"
                    strokeDasharray={percentage + ' ' + (100 - percentage)}
                    strokeWidth="15"
                    fill="transparent"
                />
                <text x="100" y="110" textAnchor="middle" className="poll__percentage">{percentage}%
                </text>
            </svg>
            <div className="poll__text-between">{text}</div>
            <div className="poll__btn">
                <a className="poll__hrefBtn" onClick={() => handleVote(index)}>Голосовать</a>
            </div>
        </div>
    );
};

export default EventsItem;
