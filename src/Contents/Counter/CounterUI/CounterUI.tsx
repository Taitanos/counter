import React from "react";
import s from "./CounterUI.module.css";

type CounterUIPropsType = {
    counter:number
    error: boolean
    add: () => void
    reset: () => void
    onChangeButton: () => void
}


function CounterUI (props: CounterUIPropsType) {

        return (
        <div className={s.counterUI}>
            <div className={s.inputs}>
                <div className={props.error ?s.inputDisabled : s.input}>{props.counter}</div>
            </div>
            <div className={s.buttons}>
                <button disabled={props.error} className={props.error ? s.disabled : s.button} onClick={props.add}>Add</button>
                <button className={s.button} onClick={props.reset}>Reset</button>
                <button  className={s.button} onClick={props.onChangeButton}>Set</button>
            </div>
        </div>
    );
}

export default CounterUI;