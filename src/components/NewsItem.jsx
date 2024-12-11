import React from 'react';

const NewsItem = (props) => {
    return (
        <div className="news-item">
            <div className="img-container news-item__img">
                <img src={props.data.url} alt="news-img"/>
            </div>
            <div className="news-item__content">
                <div className="news-item__title">{props.data.date}</div>
                <div className="news-item__text">{props.data.text}</div>
                <div className="news-item__btn">
                    <a className="news-item__href" href={props.data.id}>Читать полностью</a>
                </div>
            </div>
        </div>
    );
};
export default NewsItem;