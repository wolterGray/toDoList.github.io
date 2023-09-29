import React from "react";
import cl from "./inputEdit.module.scss";

function InputEdit({id, callBack ,keyInstruct, inputValue, setInputValue, error,  plcH, fz, h, w, }) {
 
  
  const styleInput = {
    fontSize: fz,
    height: h,
   
  };
  return (
    
      <input
        id={id}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        className={`${cl.input} ${error && cl.input_error}`}
        type="text"
        placeholder={plcH}
        style={styleInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            keyInstruct(false)
            callBack()
            e.preventDefault()
          }if(e.key === 'Escape'){
            keyInstruct(false)
            e.preventDefault()
          }
        }}
      />
   
      
  );
}

export default InputEdit;
