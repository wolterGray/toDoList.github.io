import React from "react";
import cl from "./message.module.scss";

function Message({
  message,
  color = "#18181851",
  background = "#fff",
  marginB,
  marginT,
}) {
  const styleMessage = {
    color: color,
    background: background,
    marginBottom: marginB,
    marginTop: marginT,
  };
  
  return (
    <div className={cl.message} style={styleMessage}>
      {message}
    </div>
  );
}

export default Message;
