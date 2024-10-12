import './styles/App.css';
import React from "react";
import ScrollRestoration from "./components/ScrollRestoration";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <ScrollRestoration/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
