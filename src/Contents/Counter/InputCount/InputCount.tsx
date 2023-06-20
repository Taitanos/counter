import React from "react";
import s from './InputCount.module.css';

type InputCountPropsType = {
    count: number
}


function InputCount(props:InputCountPropsType) {

    let newValueInput = props.count

    return (
        <div className={s.input}>
            <input type={"number"} value={newValueInput}/>
        </div>
    );
}

export default InputCount;