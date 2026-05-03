import { useState } from "react";

export function StateBatching() {
  const [count, setCount] = useState(0);

  console.log("🔄 render con count:", count);

  // ── 1. STALE CLOSURE ─────────────────────────────
  const stale = () => {
    console.log("btn1 stale → closure ve:", count);

    setCount(count + 1); // 0+1
    setCount(count + 1); // 0+1
    setCount(count + 1); // 0+1
  };

  // ── 2. FUNCTIONAL UPDATER ────────────────────────
  // (c)=> c+1 callback function wait update to continue next batch setter line
  const updater = () => {
    console.log("btn2 updater → closure ve:", count);

    setCount((c) => {
      console.log("  updater1 recibe:", c);
      return c + 1; // 0+1
    });

    setCount((c) => {
      console.log("  updater2 recibe:", c);
      return c + 1; // 1+1
    });

    setCount((c) => {
      console.log("  updater3 recibe:", c);
      return c + 1; // 2+1
    });
  };

  // ── 3. WRAPPER ───────────────────────────────────
  const normal = () => {
    console.log("btn3 normal → closure ve:", count);
    setCount(count + 1);
  };

  const wrapper = () => normal();

  console.log(
    "funciones en este render:",
    "\nstale:",
    stale,
    "\nupdater:",
    updater,
    "\nnormal:",
    normal,
    "\nwrapper:",
    wrapper,
  );

  return (
    <>
      <p>count: {count}</p>

      <button onClick={stale}>btn1 stale (esperas +3, pasa +1)</button>

      <button onClick={updater}>btn2 updater (correcto +3)</button>

      <button onClick={wrapper}>
        btn3 wrapper (igual que stale pero + función extra)
      </button>
    </>
  );
}
