import React from 'react';
import NewsItem from "./NewsItem";

const news = [
    {
        "id": 1,
        "image": "/assets/images/news-img.png",
        "title": "Оплата общежития",
        "text": "Дорогие студенты! Напоминаем, что необходимо оплатить проживание в общежитии, а также скинуть электронную форму чека (если уже оплачивали, то только чек) в электронную...",
        "href": "#"
    },
    {
        "id": 2,
        "image": "/assets/images/news-img.png",
        "title": "Оплата общежития",
        "text": "Дорогие студенты! Напоминаем, что необходимо оплатить проживание в общежитии, а также скинуть электронную форму чека (если уже оплачивали, то только чек) в электронную...",
        "href": "#"
    },
    {
        "id": 3,
        "image": "/assets/images/news-img.png",
        "title": "Оплата общежития",
        "text": "Дорогие студенты! Напоминаем, что необходимо оплатить проживание в общежитии, а также скинуть электронную форму чека (если уже оплачивали, то только чек) в электронную...",
        "href": "#"
    },
    {
        "id": 4,
        "image": "/assets/images/news-img.png",
        "title": "Оплата общежития",
        "text": "Дорогие студенты! Напоминаем, что необходимо оплатить проживание в общежитии, а также скинуть электронную форму чека (если уже оплачивали, то только чек) в электронную...",
        "href": "#"
    }
];

const NewsList = () => {

    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const rows = chunkArray(news, 2);

    return (
        <div className="news">
            {rows.map((row, rowIndex) => (
                <div className="news__row" key={rowIndex}>
                    {row.map((data) => (
                        <NewsItem
                            data={data}
                            key={data.id}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default NewsList;
