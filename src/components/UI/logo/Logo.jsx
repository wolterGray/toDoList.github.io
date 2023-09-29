import React from 'react'
import cl from './logo.module.scss'

function Logo({fz, cl ='#fff', posX='center', fw, mr,mrB, name}) {
	const stylesLogo = {
		fontSize: fz,
		color: cl,
		justifySelf: posX,
		fontWeight:fw,
		margin:mr,
		marginBottom:mrB
	}
  return (
	 <div style={stylesLogo}>{name}</div>
  )
}

export default Logo