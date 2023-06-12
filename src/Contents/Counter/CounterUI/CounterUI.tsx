import React, {useState} from "react";
import s from "../Counter.module.css";
import InputCount from "../InputCount/InputCount";
import ButtonCount from "../ButtonCount/ButtonCount";

function CounterUI () {
    const [count, setCount] = useState(0);

    return (
        <div className={s.counterUI}>
            <InputCount count={count}/>
            <ButtonCount count={count} setCount={setCount}/>
        </div>
    );
}

export default CounterUI;