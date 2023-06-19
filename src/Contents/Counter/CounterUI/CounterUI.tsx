import React, {useState} from "react";
import s from "./CounterUI.module.css";
import InputCount from "../InputCount/InputCount";
import ButtonCount from "../ButtonCount/ButtonCount";

type CounterUITypeProps = {
    //set: boolean
}

function CounterUI (props: CounterUITypeProps) {
    const [count, setCount] = useState(0);

    return (
        <div className={s.counterUI}>
            <div className={s.input}>
                <InputCount count={count}/>
            </div>
            <div className={s.button}>
                <ButtonCount count={count} setCount={setCount} />
            </div>
        </div>
    );
}

export default CounterUI;