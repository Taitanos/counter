import React, {useEffect, useState} from 'react';
import s from "./Counter.module.css";
import CounterUI from "./CounterUI/CounterUI";
import CounterSet from "./CounterSet/CounterSet";


function Counter() {

    // Хранение данный через useState
    const [startCount, setStartCount] = useState<number>(() => {
        return Number(localStorage.getItem('counterStartValue')) || 0
    })
    const [endCount, setEndCount] = useState<number>(() => {
        return Number(localStorage.getItem('counterEndValue')) || 0
    })
    const [counter, setCounter] = useState<number>(() => {
        return Number(localStorage.getItem('counter')) || 0
    })
    const [setting, setSetting] = useState<boolean>(true)

    // Смена панели по кнопке
    let onChangeButton = () => {
        setSetting(!setting)
    }

    //Изменение начального и конечного значения по нажатию кнопки
    let onChangeStartValue = (startCount: number, endCount: number ) => {
        if (startCount < endCount && startCount >= 0) {
            setStartCount(startCount)
            setCounter(startCount)
        }
    }
    let onChangeEndValue = (startCount: number, endCount: number) => {
        if (endCount > startCount && endCount >= 1) {
            setEndCount(endCount)
        }
    }

    // Изменение в localStorage
    useEffect(() => {
        localStorage.setItem('counterStartValue', JSON.stringify(startCount))
    }, [startCount])

    useEffect(() => {
        localStorage.setItem('counterEndValue', JSON.stringify(endCount))
    }, [endCount])

    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(counter))
    }, [counter])

    //Итерация счетчика
    const add = () => {
            if (startCount < endCount && counter < endCount) {
                return setCounter(counter + 1);
            }
    };
    // Сброс значение счетчика на стартовое значение
    const reset = () => {setCounter(startCount)};
    // Смена панели UI или Set
    const set = () => {
        onChangeButton()
    };

    return (
        <div className={s.counter}>
            {setting ?
                <CounterUI counter={counter}
                           add={add}
                           reset={reset}
                           onChangeButton={set}
                />
                : <CounterSet startCount={startCount}
                              endCount={endCount}
                              onChangeStartValue={onChangeStartValue}
                              onChangeEndValue={onChangeEndValue}
                              onChangeButton={set}
                />}
        </div>
    )
}

export default Counter;