import React from 'react';
import s from './Stopwatch.module.css'

function Stopwatch() {

    return (
        <div className={s.stopwatch}>
            <input value={1}/>
            <div>
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;