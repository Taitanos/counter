import React, {useState} from 'react';
import './App.css';
import InputCount from "./InputCount";
import ButtonCount from "./ButtonCount";

function App() {

    const [count, setCount] = useState(0);

    return (
        <div className={"app"}>
            <InputCount count={count}/>
            <ButtonCount count={count} setCount={setCount}/>
        </div>
    );
}

export default App;