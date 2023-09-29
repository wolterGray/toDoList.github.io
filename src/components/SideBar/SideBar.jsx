import React from "react";
import cl from "./sideBar.module.scss";
import Button from "../UI/button/Button";

import SideBarList from "./SideBarList/SideBarList";

import Calendar from "../Calendar/Calendar";
import StaticBarList from "./StaticBarList/StaticBarList";

function SideBar({taskData, isModal, setIsModal, isBurger, filterTasks, tasksFilter}) {
  return (
    <div className={`${cl.navBar} ${isBurger && cl.navActive}`}>
      <Button
        onClick={() => setIsModal(!isModal)}
        brd={0}
        pos="relative"
        pdY={15}
        bRad={5}
        fz={20}
        bg="#65798aa0">
        Create
      </Button>
      <SideBarList taskData={taskData} />
      <StaticBarList name={"Calendar"} filterTasks={filterTasks} tasksFilter={tasksFilter}/>
    </div>
  );
}

export default SideBar;
