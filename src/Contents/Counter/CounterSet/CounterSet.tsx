import React, {ChangeEvent} from "react";
import s from "./CounterSet.module.css";

type CounterSetTypeProps = {
    startCount: number
    endCount: number
    setStartCount: (setStartCount: number) => void
    setEndCount: (setEndCount: number) => void
    onChangeStartValue: (onChangeStartValue:number) => void
    onChangeEndValue: (onChangeEndValue:number) => void
    onChangeButton: () => void
}

function CounterSet (props: CounterSetTypeProps) {

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStartValue(+e.currentTarget.value);
    }

    const onChangeEndValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeEndValue(+e.currentTarget.value);
    }

    const set = () => {
        props.onChangeButton()
    }

    return (
        <div className={s.counterUI}>
            <div className={s.inputs}>
                <div className={s.content}>
                    <span className={s.span}>Start Value</span>
                    <input type={"number"} className={s.input} value={props.startCount} onChange={onChangeStartValueHandler}/>
                </div>
                <div className={s.content}>
                    <span className={s.span}>End Value</span>
                    <input type={"number"} className={s.input} value={props.endCount} onChange={onChangeEndValueHandler}/>
                </div>
            </div>
            <div className={s.buttons}>
                <button className={s.button} onClick={set}>Set</button>
            </div>
        </div>
    );
}

export default CounterSet;