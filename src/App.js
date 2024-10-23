import './styles/App.css';
import React from "react";
import ScrollRestoration from "./components/ScrollRestoration";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import Administration from "./pages/Administration";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Administration/>
            <ScrollRestoration/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
