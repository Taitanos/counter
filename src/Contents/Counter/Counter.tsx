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
    const [error, setError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<boolean>(false)

    // Смена панели по кнопке
    let onChangeButton = () => {
        setSetting(!setting)
    }

    // Вывод ошибки при срабатывании
    let onChangeStatusError = () => {
        setErrorMessage(!errorMessage)
    }

    // Изменение начального и конечного значения по нажатию кнопки
    let onChangeStartValue = (startCount: number, endCount: number) => {
        if (startCount >= endCount || startCount < 0) {
            setError(!error)
            setErrorMessage(!errorMessage)
        } else {
            setStartCount(startCount)
            setCounter(startCount)
        }
    }
    let onChangeEndValue = (startCount: number, endCount: number) => {
        if (endCount < 0 || endCount <= startCount) {
            setError(!error)
            setErrorMessage(!errorMessage)
        } else {
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
        if (counter === endCount - 1 || counter > endCount) {
            setCounter(counter + 1)
            setError(true)
        } else {
            setCounter(counter + 1)
        }
    };
    // Сброс значение счетчика на стартовое значение
    const reset = () => {
        setCounter(startCount)
        setError(false)
    };
    // Смена панели UI или Set
    const set = () => {
        onChangeButton()
    };

    const statusError = () => {
        onChangeStatusError()
    };

    return (
        <div className={s.counter}>
            {setting ?
                <CounterUI counter={counter}
                           error={error}
                           add={add}
                           reset={reset}
                           onChangeButton={set}
                />
                : <CounterSet startCount={startCount}
                              endCount={endCount}
                              error={error}
                              errorMessage={errorMessage}
                              onChangeStartValue={onChangeStartValue}
                              onChangeEndValue={onChangeEndValue}
                              onChangeButton={set}
                              statusError={statusError}
                />
            }
        </div>
    )
}

export default Counter;