import React from "react";
import cl from "./listContentItem.module.scss";
import cn from "classnames";

import {BsPencil, BsTrash, BsCheck} from "react-icons/bs";

function ListContentItem({icon, name,  isListOpen,count, onClick}) {
  return (
    <div className={cn(cl.item, isListOpen && cl.item_visible)} onClick={onClick}>
      {icon}
      <h5 className={cl.item_text}>{name}</h5>
      {count ?<p className={cl.item_count}>{count}</p>:<p className={cl.item_count}></p>}
    </div>
  );
}

export default ListContentItem;
