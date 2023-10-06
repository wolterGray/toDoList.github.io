import React from "react";
import cl from "./listName.module.scss";
import {BsChevronUp} from "react-icons/bs";

function ListName({icon, name, children, isListOpen, setIsListOpen, onClick}) {
  return (
    <div className={cl.list_wrapper}>
      <div className={cl.listName} onClick={() => setIsListOpen(!isListOpen)}>
        {icon}
        <div className={cl.nameFlex}>
          <p>{name}</p>
         {children && <BsChevronUp
            className={`${cl.arrow_icon} ${isListOpen && cl.arrow_icon_rotate}`}
          />}
        </div>
      </div>
      <div className={cl.list_content} onClick={onClick}>
        {children}
      </div>
    </div>
  );
}

export default ListName;
