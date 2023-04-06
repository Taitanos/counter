import React from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Stopwatch from "./Stopwatch/Stopwatch";
import ClickBox from "./ClickBox/ClickBox";

function App() {
    return (
        <div className={"app"}>
            {/*<Counter/>*/}
            {/*<Stopwatch/>*/}
            <ClickBox />
        </div>
    );
}

export default App;