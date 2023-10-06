import React from "react";
import cl from "./taskCreateField.module.scss";
import uuid from "react-uuid";
import InputEdit from "../../UI/InputEdit/InputEdit";
import Button from "../../UI/button/Button";
import AddButton from "../../UI/AddButton/AddButton";

function TaskCreateField({addNewTask, id,setId, setIsModal}) {
  const [inputValueCreate, setInputValueCreate] = React.useState([]);
  const [inputVisible, setInputVisible] = React.useState(false);
  const createAndClear = () => {
    inputValueCreate.trim().length > 0 && addNewTask(id, inputValueCreate);
    setInputValueCreate("");
    setInputVisible(false);
  };
  return inputVisible ? (
    <div
      className={cl.enter_field}
      onBlur={() => {
        setInputVisible(false);
        setInputValueCreate("");
      }}>
      <InputEdit
        id={id}
        inputValue={inputValueCreate}
        setInputValue={setInputValueCreate}
        callBack={createAndClear}
        keyInstr={()=> setIsModal(null)}
        h={30}
        w={100}
        fz={20}
        plcH={"My task"}
      />
    </div>
  ) : (
    <AddButton mB={30} changeFunc={()=>{
      setIsModal(false)
      setId(id)
    }} name="Create New Task" />
  );
}

export default TaskCreateField;
