import React, { useState, useContext } from 'react';
import { UserContext } from "../components/UserProvider";
import { useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useFetch('/data/usersData.json', setUsers);

    const handleLogin = (e) => {
        e.preventDefault();

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            setUserData(user);
            navigate('/');
        } else {
            setError('Неверные данные для входа');
        }
    };

    return (
        <div className="App">
            <div className="auth-block">
                <div className="auth-block__head">
                    <div className="auth-block__title">Авторизация</div>
                </div>
                <form className="auth-block__form col-container" onSubmit={handleLogin}>
                    <div className="auth-block__field col-container">
                        <label htmlFor="login" className="auth-block__label">Почта или номер студенческого билета</label>
                        <input
                            id="login"
                            type="email"
                            placeholder="Укажите"
                            className="auth-block__input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="auth-block__field col-container">
                        <label htmlFor="password" className="auth-block__label">Пароль</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Укажите"
                            className="auth-block__input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="auth-block__submit-block col-container">
                        <div className="auth-block__forgot">Забыли пароль?</div>
                        <input className="auth-block__submit" type="submit" value="Применить" />
                    </div>
                </form>
            </div>
            {error && <div className="auth-block__error">{error}</div>}
        </div>
    );
};

export default Login;