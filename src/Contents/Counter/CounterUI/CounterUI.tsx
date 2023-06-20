import React, {useEffect, useState} from "react";
import s from "./CounterUI.module.css";


function CounterUI () {
    const [count, setCount] = useState<number>(()=>{
        return Number(localStorage.getItem('counterValue')) || 0
    })


    useEffect( () => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }, [count])

    const add = () => {
        setCount(count + 1)
    };
    const reset = () => {setCount(0)};
    const set = () => {

    }


        return (
        <div className={s.counterUI}>
            <div className={s.inputs}>
                <input className={s.input} value={count}/>
            </div>
            <div className={s.buttons}>
                <button className={s.button} onClick={add}>Add</button>
                <button className={s.button} onClick={reset}>Reset</button>
                <button className={s.button} onClick={set}>Set</button>
            </div>
        </div>
    );
}

export default CounterUI;