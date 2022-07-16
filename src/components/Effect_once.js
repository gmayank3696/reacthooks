import React, { useEffect, useState } from "react";

function Effect_once() {
  const [MouseLoc, setMouseLoc] = useState({ x: "", y: "" });

  const logMousePos = (e) => {
    console.log("Event handler Call");
    setMouseLoc({ x: e.x, y: e.y });
  };
  useEffect(() => {
    console.log("use Effect called");
    window.addEventListener("mousemove", logMousePos);

    return () => {
        window.removeEventListener('mousemove', logMousePos);
    }
  }, []);
  return (
    <div>
      <React.Fragment>
        x: {MouseLoc.x}
        y: {MouseLoc.y}
      </React.Fragment>
    </div>
  );
}

export default Effect_once;
