import React from "react";
import cl from "./checkBox.module.scss";
import {BsCheck, BsCircleFill} from "react-icons/bs";

function CheckBox({
  onClick,
  name,
  size,
  clr,
  markType = false,
  borderColor = clr,
  markColor = clr,
  borderRadius,
  value
}) {
  const[mark, setMark] = React.useState(markType)
  const [isDone, setIsDone] = React.useState(false);
  const stylesList = {
    box: {
      width: size / 1.3,
      height: size / 1.3,
      borderColor: borderColor,
      borderRadius,
    },
    mark: {
      fontSize: size,
      color: markColor,
    },
    name:{
      fontSize: size,
      color:clr,
      margin: 0
    }
  };
  return (
    <div className={`${cl.wrapper} ${value&&cl.active_through}`} onClick={onClick}>
      <div className={`${cl.border} ${mark && cl.border_mark}`} style={stylesList.box}>
        {mark ? <BsCheck
          className={`${cl.mark}  ${mark && cl.visible}`}
          style={stylesList.mark}
        /> : <BsCircleFill className={`${cl.dot}  ${value && cl.visible}`}/>}
         
      </div>
      {name && <p style={stylesList.name}>{name}</p>}
    </div>
  );
}

export default CheckBox;
