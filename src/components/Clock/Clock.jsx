import React from 'react'
import cl from './clock.module.scss'
import moment from "moment";
import "moment/dist/locale/uk";

function Clock() {
	const [clock, setClock] = React.useState(moment().format("LTS"));

	React.useEffect(() => {
	  const interval = setInterval(() => setClock(moment().format("LTS")), 1000);
	  return () => clearInterval(interval);
	}, []);
 
  return (
	<div className={cl.clock}>{clock}</div>
  )
}

export default Clock