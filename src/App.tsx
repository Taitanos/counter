import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Counter from "./Contents/Counter/Counter";
import Stopwatch from "./Contents/Stopwatch/Stopwatch";

function App() {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path={'/counter'} element={<Counter/>}/>
                        <Route path={'/stopwatch'} element={<Stopwatch/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;