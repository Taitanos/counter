import React from "react";
import s from './ButtonCount.module.css';

type ButtonCountTypeProps = {
    count: number;
    setCount: (setCount: number) => void;
}

function ButtonCount(props: ButtonCountTypeProps) {

    const add = () => {props.setCount(props.count + 1)};
    const reset = () => {props.setCount(0)};


    return (
        <div className={s.buttons}>
            <button className={s.button} onClick={add}>Add</button>
            <button className={s.button} onClick={reset}>Reset</button>
        </div>
    )
}

export default ButtonCount;