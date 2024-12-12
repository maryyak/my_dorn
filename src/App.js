import './styles/App.css';
import './styles/Adaptive.css'
import React from "react";
import ScrollRestoration from "./components/ScrollRestoration";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import UserProvider from "./components/UserProvider";

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Navbar/>
                <ScrollRestoration/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;