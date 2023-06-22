import React from "react";
import s from "./CounterUI.module.css";

type CounterUIPropsType = {
    startCount: number
    setStartCount: (setStartCount: number) => void
    onChangeButton: () => void
}


function CounterUI (props: CounterUIPropsType) {

    const add = () => {
        props.setStartCount(props.startCount + 1)
    };
    const reset = () => {props.setStartCount(0)};
    const set = () => {
        props.onChangeButton()
    };

        return (
        <div className={s.counterUI}>
            <div className={s.inputs}>
                <div className={s.input} >{props.startCount}</div>
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