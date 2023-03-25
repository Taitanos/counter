import React from "react";

type ButtonCountTypeProps = {
    count: number;
    setCount: (setCount: number) => void;
}

function ButtonCount(props: ButtonCountTypeProps) {

    const add = () => {props.setCount(props.count + 1)};
    const reset = () => {props.setCount(0)};


    return (
        <div className={"button"}>
            <button onClick={add}>Add</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ButtonCount;