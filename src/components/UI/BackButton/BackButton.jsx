import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { routes } from '../../../router';
import styles from './BackButton.module.css';

const BackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const previousPath = useRef(null);
    const [previousTitle, setPreviousTitle] = useState('');

    useEffect(() => {
        if (previousPath.current) {
            const previousRoute = routes.find(route => route.path === previousPath.current);
            setPreviousTitle(previousRoute?.title || '');
        }
        previousPath.current = location.pathname;
    }, [location.pathname]);

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    const handleTextClick = () => {
        navigate(-1); // Тоже переходит на предыдущую страницу при клике на текст
    };

    return (
        <div className="backButtonContainer row-container">
            <span className={styles.previousPageText} onClick={handleTextClick}>
                Предыдущая страница
            </span>
            <button onClick={handleBackButtonClick} className={styles.backButton}>
                <span className="backButton__text">{previousTitle && `${previousTitle}`}</span>
                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10L5 5L-4.37114e-07 0L0 10Z" fill="#0A2745"/>
                </svg>
            </button>
        </div>
    );
};

export default BackButton;
