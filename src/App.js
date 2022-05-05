import "./App.css";
import { useState } from "react";

function App() {
  let [count1, setCount1] = useState(0);
  let [operator, setOperator] = useState("+");
  let [count2, setCount2] = useState(0);
  let [answer, setAnswer] = useState(0);

  function calcAnswer() {
    setAnswer(eval(count1 + operator + count2));
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{count1}</p>
        <div className="numbers">
          <button onClick={() => setCount1((count1 = 1))}>1</button>
          <button onClick={() => setCount1((count1 = 2))}>2</button>
          <button onClick={() => setCount1((count1 = 3))}>3</button>
          <button onClick={() => setCount1((count1 = 4))}>4</button>
          <button onClick={() => setCount1((count1 = 5))}>5</button>
          <button onClick={() => setCount1((count1 = 6))}>6</button>
          <button onClick={() => setCount1((count1 = 7))}>7</button>
          <button onClick={() => setCount1((count1 = 8))}>8</button>
          <button onClick={() => setCount1((count1 = 9))}>9</button>
          <button onClick={() => setCount1((count1 = 0))}>0</button>
          <button onClick={() => setCount1((count1 = 0))}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator((operator = "+"))}>+</button>
          <button onClick={() => setOperator((operator = "-"))}>-</button>
          <button onClick={() => setOperator((operator = "*"))}>*</button>
          <button onClick={() => setOperator((operator = "/"))}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{count2}</p>
        <div className="numbers">
          <button onClick={() => setCount2((count2 = 1))}>1</button>
          <button onClick={() => setCount2((count2 = 2))}>2</button>
          <button onClick={() => setCount2((count2 = 3))}>3</button>
          <button onClick={() => setCount2((count2 = 4))}>4</button>
          <button onClick={() => setCount2((count2 = 5))}>5</button>
          <button onClick={() => setCount2((count2 = 6))}>6</button>
          <button onClick={() => setCount2((count2 = 7))}>7</button>
          <button onClick={() => setCount2((count2 = 8))}>8</button>
          <button onClick={() => setCount2((count2 = 9))}>9</button>
          <button onClick={() => setCount2((count2 = 0))}>0</button>
          <button onClick={() => setCount2((count2 = 0))}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={calcAnswer}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
