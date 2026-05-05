import { useState } from "react";
import {
  MountUpdateRender,
  OnlyUpdateRender,
  OnlyMountRender,
} from "../../components";
export const Parent = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <MountUpdateRender toggle={toggle} onToggle={handleToggle} />
      <OnlyUpdateRender toggle={toggle} onToggle={handleToggle} />
      <OnlyMountRender toggle={toggle} onToggle={handleToggle} />
    </>
  );
};
