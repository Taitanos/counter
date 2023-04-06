import React, {useState} from 'react';
import InputCount from "./InputCount/InputCount";
import ButtonCount from "./ButtonCount/ButtonCount";
import s from './Counter.module.css'

function Counter () {

    const [count, setCount] = useState(0);

    return (
        <div className={s.counter}>
            <InputCount count={count}/>
            <ButtonCount count={count} setCount={setCount}/>
        </div>
    );
}

export default Counter;