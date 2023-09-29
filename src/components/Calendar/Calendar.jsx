import React from "react";
import SideBarList from "../SideBar/SideBarList/SideBarList";
import {BsCalendarCheck} from "react-icons/bs";

function Calendar() {
  return (
    <SideBarList
      name={"Calendar"}
      icon={<BsCalendarCheck style={{fontSize: 20}} />}>
      <p>Upcomming</p>
    </SideBarList>
  );
}

export default Calendar;
