import React from "react";
import TaskItem from "./TaskItem/TaskItem";
import cl from "./tasks.module.scss";
import cn from "classnames";
import TaskCreateField from "./TaskCreateField/TaskCreateField";
import TaskTheme from "./TaskTheme/TaskTheme";
import axios from "axios";
import {API_TASKS_EDIT, API_TODO_URL} from "../../network/urlConst";

const Task = ({
  theme,
  id,
  task,
  color,
  tasksData,
  setTasksData,
  setIsModal,
  setId,
  getTasks,
  setIsPending
}) => {
  const removeTask = (id) => {
    setIsPending(true)
    axios.delete(API_TASKS_EDIT + id).then(()=>getTasks());
  };
  const editTaskTitle = (id, newValue) => {
    setIsPending(true)
    axios.put(API_TASKS_EDIT + id, {name: newValue}).then((r) => getTasks());
  };
  const editTaskIsDone = (id, newValue) => {
    setIsPending(true)
    axios.put(API_TASKS_EDIT + id, {isDone: newValue}).then(() => getTasks());
  };
  const editTaskDesc = (id, newValue) => {
    setIsPending(true)
    axios
      .put(API_TASKS_EDIT + id, {description: newValue})
      .then(() => getTasks());
  };
  const editTaskDate = (id, newValue) => {
    setIsPending(true)
    axios.put(API_TASKS_EDIT + id, {date: newValue}).then(() => getTasks());
  };
  const editTaskTime = (id, newValue) => {
    setIsPending(true)
    axios.put(API_TASKS_EDIT + id, {time: newValue}).then(() => getTasks());
  };
  const editTaskColor = (id, newValue) => {
    setIsPending(true)
    axios
      .put(API_TODO_URL + id, {color: newValue})
      .then(() => getTasks());
  };
  const [isTaskOpen, setIsTaskOpen] = React.useState(true);

  return (
    <div
      style={{backgroundColor: color}}
      className={cl.task}
      onClick={() => setIsTaskOpen(!isTaskOpen)}>
      <TaskTheme
      setIsPending={setIsPending}
        theme={theme}
        id={id}
        editTaskColor={editTaskColor}
        setTasksData={setTasksData}
        tasksData={tasksData}
        getTasks={getTasks}
      />
      <div className={cl.taskList}>
        {task.tasks &&
          task.tasks.map((item) => (
            <TaskItem
              key={item.id}
              name={item.name}
              description={item.description}
              id={item.id}
              date={item.date}
              time={item.time}
              isDone={item.isDone}
              editTaskTitle={editTaskTitle}
              editTaskDate={editTaskDate}
              editTaskTime={editTaskTime}
              editTaskIsDone={editTaskIsDone}
              editTaskDesc={editTaskDesc}
              removeTask={removeTask}
            />
          ))}
        <TaskCreateField id={task.id} setId={setId} setIsModal={setIsModal} />
      </div>
    </div>
  );
};

export default Task;
