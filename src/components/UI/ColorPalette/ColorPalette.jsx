import React from "react";
import cl from "./colorPalette.module.scss";
import cn from "classnames";

function ColorPalette({
  isTollsColor,
  id,
  setIsTollsColor,
  editTaskColor,
  setIsTolls,
}) {
  const colorsData = [
    {"#575656": "#2828285e"}, //gray
    {"#9f0101": "rgba(139, 0, 0, 0.4)"}, //red
    {"rgba(255, 238, 0, 0.994)": "rgba(255, 238, 0, 0.4)"}, //yellow
    {"#00b5d1c7": "rgb(0, 146, 162, 0.4)"}, //blue
    {"#6d006dbc": "rgb(73, 0, 99, 0.4)"}, //purple
    {green: "rgba(17, 120, 1, 0.4)"}, //green
    ,
  ];

  return (
    <div
      className={cn(cl.toolsColor, isTollsColor && cl.toolsColorActive)}
      onMouseEnter={() => {
        setIsTollsColor(true);
        setIsTolls(true);
      }}
      onMouseLeave={() => {
        setIsTollsColor(false);
        setIsTolls(false);
      }}>
      {colorsData.map((color, index) => {
        return (
          <div
            key={index}
            style={{background: `${Object.keys(color)}`}}
            className={cl.colorItem}
            onClick={() => editTaskColor(id, Object.values(color))}></div>
        );
      })}
    </div>
  );
}

export default ColorPalette;
