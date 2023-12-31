import React from "react";
import cl from "./createModalWind.module.scss";
import InputEdit from "../UI/InputEdit/InputEdit";
import {BsXLg} from "react-icons/bs";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function ModalWindTheme({
  setIsModal,

  addNewTheme,
}) {
  const [themeValue, setThemeValue] = React.useState("");

  const [error, setError] = React.useState(false);

  const onChangeThemeInput = () => {
    themeValue.trim().length > 0 && setError(false);
  };

  const addClearAndClose = () => {
    if (themeValue.trim().length > 0) {
      addNewTheme(themeValue);
      setIsModal(null);
    } else setError(true);
  };

  React.useEffect(() => {
    onChangeThemeInput();
  }, [themeValue]);
  return (
    <div className={cl.sideBarModal}>
      <div className={cl.modal_darkness}></div>
      <div className={cl.modal_wind}>
        <div className={cl.wind_content}>
          <h5 className={cl.title}>Create New Theme</h5>
          <BsXLg className={cl.close_icn} onClick={() => setIsModal(null)} />
          <div className={cl.theme}>
            <p className={cl.newLabel}>Theme Name</p>
            <InputEdit
              autoFocus={true}
              callBack={() => addClearAndClose()}
              keyInstruct={() => setIsModal()}
              error={error}
              id={"new-theme-name"}
              inputValue={themeValue}
              setInputValue={setThemeValue}
              plcH={"My plan on weekend"}
            />
          </div>
          <div className={cl.buttons}>
            <button className={cl.cancel_btn} onClick={() => setIsModal(null)}>
              Cancel
            </button>
            <button className={cl.create_btn} onClick={addClearAndClose}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindTheme;
