import React from 'react'
import cl from './download.module.scss'

function Download() {
  return (
	 <div className={cl.wrapper}>
		<div className={cl.blurBg}></div>
		<div className={cl.animImg}>
			<img src="/circle.png" alt="circle" />
			<p className={cl.downloadText}>Download...</p>
		</div>
	 </div>
  )
}

export default Download