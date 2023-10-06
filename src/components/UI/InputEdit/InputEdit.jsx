import React from "react";
import cl from "./inputEdit.module.scss";

function InputEdit({
  id,
  autoFocus = false,
  onBlur = true,
  keyInstruct,
  callBack,
  inputValue,
  setInputValue,
  brd = true,
  brdCl = "#ffffff5b",
  error,
  plcH,
  fz,
  h,
  w,
}) {
  const styleInput = {
    fontSize: fz,
    height: h,
    border: brd ? `1px solid ${brdCl}` : "none",
  };
  return (
    <input
      id={id}
      autoFocus={autoFocus}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      className={`${cl.input} ${error && cl.input_error}`}
      type="text"
      placeholder={error ? "Field cannot be empty " : plcH}
      style={styleInput}
      onBlur={onBlur ? () => keyInstruct(false) : () => false}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          callBack();
          e.preventDefault();
        }
        if (e.key === "Escape") {
          keyInstruct(false);
          e.preventDefault();
        }
      }}
    />
  );
}

export default InputEdit;
