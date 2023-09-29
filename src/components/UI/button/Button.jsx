import React from "react";
import cl from "./button.module.scss";

function Button({
  onClick,
  pos = 'absolute',
  bRad = 0,
  fz = 30,
  pdY = 5,
  pdX = 5,
  top,
  left,
  right,
  bottom,
  display,
  children,
  
}) {
  const stylesButton = {
    position:pos ,
    borderRadius: `${bRad}px`,
    fontSize: fz,
    padding: `${pdY}px ${pdX}px`,
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    display:display
  };
  return (
    <button style={stylesButton} className={cl.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
