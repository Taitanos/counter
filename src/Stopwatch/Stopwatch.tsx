import React, {useState} from 'react';
import s from './Stopwatch.module.css'

function Stopwatch() {

    const [count, setCount] = useState(0);

    const onClickStartHandler = () => {
/*        let second : secondType = setInterval(() => (count + 1), 1000)
        setCount(second);*/
    };
    const onClickStopHandler = () => {
        setCount(count);
    };
    const onClickResetHandler = () => {
        setCount(0);
    };

    return (
        <div className={s.stopwatch}>
            <input value={count}/>
            <div>
                <button onClick={onClickStartHandler}>Start</button>
                <button onClick={onClickStopHandler}>Stop</button>
                <button onClick={onClickResetHandler}>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;