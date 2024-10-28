import React from 'react';
import PollItem from './PollItem';

const polls = [
    {
        id: 1,
        title: "Опрос 1",
        options: ["Опция 1", "Опция 2", "Опция 3"],
        texts: ["Описание для опции 1", "Описание для опции 2", "Описание для опции 3"]
    },
    {
        id: 2,
        title: "Опрос 2",
        options: ["Опция A", "Опция B", "Опция C"],
        texts: ["Описание для опции A", "Описание для опции B", "Описание для опции C"]
    },
    {
        id: 3,
        title: "Опрос 3",
        options: ["Выбор X", "Выбор Y", "Выбор Z"],
        texts: ["Описание для выбора X", "Описание для выбора Y", "Описание для выбора Z"]
    }
];

const PollList = () => {


    return (
        <div className="polls">
                    {polls.map((poll) => (
                        <PollItem
                            key={poll.id}
                            title={poll.title}
                            options={poll.options}
                            texts={poll.texts}
                        />
                    ))}
        </div>

    );
};

export default PollList;
