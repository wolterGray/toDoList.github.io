import React from "react";
import ListName from "../SideBarList/ListName/ListName";
import {
  BsCalendar2Check,
  BsCalendar2Date,
  BsFillSunriseFill,
  BsClockHistory,
} from "react-icons/bs";
import ListContentItem from "../SideBarList/ListContentItem/ListContentItem";
import cl from "../SideBarList/ListContentItem/listContentItem.module.scss";

function StaticBarList({filterTasks, tasksFilter}) {
  const [isListOpen, setIsListOpen] = React.useState(true);
  const staticListItem = [
    {
      icon: <BsCalendar2Date className={cl.icon_list} />,
      name: "All days",
    },
    {
      icon: <BsCalendar2Date className={cl.icon_list} />,
      name: "Today",
      
    },
    {
      icon: <BsFillSunriseFill className={cl.icon_list} />,
      name: "Tomorrow",
      
    },
    {
      icon: <BsClockHistory className={cl.icon_list} />,
      name: "Next 7 days",
      
    }
  ];

  return (
    <ListName
      name={"Calendar"}
      icon={<BsCalendar2Check />}
      isListOpen={isListOpen}
      setIsListOpen={setIsListOpen}>
      {staticListItem.map((item, index) => {
        return (
          <ListContentItem
            onClick={() => filterTasks(item.name)}
            count={0}
            key={index}
            icon={item.icon}
            name={item.name}
            isListOpen={isListOpen}
            setIsListOpen={setIsListOpen}
          />
        );
      })}
    </ListName>
  );
}

export default StaticBarList;
