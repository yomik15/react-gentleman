import { useState } from "react";
import { Button, Button02, Button03 } from "../components";
function App() {
  const [count, setCount] = useState(0);
  let [name, setName] = useState("Miguel");
  const addCount = () => setCount((count) => count + 1);

  const changeName = () => setName((name) => (name = "Monkiki"));
  return (
    <>
      <Button />
      <Button02 />
      <Button03 label={`Count is ${count}`} parentMethod={addCount} />
      <Button03 label={`My name is ${name}`} parentMethod={changeName} />
    </>
  );
}

export default App;
