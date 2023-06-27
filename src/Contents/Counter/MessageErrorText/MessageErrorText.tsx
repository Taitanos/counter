import React from "react";
import s from "./MessageErrorText.module.css";

function MessageErrorText() {
    return (
        <div className={s.container}>
            <div className={s.message}>
                Стартовое значение не должно превышать конечное значение.
                Конечное значение не должно быть меньше стартового значения.
            </div>
            <div className={s.buttons}>
                <button className={s.button}>Agree</button>
            </div>
        </div>
    )
}

export default MessageErrorText;