import React, {useEffect, useState} from 'react';
import s from "./Counter.module.css";
import CounterUI from "./CounterUI/CounterUI";
import CounterSet from "./CounterSet/CounterSet";


function Counter() {

    const [startCount, setStartCount] = useState<number>(() => {
        return Number(localStorage.getItem('counterStartValue')) || 0
    })
    const [endCount, setEndCount] = useState<number>(() => {
        return Number(localStorage.getItem('counterEndValue')) || 0
    })
    const [setting, setSetting] = useState<boolean>(true)

    let onChangeButton = () => {
        console.log(setting)
        setSetting(!setting)
    }


    let onChangeStartValue = (value: number) => {
        setStartCount(value)
    }
    let onChangeEndValue = (value: number) => {
        setEndCount(value)
    }

    useEffect(() => {
        localStorage.setItem('counterStartValue', JSON.stringify(startCount))
    }, [startCount])

    useEffect(() => {
        localStorage.setItem('counterEndValue', JSON.stringify(endCount))
    }, [endCount])


    return (
        <div className={s.counter}>
            {setting ?
                <CounterUI startCount={startCount} setStartCount={setStartCount} onChangeButton={onChangeButton}/>
                : <CounterSet startCount={startCount} setStartCount={setStartCount}
                              endCount={endCount} setEndCount={setEndCount}
                              onChangeStartValue={onChangeStartValue} onChangeEndValue={onChangeEndValue}
                              onChangeButton={onChangeButton}
                />}
        </div>
    )
}

export default Counter;