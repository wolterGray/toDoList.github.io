import React from "react";

function GridContainer({
  minSZ = 100,
  posX = "center",
  posY = "center",
  space,
  children,
}) {
  const styleGridContainer = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(${minSZ}px, 1fr))`,
    justifyItems: posX,
    alignItems: posY,
    gap: space,
    height: 100 + "%",
  };
  return <div style={styleGridContainer}>{children}</div>;
}

export default GridContainer;
