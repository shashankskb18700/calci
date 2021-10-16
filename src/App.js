
import React, { useState } from 'react';


import "./App.css";
const App = () => {
  const [a, setA] = useState("");
  
  const [r, setR] = useState(0);
  
  

  const des = () => {
    
    let [ab, bc] = ["", ""];
    if (a.includes('+')){
      [ab, bc] = a.split("+");
      setR(parseInt(ab) + parseInt(bc));
     
    }
    else if (a.includes("-")) {
      [ab, bc] = a.split("-");
      setR(parseInt(ab) - parseInt(bc));
    }
    else if (a.includes("*")) {
      [ab, bc] = a.split("*");
      setR(parseInt(ab) * parseInt(bc));
    }
    else if (a.includes("/")) {
      [ab, bc] = a.split("/");
      setR(parseInt(ab) / parseInt(bc));
    }
  
    // console.log(ab);
    // console.log(bc);
    // setA(ab);
    // setB(bc);
  }
  console.log("a -" + a);
  
  return (
    <div className="calv">
      <input type="text" onChange={(e) => setA(e.target.value)} value={a} />
      {/* <input type="number" onChange={(e) => setA(e.target.value)} /> */}
      {/* <input type="number" onChange={(e) => setB(e.target.value)} /> */}

      <div className="but">
        <button type="button" onClick={() => setA(a + "+")}>
          +
        </button>

        <button type="button" onClick={() => setA(a + "-")}>
          -
        </button>

        <button type="button" onClick={() => setA(a + "*")}>
          *
        </button>

        <button type="button" onClick={() => setA(a + "/")}>
          /
        </button>
      </div>

      <div>
        <button type="button" onClick={() => setA(a + "1")}>
          1
        </button>
        <button type="button" onClick={() => setA(a + "2")}>
          2
        </button>
        <button type="button" onClick={() => setA(a + "3")}>
          3
        </button>
      </div>

      <div>
        <button type="button" onClick={() => setA(a + "4")}>
          4
        </button>
        <button type="button" onClick={() => setA(a + "5")}>
          5
        </button>
        <button type="button" onClick={() => setA(a + "6")}>
          6
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setA(a + "7")}>
          7
        </button>
        <button type="button" onClick={() => setA(a + "8")}>
          8
        </button>
        <button type="button" onClick={() => setA(a + "9")}>
          9
        </button>
      </div>

      <div>
        <button onClick={() => des()}>submit</button>
        <button type="button" onClick={() => setA(a + "0")}>
          0
        </button>
        <button onClick={() => setA("")}>clear</button>
      </div>
      
      <div className="abo">
        <div>{r}</div>
      </div>
    </div>
  );
}



export default App;
