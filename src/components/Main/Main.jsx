import React from "react";
import SideBar from "../SideBar/SideBar";
import uuid from "react-uuid";
import Task from "../Tasks/Task";
import cl from "./main.module.scss";
import Container from "../UI/container/Container";
import NothingPage from "../NothingPage/NothingPage";

import ModalWindTheme from "../CreateModalTasksWind/ModalWindTheme";
import ModalWindTask from "../CreateModalTasksWind/ModalWindTask";

function Main({isBurger, tasksData, setTasksData}) {
  const [tasksFilter, setTasksFilter] = React.useState(null);
  const [isModalTheme, setIsModalTheme] = React.useState(false);
  const day = new Date();
  const [isModalTask, setIsModalTask] = React.useState(false);
  const [id, setId] = React.useState("");
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  const addNewTheme = (title) => {
    setTasksData([...tasksData, {id: uuid(), theme: title, tasks: []}]);
  };
  const removeTheme = (id) => {
    setTasksData(tasksData.filter((f) => f.id != id));
  };
  const editTheme = (id, value) => {
    setTasksData(tasksData.map((e) => (e.id == id ? {...e, theme: value} : e)));
  };
  const addNewTask = (id, name, description, date, time) => {
    setTasksData(
      tasksData.map((e) =>
        e.id == id
          ? {
              ...e,
              tasks: [
                ...e.tasks,
                {
                  id: uuid(),
                  name,
                  description,
                  date,
                  time,
                  isDone: false,
                },
              ],
            }
          : e
      )
    );
  };
  const removeTask = (id) => {
    setTasksData(
      tasksData.map(
        (e) => e && {...e, tasks: e.tasks.filter((f) => f.id != id)}
      )
    );
  };
  const editTaskTitle = (id, newValue) => {
    setTasksData((prev) =>
      prev.map(
        (item) =>
          tasksData && {
            ...item,
            ...item.tasks.map((e) =>
              e.id == id ? (e.name = newValue) : e.name
            ),
          }
      )
    );
  };
  const editTaskIsDone = (id, value) => {
    setTasksData((prev) =>
      prev.map(
        (item) =>
          tasksData && {
            ...item,
            ...item.tasks.map((e) =>
              e.id == id ? (e.isDone = true) : e.isDone
            ),
          }
      )
    );
  };

  const editTaskDesc = (id, newValue) => {
    setTasksData((prev) =>
      prev.map(
        (item) =>
          tasksData && {
            ...item,
            ...item.tasks.map((e) =>
              e.id == id ? (e.description = newValue) : e.description
            ),
          }
      )
    );
  };
  const editTaskDate = (id, newValue) => {
    setTasksData((prev) =>
      prev.map(
        (item) =>
          tasksData && {
            ...item,
            ...item.tasks.map((e) =>
              e.id == id ? (e.date = newValue) : e.date
            ),
          }
      )
    );
  };
  const editTaskTime = (id, newValue) => {
    setTasksData((prev) =>
      prev.map(
        (item) =>
          tasksData && {
            ...item,
            ...item.tasks.map((e) =>
              e.id == id ? (e.time = newValue) : e.time
            ),
          }
      )
    );
  };
  const filterTasks = (name) => {
    if (name == "All days") setTasksFilter(tasksData);
    if (name == "Today")
      setTasksFilter(
        tasksData.map((e) =>
          e.tasks.length > 0
            ? {...e,
                tasks: e.tasks.filter(
                  (f) => parseInt(f.date.split("-")[2]) == day.getDate()
                ),
              }
            : e
        )
      )
      

    if (name == "Tomorrow")
      setTasksFilter(
        tasksData.map((e) =>
          e
            ? {
                ...e,
                tasks: e.tasks.filter((f) =>
                  parseInt(f.date.split("-")[1]) == day.getMonth() + 1
                    ? parseInt(f.date.split("-")[2]) > day.getDate() &&
                      parseInt(f.date.split("-")[2]) <= day.getDate() + 1
                    : day.getDate() +
                        parseInt(f.date.split("-")[2]) +
                        (daysInMonth(day.getMonth() + 1, day.getFullYear()) -
                          day.getDate()) <=
                      day.getDate() + 1
                ),
              }
            : e
        )
      );
    if (name == "Next 7 days")
      setTasksFilter(
        tasksData.map((e) =>
          e
            ? {
                ...e,
                tasks: e.tasks.filter((f) =>
                  parseInt(f.date.split("-")[1]) == day.getMonth() + 1
                    ? parseInt(f.date.split("-")[2]) <= day.getDate() + 7
                    : day.getDate() +
                        parseInt(f.date.split("-")[2]) +
                        (daysInMonth(day.getMonth() + 1, day.getFullYear()) -
                          day.getDate()) <=
                      day.getDate() + 7
                ),
              }
            : e
        )
      );
  };

  // console.log(tasksData);
  React.useEffect(() => {
    setTasksFilter(tasksData);
  }, [tasksData]);
  const isModal = (isTheme, isTask) => {
    if (isTheme) {
      return (
        <ModalWindTheme
          idTheme={id}
          isModalTheme={isModalTheme}
          setIsModalTheme={setIsModalTheme}
          addNewTheme={addNewTheme}
        />
      );
    }
    if (isTask) {
      return (
        <ModalWindTask
          idTheme={id}
          isModalTheme={isModalTheme}
          setIsModalTheme={setIsModalTheme}
          isModalTask={isModalTask}
          setIsModalTask={setIsModalTask}
          taskData={tasksData}
          addNewTheme={addNewTheme}
          addNewTask={addNewTask}
        />
      );
    }
  };

  console.log(tasksFilter);
  return (
    <div className={cl.main_wrap}>
      {isModal(isModalTheme, isModalTask)}
      <SideBar
        filterTasks={filterTasks}
        tasksFilter={tasksFilter}
        isModal={isModalTheme}
        setIsModal={setIsModalTheme}
        isBurger={isBurger}
        setId={setId}
        taskData={tasksData}
        addNewTitle={addNewTheme}
        removeTheme={removeTheme}
        editTheme={editTheme}
      />
      <Container wd={80}>
        {tasksData.length > 0 ? (
          <Task
            removeTask={removeTask}
            setIsModalTask={setIsModalTask}
            tasksDataFilter={tasksFilter}
            editTaskTitle={editTaskTitle}
            editTaskDesc={editTaskDesc}
            editTaskDate={editTaskDate}
            editTaskTime={editTaskTime}
            editTaskIsDone={editTaskIsDone}
            setId={setId}
            id={id}
            editTheme={editTheme}
            removeTheme={removeTheme}
          />
        ) : (
          <NothingPage />
        )}
      </Container>
    </div>
  );
}

export default Main;
