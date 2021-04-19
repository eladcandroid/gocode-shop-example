import { useState } from "react";

function Toggle() {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      <div>{isShown && "CONTENT"}</div>
      <button onClick={() => setIsShown(!isShown)}>Toggle</button>
    </>
  );
}

export default Toggle;
