import React from "react";
import cl from "./taskItem.module.scss";
import CheckBox from "../../UI/customCheckBox/CheckBox";
import {BsCheck} from "react-icons/bs";
import InputEdit from "../../UI/InputEdit/InputEdit";
import TaskItemTools from "../TaskTools/TaskTools";

function TaskItem({
  name,
  description,
  id,
  date,
  time,
  removeTask,
  editTaskTitle,
  editTaskDesc,
  editTaskDate,
  editTaskTime,
  editTaskIsDone
}) {
  const [editModeTitle, setEditModeTitle] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  const [editModeDescription, setEditModeDescription] = React.useState(false);
  const [inputValueTitle, setInputValueTitle] = React.useState(name);
  const [inputValueDesc, setInputValueDesc] = React.useState(description);

  const saveEditTitle = (id, inputValue) => {
    editTaskTitle(id, inputValue);
  };
  const saveEditDesc = (id, inputValue) => {
    editTaskDesc(id, inputValue);
  };

  
  return (
    <div className={cl.task_item} onClick={()=>{
      setIsDone(!isDone)
      editTaskIsDone(id, isDone)
      }}>
      {editModeTitle ? (
        <InputEdit
          keyInstruct={setEditModeTitle}
          inputValue={inputValueTitle}
          setInputValue={setInputValueTitle}
          callBack={() => saveEditTitle(id, inputValueTitle)}
        />
      ) : (
        <div className={cl.task_title}>
          <CheckBox
            value={isDone}
            clr={"#c6def5f7"}
            markColor={"green"}
            size={20}
            name={name}
          />
          <TaskItemTools
            removeTask={removeTask}
            setEditModeTitle={setEditModeTitle}
            setEditModeDescription={setEditModeDescription}
            id={id}
          />
        </div>
      )}
      {editModeDescription ? (
        <InputEdit
          keyInstruct={setEditModeDescription}
          inputValue={inputValueDesc}
          setInputValue={setInputValueDesc}
          callBack={() => saveEditDesc(id, inputValueDesc)}
        />
      ) : (
        <div className={cl.description}>
          {description ? <div className={cl.text}>{description}</div>:<div className={cl.text_empty}>No description. Select "Edit Description" to create.</div>}
          
          <div className={cl.lead_date}>
            <input
              type="date"
              className={cl.date}
              min={"2023-09-01"}
              value={date}
              onChange={(e) => editTaskDate(id, e.target.value)}
            />{" "}
            |{" "}
            <input
              type="time"
              className={cl.time}
              value={time}
              onChange={(e) => editTaskTime(id, e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
