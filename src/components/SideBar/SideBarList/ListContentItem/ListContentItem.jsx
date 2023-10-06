import React from "react";
import cl from "./listContentItem.module.scss";
import cn from "classnames";

function ListContentItem({
  icon,
  name,
  isListOpen,
  count,
  onClick,
  selectedListItem,
  setSelectedListItem
}) {
  return (
    <div
      className={cn(cl.item, isListOpen && cl.item_visible)}
      onClick={() => {
        onClick(name)
        setSelectedListItem && setSelectedListItem(name)
        }}>
      {icon}
      <h5
        className={cn(
          cl.item_text,
          selectedListItem == name && cl.item_selected
        )}>
        {name}
      </h5>
      {count ? (
        <p className={cl.item_count}>{count}</p>
      ) : (
        <p className={cl.item_count}></p>
      )}
    </div>
  );
}

export default ListContentItem;
