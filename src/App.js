import "./App.css";
import { useState } from "react";

function App() {
  let [count1, setCount1] = useState("0");
  let [operator, setOperator] = useState("+");
  let [count2, setCount2] = useState("0");
  let [answer, setAnswer] = useState("0");
  let [store, setStore] = useState("0");

  function updateCount1(e) {
    let number = e.target.innerText + "";

    count1 === "0" ? setCount1(number) : setCount1(count1 + number);
  }

  function updateOperator(e) {
    let newOperator = e.target.innerText + "";
    setOperator(newOperator);
  }

  function updateCount2(e) {
    let number = e.target.innerText + "";

    count2 === "0" ? setCount2(number) : setCount2(count2 + number);
  }

  function calcAnswer() {
    setAnswer(eval(count1 + operator + count2));
  }

  function updateStore() {
    setStore(answer);
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{count1}</p>
        <div className="numbers" onClick={updateCount1}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
        </div>
        <div className="numbers">
          <button onClick={setCount1("0")}>Clear</button>
          <button onClick={setCount1(store)}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers" onClick={updateOperator}>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
        </div>
      </div>

      <div className="panel">
        <p>{count2}</p>
        <div className="numbers" onClick={updateCount2}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
        </div>
        <div className="numbers">
          <button onClick={setCount2("0")}>Clear</button>
          <button onClick={setCount2(store)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={calcAnswer}>=</button>
          <button onClick={updateStore}>StoreAns</button>
          <p>stored answer: {store}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
