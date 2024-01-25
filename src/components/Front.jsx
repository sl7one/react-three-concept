import React, {  useState } from "react";
import Text from "./Text";
import Actions from "./Actions";

export default function Front() {
  const [active, setActive] = useState(0);

  return (
    <div className="front">
      <Text active={active} />
      <Actions active={active} setActive={setActive} />
    </div>
  );
}
