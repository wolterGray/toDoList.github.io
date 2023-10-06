import React, {useEffect} from "react";
import cl from "./sideBarList.module.scss";
import ListName from "./ListName/ListName";
import ListContentItem from "./ListContentItem/ListContentItem";
import cn from "classnames";
import {BsListCheck} from "react-icons/bs";
import axios from "axios";
import { API_TODO_URL } from "../../../network/urlConst";

function SideBarList({
  taskData,
  tasksDataCopy,
  setTasksDataCopy,
  selectedListItem,
  setSelectedListItem,
  getTasks,
}) {
  const [isListOpen, setIsListOpen] = React.useState(true);
  const selectList = (name) => {
    const filterUrl = (params) => {
      return API_TODO_URL + `?theme=${params}`;
    };
    axios.get(filterUrl(name)).then((res) => setTasksDataCopy(res.data));

    setSelectedListItem(name);
  };
  const selectAllList = () => {
    getTasks();
    setSelectedListItem("All tasks");
  };
  const updateCount = () => {
    const numCount = taskData.map((e) => e.tasks.length);
    if (numCount.length > 0) {
      return (
        numCount.reduce((a, b) => a + b) > 0 && numCount.reduce((a, b) => a + b)
      );
    }
  };
  return (
    <ListName
      name={"Lists"}
      icon={<BsListCheck />}
      isListOpen={isListOpen}
      setIsListOpen={setIsListOpen}>
      { taskData.length > 0 && (
        <>
          <div
            className={cn(cl.allTasks, isListOpen && cl.allTasksVisible)}
            onClick={() => selectAllList()}>
            <p
              className={
                selectedListItem == "All tasks" ? cl.allActive : cl.all
              }>
              All tasks
            </p>
            <p className={cl.countAllTask}>{updateCount()}</p>
          </div>
          {taskData &&
            taskData.map((task) => (
              <ListContentItem
                selectedListItem={selectedListItem}
                key={task.id}
                onClick={selectList}
                count={task.tasks.length}
                isListOpen={isListOpen}
                id={task.id}
                name={task.theme}
              />
            ))}
        </>
      )}
    </ListName>
  );
}

export default SideBarList;
