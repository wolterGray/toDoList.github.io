import React from "react";
import TaskItem from "./TaskItem/TaskItem";
import cl from "./tasks.module.scss";
import TaskCreateField from "./TaskCreateField/TaskCreateField";
import TaskTheme from "./TaskTheme/TaskTheme";

const Task = ({
  tasksDataFilter,
  editTaskTitle,
  editTaskDesc,
  editTaskDate,
  editTaskTime,
  editTaskIsDone,
  removeTask,
  editTheme,
  removeTheme,
  setIsModalTask,
  setId,
}) => {
  return (
    <div className={cl.div}>
      {tasksDataFilter &&
        tasksDataFilter.map((theme) => (
          <div className={cl.tasks} key={theme.id}>
            <TaskTheme
              theme={theme.theme}
              tasksItem={theme}
              id={theme.id}
              removeTheme={removeTheme}
              editTheme={editTheme}
              editTaskTitle={editTaskTitle}
              editTaskDesc={editTaskDesc}
              editTaskDate={editTaskDate}
              editTaskTime={editTaskTime}
              editTaskIsDone={editTaskIsDone}
              removeTask={removeTask}
              setIsModalTask={setIsModalTask}
              setId={setId}
            />
          </div>
        ))}
    </div>
  );
};

export default Task;
