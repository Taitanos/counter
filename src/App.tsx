import React, {useState} from 'react';
import './App.css';
import InputCount from "./InputCount";

function App() {

    const [count, setCount] = useState(0);

    return (
        <div className={"app"}>
            <InputCount count={count}/>
            <div className={"button"}>
                <button onClick={() => {
                    setCount(count + 1)
                }}>Add
                </button>
                <button onClick={() => {
                    setCount(0)
                }}>Reset
                </button>
            </div>
        </div>
    );
}

export default App;