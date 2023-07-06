import React, {ChangeEvent} from "react";
import s from "./CounterSet.module.css";
import MessageErrorText from "../MessageErrorText/MessageErrorText";


type CounterSetTypeProps = {
    startCount: number
    endCount: number
    error: boolean
    onChangeStartValue: (startValue: number, endValue: number) => void
    onChangeEndValue: (startValue: number, endValue: number) => void
    onChangeButton: () => void
    statusError: () => void
}

function CounterSet(props: CounterSetTypeProps) {

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStartValue(+e.currentTarget.value, props.endCount);
    }

    const onChangeEndValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeEndValue(props.startCount, +e.currentTarget.value);
    }

    return (
        <div >
            {props.error ? <MessageErrorText statusError={props.statusError}/> :
                <div className={s.counterUI}>
                    <div className={s.inputs}>
                        <div className={s.content}>
                            <div className={s.text}>Start Value</div>
                            <input type={"number"} className={s.input} value={props.startCount}
                                   onChange={onChangeStartValueHandler}/>
                        </div>
                        <div className={s.content}>
                            <div className={s.text}>Max Value</div>
                            <input type={"number"} className={s.input} value={props.endCount}
                                   onChange={onChangeEndValueHandler}/>
                        </div>
                    </div>
                    <div className={s.buttons}>
                        <button className={s.button} onClick={props.onChangeButton}>Set</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default CounterSet;