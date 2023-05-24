import React, {useState} from 'react';
import s from './ClickBox.module.css'

function ClickBox() {

    const [count, setCount] = useState(0);

    let add = () => {
        setCount(count + 1)
    }

    let reset = () => {
        setCount(0)
    }


    return <div className={s.clickBox}>
        <div>
            <div className={s.counter}>
                <input className={s.input} value={count}/>
                <div className={s.buttons}>
                    <button className={s.button}>Record</button>
                    <button className={s.button} onClick={reset}>Reset</button>
                </div>
            </div>
            <div className={s.scoreboard}>

            </div>
        </div>
        <div className={s.field} onClick={add}>Click on me</div>
    </div>
}

export default ClickBox;