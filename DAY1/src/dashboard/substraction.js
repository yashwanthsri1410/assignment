 import { useState } from "react";


function Substraction () {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(number1 - number2);

  function calculateTotal() {
    setTotal(number1 - number2);
  }

  return (
    <div className="App">
      <h1>substraction  Two Numbers</h1>
        <input value={number1} onChange={(e) => setNumber1(+e.target.value)} />
        <input value={number2} onChange={(e) => setNumber2(+e.target.value)}/>
        <button onClick={calculateTotal}>substraction Them!</button>
        <h2>{total}</h2>
    </div>
  );
}

export default Substraction;
