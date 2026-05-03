export function FnVarState() {
  let count = 0;

  function addCount() {
    count = count + 1;
    console.log(count);
  }

  return <button onClick={addCount}>Count is ({count})</button>;
}
