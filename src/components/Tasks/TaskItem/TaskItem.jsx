import React from "react";
import cl from "./taskItem.module.scss";
import CheckBox from "../../UI/customCheckBox/CheckBox";
import {BsCheck} from "react-icons/bs";
import InputEdit from "../../UI/InputEdit/InputEdit";
import TaskItemTools from "../TaskTools/TaskTools";
import cn from "classnames";

function TaskItem({
  name,
  description,
  id,
  date,
  time,
  isDone,
  removeTask,
  editTaskTitle,
  editTaskDesc,
  editTaskDate,
  editTaskTime,
  editTaskIsDone,
}) {
  const [editModeTitle, setEditModeTitle] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const [editModeDescription, setEditModeDescription] = React.useState(false);
  const [inputValueTitle, setInputValueTitle] = React.useState(name);
  const [inputValueDesc, setInputValueDesc] = React.useState(description);

  const saveEditTitle = (id, inputValue) => {
    editTaskTitle(id, inputValue);
    setEditModeTitle(false);
  };
  const saveEditDesc = (id, inputValue) => {
    editTaskDesc(id, inputValue);
    setEditModeDescription(false);
  };

  return (
    <div className={cl.task_item}>
      {editModeTitle ? (
        <InputEdit
          autoFocus={true}
          brd={false}
          h={"max-content"}
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
            onClick={()=>editTaskIsDone(id, !isDone)}
            controlCheckBox={isComplete}
            setControlCheckBox={setIsComplete}
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
          brd={false}
          h={"2.5rem"}
          autoFocus={true}
          keyInstruct={() => saveEditDesc(id, inputValueDesc)}
          inputValue={inputValueDesc}
          setInputValue={setInputValueDesc}
          callBack={() => saveEditDesc(id, inputValueDesc)}
        />
      ) : (
        <div className={cn(cl.description, isDone && cl.descriptionDone)}>
          {description ? (
            <div className={cl.text}>{description}</div>
          ) : (
            <div className={cl.text_empty}>
              No description. Select "Edit Description" to create.
            </div>
          )}
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
