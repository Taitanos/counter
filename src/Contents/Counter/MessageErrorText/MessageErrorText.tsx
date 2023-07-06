import React from "react";
import s from "./MessageErrorText.module.css";

type MessageErrorTextPropsType = {
    statusError: () => void
}

function MessageErrorText(props:MessageErrorTextPropsType) {
    return (
        <div className={s.container}>
            <div className={s.message}>
                Стартовое значение не должно превышать конечное значение.
                Конечное значение не должно быть меньше стартового значения.
                Значение не должно быть меньше нуля.
            </div>
            <div className={s.buttons}>
                <button className={s.button} onClick={props.statusError}>Agree</button>
            </div>
        </div>
    )
}

export default MessageErrorText;