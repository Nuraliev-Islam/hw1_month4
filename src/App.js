import { useState } from "react";
import { BtnPlus } from "./components/btns/BtnPlus";
import { BtnSub } from "./components/btns/BtnSub";


function App() {

  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>{num}</h1>
      <BtnPlus setNum={setNum} num={num} />
      <BtnSub setNum={setNum} num={num} />
    </div>
  );
}

export default App;
