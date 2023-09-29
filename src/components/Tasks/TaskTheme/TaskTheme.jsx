import React from "react";
import cl from "./taskTheme.module.scss";
import {
  BsGearWideConnected,
  BsPencil,
  BsTrash,
  BsPalette,
} from "react-icons/bs";
import InputEdit from "../../UI/InputEdit/InputEdit";
import TaskItem from "../TaskItem/TaskItem";
import TaskCreateField from "../TaskCreateField/TaskCreateField";
import cn from "classnames";

function TaskTheme({
  theme,
  id,
  editTheme,
  tasksItem,
  editTaskTitle,
  editTaskDesc,
  editTaskDate,
  editTaskTime,
  editTaskIsDone,
  removeTask,
  removeTheme,
  setIsModalTask,
  setId,
}) {
  const [isTolls, setIsTolls] = React.useState(false);
  const [isTollsColor, setIsTollsColor] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const [inputTheme, setInputTheme] = React.useState(theme);
  const [backgroundTask, setBackgroundTask] = React.useState(0);
  console.log(isTolls);
  const returnBg = (number) => {
    if (number == 0) return "#2828285e";
    if (number == 1) return "rgba(93, 2, 2, 0.231)";
    if (number == 2) return "rgba(157, 152, 52, 0.506)";
    if (number == 3) return "rgba(74, 160, 200, 0.244)";
    if (number == 4) return "rgba(106, 35, 132, 0.256)";
    if (number == 5) return "rgba(255, 166, 0, 0.232)";
    if (number == 6) return "rgba(1, 83, 1, 0.273)";
  };
  return (
    <div style={{background: returnBg(backgroundTask)}} className={cl.task}>
      <div className={cl.title_elem}>
        {editMode ? (
          <InputEdit
            inputValue={inputTheme}
            callBack={() => editTheme(id, inputTheme)}
            keyInstruct={setEditMode}
            setInputValue={setInputTheme}
            plcH={'Edit and Push "Return"'}
          />
        ) : (
          <h3 className={cl.title_task}>{theme}</h3>
        )}
        <div
          className={cl.gear_w}
          onClick={() => setIsTolls(!isTolls)}
          onMouseLeave={() => setIsTolls(false)}></div>
        <BsGearWideConnected className={cl.gear_icn} />
        <div
          className={`${cl.tolls_wind} ${isTolls && cl.tolls_wind_active}`}
          onMouseLeave={() => setIsTolls(false)}
          onMouseEnter={() => setIsTolls(true)}>
          <div
            onMouseEnter={() => setIsTollsColor(true)}
            onMouseLeave={() => setIsTollsColor(false)}
            className={cl.tolls_item}>
            <BsPalette className={cl.tolls_icon} />
            <p>Color</p>
          </div>
          <div
            className={cl.tolls_item}
            onClick={() => {
              setEditMode(true);
            }}>
            <BsPencil className={cl.tolls_icon} />
            <p>Rename</p>
          </div>
          <div className={cl.tolls_item} onClick={() => removeTheme(id)}>
            <BsTrash className={cl.tolls_icon} />
            <p>Remove</p>
          </div>
        </div>
        <div className={cn(cl.toolsColor, isTollsColor && cl.toolsColorActive)} onMouseEnter={() => {
          setIsTollsColor(true)
          setIsTolls(true)
        }
        } onMouseLeave={() => {
          setIsTollsColor(false)
          setIsTolls(false)
          }}>
          <div
            style={{background: "rgb(137, 34, 34)"}}
            onClick={() => setBackgroundTask(1)}
            className={cl.colorItem}></div>
          <div
            style={{background: "rgb(242, 242, 140)"}}
            onClick={() => setBackgroundTask(2)}
            className={cl.colorItem}></div>
          <div
            style={{background: "rgb(74, 160, 200)"}}
            onClick={() => setBackgroundTask(3)}
            className={cl.colorItem}></div>
          <div
            style={{background: "rgb(106, 35, 132)"}}
            onClick={() => setBackgroundTask(4)}
            className={cl.colorItem}></div>
          <div
            style={{background: "orange"}}
            onClick={() => setBackgroundTask(5)}
            className={cl.colorItem}></div>
          <div
            style={{background: "rgb(1, 83, 1)"}}
            onClick={() => setBackgroundTask(6)}
            className={cl.colorItem}></div>
        </div>
      </div>
      {tasksItem.tasks.map((item) => (
        <TaskItem
          key={item.id}
          description={item.description}
          date={item.date}
          time={item.time}
          removeTask={removeTask}
          editTaskTitle={editTaskTitle}
          editTaskDesc={editTaskDesc}
          editTaskDate={editTaskDate}
          editTaskTime={editTaskTime}
          editTaskIsDone={editTaskIsDone}
          name={item.name}
          isDone={item.isDone}
          id={item.id}
        />
      ))}
      <div className={cl.item}>
        <TaskCreateField
          id={id}
          setId={setId}
          setIsModalTask={setIsModalTask}
        />
      </div>
    </div>
  );
}

export default TaskTheme;
