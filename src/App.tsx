import React from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Stopwatch from "./Stopwatch/Stopwatch";

function App() {
    return (
        <div className={"app"}>
            {/*<Counter/>*/}
            <Stopwatch/>
        </div>
    );
}

export default App;