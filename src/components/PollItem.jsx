import React, { useState } from 'react';

const PollItem = ({ options, title, texts }) => {
    const [votes, setVotes] = useState(Array(options.length).fill(0)); // Инициализируем массив голосов
    const [newOption, setNewOption] = useState(''); // Состояние для новой опции
    const [newText, setNewText] = useState(''); // Состояние для текста новой опции

    const totalVotes = votes.reduce((acc, curr) => acc + curr, 0); // Общее количество голосов

    const handleVote = (index) => {
        const newVotes = [...votes];
        newVotes[index] += 1; // Увеличиваем голос за выбранную диаграмму
        setVotes(newVotes);
    };

    const getPercentage = (voteCount) => {
        return totalVotes === 0 ? 0 : Math.round((voteCount / totalVotes) * 100);
    };

    const handleAddOption = () => {
        if (newText) {
            options.push(newText); // Добавляем новую опцию
            texts.push(newText); // Добавляем текст для новой опции
            setVotes([...votes, 0]); // Добавляем новый элемент в массив голосов
            setNewOption(''); // Очищаем поле ввода
            setNewText(''); // Очищаем поле ввода текста
        }
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
                            <div className="poll__text-between">{texts[index]}</div>
                            <div className="poll__btn">
                                <a className="poll__hrefBtn" onClick={() => handleVote(index)}>Голосовать</a>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="add-option-container row-container">
                <input className="add-option-container__input"
                       type="text"
                       value={newText}
                       onChange={(e) => setNewText(e.target.value)}
                       placeholder="Название вашего мероприятия"
                />
                <button className="add-option-container__btn" onClick={handleAddOption}>Добавить опцию</button>
            </div>
        </div>
    );
};

export default PollItem;
