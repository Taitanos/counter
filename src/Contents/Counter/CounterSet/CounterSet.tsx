import React, {useState} from "react";
import s from "./CounterSet.module.css";
import InputCount from "../InputCount/InputCount";
import ButtonCount from "../ButtonCount/ButtonCount";

type CounterSetTypeProps = {

}

function CounterSet (props: CounterSetTypeProps) {
    const [count, setCount] = useState(0);

    return (
        <div className={s.counterUI}>
            <div className={s.input1}>
                <InputCount count={count}/>
            </div>
            <div className={s.input2}>
                <InputCount count={count}/>
            </div>
            <div className={s.button}>
                <ButtonCount count={count} setCount={setCount}/>
            </div>
        </div>
    );
}

export default CounterSet;