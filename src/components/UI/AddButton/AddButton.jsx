import React from "react";
import cl from "./addButton.module.scss";
import {BsPlus} from "react-icons/bs";

function AddButton({name = 'Create', changeFunc, mB}) {
  const stylesButton = {
    marginBottom: mB
  }
  return (
    <div style={stylesButton} className={cl.addButton} onClick={changeFunc}>
      <BsPlus className={cl.plus_icon}/>
		{name}
    </div>
  );
}

export default AddButton;
