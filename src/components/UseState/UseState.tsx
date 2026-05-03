import { useState } from "react";

export function UseState() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <button onClick={addCount}>Count is ({count})</button>
    </>
  );
}
