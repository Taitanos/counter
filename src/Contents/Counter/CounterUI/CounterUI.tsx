import React from "react";
import s from "./CounterUI.module.css";

type CounterUIPropsType = {
    counter:number
    add: () => void
    reset: () => void
    onChangeButton: () => void
}


function CounterUI (props: CounterUIPropsType) {

        return (
        <div className={s.counterUI}>
            <div className={s.inputs}>
                <div className={s.input}>{props.counter}</div>
            </div>
            <div className={s.buttons}>
                <button className={s.button} onClick={props.add}>Add</button>
                <button className={s.button} onClick={props.reset}>Reset</button>
                <button className={s.button} onClick={props.onChangeButton}>Set</button>
            </div>
        </div>
    );
}

export default CounterUI;