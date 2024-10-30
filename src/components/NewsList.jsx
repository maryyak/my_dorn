import React, {useState} from 'react';
import NewsItem from "./NewsItem";
import useFetch from "../hooks/useFetch";

const NewsList = () => {
    const [news, setNews] = useState([]);

    useFetch('/data/newsData.json', setNews);

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
