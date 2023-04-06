import React, {useState} from 'react';
import s from './ClickBox.module.css'
import Counter from "../Counter/Counter";

function ClickBox() {

    const [count, setCount] = useState(0);

    let add = () => {
        setCount(count+1)
    }

    return <div className={s.clickBox}>
        <div className={s.input}>
            <Counter/>
        </div>
        <div className={s.field} onClick={add}></div>
    </div>
}

export default ClickBox;