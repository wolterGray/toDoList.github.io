import React from "react";
import SideBar from "../SideBar/SideBar";
import uuid from "react-uuid";
import cl from "./main.module.scss";
import Container from "../UI/container/Container";
import NothingPage from "../NothingPage/NothingPage";
import ModalWindTheme from "../CreateModalTasksWind/ModalWindTheme";
import ModalWindTask from "../CreateModalTasksWind/ModalWindTask";
import Task from "../Tasks/Task";
import ListName from "../SideBar/SideBarList/ListName/ListName";
import axios from "axios";
import {API_TASKS_EDIT, API_TODO_URL, TASKS} from "../../network/urlConst";

function Main({isBurger, tasksData, setTasksData, getTasks,isPending, setIsPending}) {
  const [tasksDataCopy, setTasksDataCopy] = React.useState(null);
  const [isModal, setIsModal] = React.useState(null);
  const [clickTheme, setClickTheme] = React.useState("");
  const [id, setId] = React.useState("");
  const day = new Date();

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  const addNewTheme = (title) => {
    setIsPending(true)
    axios
      .post(API_TODO_URL, {
        theme: title,
        color: "#2828285e",
        tasks: [],
      })
      .then(() => getTasks())
      .catch((err) => console.log(err));
  };

  const addNewTask = (id, name, description, date, time) => {
    setIsPending(true)
    axios
      .post(API_TODO_URL + id + "/" + TASKS, {
        id: uuid(),
        name,
        description,
        date,
        time,
        isDone: false,
      })
      .then(() => getTasks());

    // setTasksData(
    //   tasksData.map((task) =>
    //     task.id == id
    //       ? {
    //           ...task,
    //           tasks: [
    //             ...task.tasks,
    //             {
    //               id: uuid(),
    //               name,
    //               description,
    //               date,
    //               time,
    //               isDone: false,
    //             },
    //           ],
    //         }
    //       : task
    //   )
    // );
  };

  const filterTasks = (name) => {
    setClickTheme(name);
    if (name == "All days")
      setTasksDataCopy(
        tasksData
          .map((e) =>
            e ? {...e, tasks: e.tasks.filter((f) => f.isDone == false)} : e
          )
          .filter((e) => e.tasks.length > 0)
      );
    if (name == "Today")
      setTasksDataCopy(
        tasksData
          .map(
            (e) =>
              e && {
                ...e,
                tasks: e.tasks.filter(
                  (f) =>
                    !f.isDone && parseInt(f.date.split("-")[2]) == day.getDate()
                ),
              }
          )
          .filter((i) => i.tasks.length > 0)
      );
    if (name == "Tomorrow")
      setTasksDataCopy(
        tasksData
          .map(
            (e) =>
              e && {
                ...e,
                tasks: e.tasks.filter((f) =>
                  !f.isDone &&
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
          )
          .filter((i) => i.tasks.length > 0)
      );

    if (name == "Next 7 days")
      setTasksDataCopy(
        tasksData
          .map(
            (e) =>
              e && {
                ...e,
                tasks: e.tasks.filter((f) =>
                  !f.isDone &&
                  parseInt(f.date.split("-")[1]) == day.getMonth() + 1
                    ? parseInt(f.date.split("-")[2]) <= day.getDate() + 7
                    : day.getDate() +
                        parseInt(f.date.split("-")[2]) +
                        (daysInMonth(day.getMonth() + 1, day.getFullYear()) -
                          day.getDate()) <=
                      day.getDate() + 7
                ),
              }
          )
          .filter((i) => i.tasks.length > 0)
      );
  };
  
  const isCreateModal = (isModal) => {
    if (isModal) {
      return (
        <ModalWindTheme
          idTheme={id}
          isModal={isModal}
          setIsModal={setIsModal}
          addNewTheme={addNewTheme}
        />
      );
    }
    if (isModal == false) {
      return (
        <ModalWindTask
          idTheme={id}
          addNewTask={addNewTask}
          setIsModal={setIsModal}
        />
      );
    }
  };
  React.useEffect(() => {
    setTasksDataCopy(tasksData);
  }, [tasksData]);
  return (
    <div className={cl.main_wrap}>
      {isCreateModal(isModal)}
      <SideBar
        taskData={tasksData}
        tasksDataCopy={tasksDataCopy}
        setTasksDataCopy={setTasksDataCopy}
        isModal={isModal}
        setIsModal={setIsModal}
        isBurger={isBurger}
        filterTasks={filterTasks}
        getTasks={getTasks}
      />
      <Container wd={80}>
        {tasksDataCopy && tasksDataCopy.length > 0 ? (
          tasksDataCopy.map((task) => (
            <Task
            setIsPending={setIsPending}
              key={task.id}
              id={task.id}
              theme={task.theme}
              color={task.color}
              task={task}
              tasksData={tasksData}
              setTasksData={setTasksData}
              setIsModal={setIsModal}
              setId={setId}
              getTasks={getTasks}
            />
          ))
        ) : tasksData.length > 0 ? (
          <NothingPage>You don't have anything {clickTheme} yet!:)</NothingPage>
        ) : (
          <>
          <NothingPage>
            There's nothing here yet... Use the left panel to create a new task!
          </NothingPage>
          </>
           
          
        )}
      </Container>
    </div>
  );
}

export default Main;
