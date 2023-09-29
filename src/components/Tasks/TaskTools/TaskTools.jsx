import React from 'react'
import cl from "./taskTools.module.scss";
import {BsPencil, BsPencilSquare, BsTrash,  BsThreeDots} from "react-icons/bs";

function TaskItemTools({removeTask, setEditModeTitle,setEditModeDescription, id}) {
	const [activeTolls, setActiveTolls] = React.useState(false);
  return (
	<div
	className={cl.tools}
	onMouseEnter={() => setActiveTolls(true)}
	onMouseLeave={() => setActiveTolls(false)}>
	<BsThreeDots className={cl.dot_icon} />
	<div className={`${cl.tools_wind} ${activeTolls && cl.wind_active}`}>
	  <div className={cl.tools_item} onClick={() => setEditModeTitle(true)}>
		 <BsPencilSquare className={cl.option_icon} />
		 <p>Title</p>
	  </div>
	  <div className={cl.tools_item} onClick={() => setEditModeDescription(true)}>
		 <BsPencil className={cl.option_icon} />
		 <p>Description</p>
	  </div>
	  <div className={cl.tools_item} onClick={() => removeTask(id)}>
		 <BsTrash className={cl.option_icon} />
		 <p>Remove</p>
	  </div>
	</div>
 </div>

  )
}

export default TaskItemTools