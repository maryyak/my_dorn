import React, {useEffect, useState} from 'react';
import EventsItem from './EventsItem';

const EventsList = ({ options = [], title }) => {
    const [votes, setVotes] = useState([]);
    const [newText, setNewText] = useState('');
    const totalVotes = votes.reduce((acc, curr) => acc + curr, 0);

    useEffect(() => {
        const allVotes = options.flatMap(option => option.votes);
        setVotes(allVotes);
    }, [options]);

    const getPercentage = (voteCount) => {
        return totalVotes === 0 ? 0 : Math.round((voteCount / totalVotes) * 100);
    };

    const handleAddOption = () => {
        if (newText) {
            options.push({"text":  newText, "votes": 0});
            setVotes([...votes, 0]);
            setNewText('');
        }
    };

    const handleVote = (index) => {
        const newVotes = [...votes];
        newVotes[index] += 1;
        setVotes(newVotes);
    };

    return (
        <div className="poll col-container">
            <div className="poll__header">
                <h2>{title}</h2>
            </div>
            <div className="poll__body">
                {options.map((option, index) => {
                    const percentage = getPercentage(votes[index]);
                    return (
                        <EventsItem
                            key={index}
                            text={option.text}
                            index={index}
                            percentage={percentage}
                            handleVote={handleVote}
                        />
                    );
                })}
            </div>
            <div className="add-option-container row-container">
                <input
                    className="add-option-container__input"
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="Название вашего мероприятия"
                />
                <button className="add-option-container__btn" onClick={handleAddOption}>
                    Добавить опцию
                </button>
            </div>
        </div>
    );
};

export default EventsList;
