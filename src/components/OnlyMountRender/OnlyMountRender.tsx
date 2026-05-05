import { useEffect, useRef } from "react";

interface Props {
  toggle: boolean;
  onToggle: () => void;
}

export const OnlyMountRender = ({ toggle, onToggle }: Props) => {
  // useRef as instance variable or flag bool
  const calledOnce = useRef(false);
  // mountUpdateRender
  useEffect(() => {
    if (calledOnce.current) {
      return;
    }
    // toggle=false is instance variable
    // toggle===false is bool valid
    if (toggle === false) {
      console.log("I run only once if toggle is false");
      calledOnce.current = true;
    }
  }, [toggle]);

  return (
    <>
      <button onClick={onToggle}>Toggle</button>
      {toggle && <div>Hello React</div>}
    </>
  );
};
