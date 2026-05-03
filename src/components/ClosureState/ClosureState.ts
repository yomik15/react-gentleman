// closure : Js Function defined inside of another function, the inner function has acces to the variables and scope of the outer function.Allow for private variables and state maintenance . Concept Use with JS Frameworks: React,Vue,Angular

function useState<T>(defaultValue: T) {
  let _state = defaultValue;

  function getState(): T {
    return _state;
  }

  function setState(stateUpdater: T | ((prev: T) => T)): void {
    if (typeof stateUpdater === "function") {
      _state = (stateUpdater as (prev: T) => T)(_state);
    } else {
      _state = stateUpdater;
    }
  }

  return [getState, setState] as const;
}
// Uso directo
const [getCount, setCount] = useState(0);

console.log(getCount());
function functionalUpdater() {
  setCount((p) => p + 1);
  setCount((p) => p + 1);
  setCount((p) => p + 1);
}
functionalUpdater();
console.log(getCount());
function functionalUpdater2() {
  setCount(getCount() + 1);
  setCount(getCount() + 1);
  setCount(getCount() + 1);
}
functionalUpdater2();
console.log(getCount());
// No React Component
// export function ClosureState() {
//   const [count, setCount] = useState(0);
//
//   const addCount = () => {
//     setCount((count) => count + 1);
//   };
//   return (
//     <>
//       <button onClick={addCount}>Count is ({count()})</button>
//     </>
//   );
// }
