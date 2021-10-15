
import React ,{ useState } from 'react';

import "./App.css";
const App = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState(0);
  const [r, setR] = useState(0);
  


  const des = () => {
    let [ab, bc] = ["", ""];
    if (a.includes('+')){
      [ab, bc] = a.split("+");
      setR(parseInt(a) + parseInt(b));


    } else if (a.includes("-")) {
      [ab, bc] = a.split("-");
    } else if (a.includes("*")) {
      [ab, bc] = a.split("*");
    } else if (a.includes("/")) {
      [ab, bc] = a.split("/");
    }
  
    console.log(ab);
    console.log(bc);
    setA(ab);
    setB(bc);
  }
  console.log("a -" + a);
  console.log("b -" + b);
  return (
    <div className="calv">
      <input type="text" onChange={(e) => setA(e.target.value)} />
      {/* <input type="number" onChange={(e) => setA(e.target.value)} /> */}
      <input type="number" onChange={(e) => setB(e.target.value)} />

      <div className="but">
        <button type="button" onClick={() => setR(parseInt(a) + parseInt(b))}>
          +
        </button>

        <button type="button" onClick={() => setR(a - b)}>
          -
        </button>

        <button type="button" onClick={() => setR(a * b)}>
          *
        </button>

        <button type="button" onClick={() => setR(a / b)}>
          /
        </button>
      </div>
       <button onClick={()=>des()}>submit</button>
      <div className="abo">
        
        <div>{r}</div>
      </div>
    </div>
  );
}



export default App;
