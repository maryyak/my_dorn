import './styles/App.css';
import React from "react";
import ScrollRestoration from "./components/ScrollRestoration";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <ScrollRestoration/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
