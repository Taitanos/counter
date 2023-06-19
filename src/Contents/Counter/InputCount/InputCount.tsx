import React from "react";
import s from './InputCount.module.css';

type InputCountPropsType = {
    count: number
}


function InputCount(props:InputCountPropsType) {
    return (
        <div className={s.input}>
            <input type={"number"} value={props.count}/>
        </div>
    );
}

export default InputCount;