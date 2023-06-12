import React, {useEffect, useState} from 'react';
import s from "./Counter.module.css";
import CounterUI from "./CounterUI/CounterUI";


function Counter () {
    return (
        <div className={s.counter}>
            <CounterUI/>
        </div>
    )
}

export default Counter;