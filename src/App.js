import './styles/App.css';
import React from "react";
import ScrollRestoration from "./components/ScrollRestoration";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

export const UserContext = React.createContext();

function App() {
    const [userType, setUserType] = React.useState('unauthorized');

    return (
        <UserContext.Provider value={{ userType, setUserType }}>
            <BrowserRouter>
                <Navbar/>
                <ScrollRestoration/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
