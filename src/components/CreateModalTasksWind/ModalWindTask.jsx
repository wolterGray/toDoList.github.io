import React from "react";
import cl from "./createModalWind.module.scss";
import InputEdit from "../UI/InputEdit/InputEdit";
import {BsXLg} from "react-icons/bs";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function ModalWindTask({setIsModal, addNewTask, idTheme}) {
  const [taskNameValue, setTaskNameValue] = React.useState("");
  const [taskDescValue, setTaskDescValue] = React.useState("");
  const [taskDate, setTaskDate] = React.useState('');
  const [taskTime, setTaskTime] = React.useState("");
  const [error, setError] = React.useState(false);
  
  

  const onChangeThemeInput = () => {
    taskNameValue.trim().length > 0 && setError(false);
  };

  const addClearAndClose = () => {
    if (taskNameValue.trim().length > 0) {
      addNewTask(idTheme, taskNameValue, taskDescValue, taskDate, taskTime);
      setIsModal(null);
    } else setError(true);
  };

  React.useEffect(() => {
    onChangeThemeInput();
  }, [taskNameValue]);
  return (
    <div className={cl.sideBarModal}>
      <div className={cl.modal_darkness}></div>
      <div className={cl.modal_wind}>
        <div className={cl.wind_content}>
          <h5 className={cl.title}>Create New Task</h5>
          <BsXLg
            className={cl.close_icn}
            onClick={() => setIsModal(null)}
          />
          <div className={cl.task_name}>
            <p className={cl.newLabel}>Task Name</p>
            <InputEdit
             onBlur={false}
              autoFocus={true}
              callBack={addClearAndClose}
              keyInstruct={()=> setIsModal()}
              error={error}
              id={""}
              inputValue={taskNameValue}
              setInputValue={setTaskNameValue}
              plcH={'Read "Game of thrones"'}
            />
          </div>
          <div className={cl.task_description}>
            <p className={cl.newLabel}>Task description</p>
            <InputEdit
            onBlur={false}
              callBack={() => addClearAndClose()}
              keyInstruct={()=>setIsModal(null)}
              inputValue={taskDescValue}
              setInputValue={setTaskDescValue}
              plcH={"Page 33, chapter 2"}
            />
          </div>
          <div className={cl.task_lead_time}>
            <p className={cl.newLabel}>Lead time</p>
            <div className={cl.time_field}>
              <input
                className={cl.date}
                type="date"
                defaultValue={taskDate}
                min={'2023-09-01'}
                onChange={(e) => setTaskDate(e.target.value)}
              />
              <input
                className={cl.time}
                type="time"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
              />
            </div>
          </div>
          <div className={cl.buttons}>
            <button
              className={cl.cancel_btn}
              onClick={() => setIsModal(null)}>
              Cancel
            </button>
            <button
              className={cl.create_btn}
              onClick={() => addClearAndClose()}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindTask;
