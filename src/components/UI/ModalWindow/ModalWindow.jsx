import React, { useRef } from "react";
import cl from "./modalWindow.module.scss";
import AddButton from "../AddButton/AddButton";
import {GoXCircle} from "react-icons/go";
import InputEdit from "../UI/InputEdit/InputEdit";
import Button from "../UI/button/Button";
import Title from "../UI/title/title";

function ModalWindow({setVisible, addNewTheme, myRef}) {
  const [inputValue, setInputValue] = React.useState("");
  function AddAndClose() {
    addNewTheme(inputValue),
      setInputValue(""),
      inputValue.length > 0 && setVisible(false);
  }
  

  return (
    <>
      <div
        className={cl.background_filter}
        onClick={() => setVisible(false)}></div>
      <div className={cl.modalWindow}>
        <GoXCircle onClick={() => setVisible(false)} className={cl.cross} />
        <Title title={"Enter your task"} fz={25} />
        <InputEdit
          myRef={myRef}
          w={"max-content"}
          h={"max-content"}
          fz={25}
          inputValue={inputValue}
          setInputValue={setInputValue}
          AddAndClose={AddAndClose}
        />
        <Button value={"Create"} onClick={AddAndClose} />
      </div>
    </>
  );
}

export default ModalWindow;
