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

    return (
        <button onClick={() => navigate(-1)} className={styles.backButton}>
            <span className="backButton__text">{previousTitle && `${previousTitle}`}</span>
            <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10L5 5L-4.37114e-07 0L0 10Z" fill="#0A2745"/>
            </svg>
        </button>
    );
};

export default BackButton;
