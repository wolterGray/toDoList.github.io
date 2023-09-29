import React from "react";
import cl from "./sideBarList.module.scss";
import ListName from "./ListName/ListName";
import ListContentItem from "./ListContentItem/ListContentItem";
import {BsListCheck} from "react-icons/bs";

function SideBarList({taskData, setId, removeTheme, editTheme}) {
  const [isListOpen, setIsListOpen] = React.useState(true);
  

  return (
    <ListName name={"Lists"} icon={<BsListCheck />} isListOpen={isListOpen} setIsListOpen={setIsListOpen}>
        {taskData &&
          taskData.map((theme) => (
            <ListContentItem
              key={theme.id}
              count={theme.tasks.length}
              isListOpen={isListOpen}
              setId={setId}
              id={theme.id}
              name={theme.theme}
              removeTheme={removeTheme}
              editTheme={editTheme}
            />
          ))}
    </ListName>
  );
}

export default SideBarList;
