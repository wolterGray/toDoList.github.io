import React from "react";
import cl from "./toolbar.module.scss";
import {BsBagHeartFill} from "react-icons/bs";

function ToolBar() {
  return (
    <div className={cl.toolbar}>
      <BsBagHeartFill className={cl.iconCart} />
    </div>
  );
}

export default ToolBar;
