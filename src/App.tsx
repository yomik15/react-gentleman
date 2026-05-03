import { useState } from "react";
import { ClassState, FnVarState, StateBatching, UseState } from "./components";
function App() {
  return (
    <>
      <FnVarState />
      <ClassState />
      {/* Ver ClosureState.ts Js Code */}
      <UseState />
      <StateBatching />
    </>
  );
}

export default App;
