import React, {useState} from 'react';
import './App.css';

function App() {

    const [count, setCount] = useState(0);

  return (
    <div className={"app"}>
      <div className={"input"}>
          <input value={count}/>
      </div>
      <div className={"button"}>
          <button onClick={() => {setCount(count + 1)}}>Add</button>
          <button onClick={() => {setCount(0)}}>Reset</button>
      </div>
    </div>
  );
}

export default App;
