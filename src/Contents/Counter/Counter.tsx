import React from 'react';
import s from "./Counter.module.css";
import CounterUI from "./CounterUI/CounterUI";
import CounterSet from "./CounterSet/CounterSet";


function Counter() {

    return (
        <div className={s.counter}>
            <CounterUI/>
            {/*<CounterSet/>*/}
        </div>
    )
}

export default Counter;