import React from "react";
import cl from "./sideBar.module.scss";
import Button from "../UI/button/Button";

import SideBarList from "./SideBarList/SideBarList";

import StaticBarList from "./StaticBarList/StaticBarList";

function SideBar({
  taskData,
  tasksDataCopy,
  setTasksDataCopy,
  setIsModal,
  isBurger,
  filterTasks,
  getTasks,
}) {
  const [selectedListItem, setSelectedListItem] = React.useState("All tasks");
  return (
    <div className={`${cl.navBar} ${isBurger && cl.navActive}`}>
      <Button
        onClick={() => setIsModal(true)}
        brd={0}
        pos="relative"
        pdY={15}
        bRad={5}
        fz={20}
        bg="#65798aa0">
        Create
      </Button>
      <SideBarList
        taskData={taskData}
        tasksDataCopy={tasksDataCopy}
        setTasksDataCopy={setTasksDataCopy}
        selectedListItem={selectedListItem}
        setSelectedListItem={setSelectedListItem}
        getTasks={getTasks}
      />
      <StaticBarList
        setSelectedListItem={setSelectedListItem}
        selectedListItem={selectedListItem}
        name={"Calendar"}
        filterTasks={filterTasks}
      />
    </div>
  );
}

export default SideBar;
