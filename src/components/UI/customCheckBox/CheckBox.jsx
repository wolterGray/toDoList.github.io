import React from "react";
import cl from "./checkBox.module.scss";
import {BsCheck, BsCircleFill} from "react-icons/bs";

function CheckBox({
  name,
  size,
  clr,
  borderColor = clr,
  markColor = clr,
  borderRadius,
  value = false,
}) {
  const [checkBox, setCheckBox] = React.useState(value);
  const[mark, setMark] = React.useState(false)

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
    <div className={`${cl.wrapper} ${checkBox&&cl.active_through}`} onClick={() => setCheckBox(!checkBox)}>
      <div className={`${cl.border} ${mark && cl.border_mark}`} style={stylesList.box}>
        {mark ? <BsCheck
          className={`${cl.mark}  ${checkBox && cl.visible}`}
          style={stylesList.mark}
        /> : <BsCircleFill className={`${cl.dot}  ${checkBox && cl.visible}`}/>}
         
      </div>
      {name && <p style={stylesList.name}>{name}</p>}
    </div>
  );
}

export default CheckBox;
