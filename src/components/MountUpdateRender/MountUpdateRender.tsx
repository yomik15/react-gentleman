import { useEffect } from "react";
interface Props {
  toggle: boolean;
  onToggle: () => void;
}
export const MountUpdateRender = ({ toggle, onToggle }: Props) => {
  // mountUpdateRender
  useEffect(() => {
    console.log("I run on every render: mount and update");
  });

  // mountRender
  useEffect(() => {
    console.log("I run only when mount:first render");
  }, []);

  // toggleChangeRender
  useEffect(() => {
    console.log("I run if toggle update(change) and on mount component");
  }, [toggle]);

  return (
    <>
      <button onClick={onToggle}>Toggle</button>
      {toggle && <div>Hello React</div>}
    </>
  );
};
