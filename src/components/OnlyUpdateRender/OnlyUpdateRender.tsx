import { useEffect, useRef } from "react";

interface Props {
  toggle: boolean;
  onToggle: () => void;
}

export const OnlyUpdateRender = ({ toggle, onToggle }: Props) => {
  // useRef as instance variable or flag bool
  const didMount = useRef(false);
  // mountUpdateRender
  useEffect(() => {
    if (didMount.current) {
      console.log("I run only if toggle udpate(changes)");
    } else {
      didMount.current = true;
    }
  }, [toggle]);

  return (
    <>
      <button onClick={onToggle}>Toggle</button>
      {toggle && <div>Hello React</div>}
    </>
  );
};
