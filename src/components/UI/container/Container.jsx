import React from "react";

function Container({wd = 80, hd = 100,color = 25, children, className}) {
  const stylesContainer = {
    width: `${wd}%`,
    height: hd + "%",
    margin: "0 auto",
    position: 'relative',
	  transition: "all .3s ease-in-out",
    
  };

  return <div className={className} style={stylesContainer}>{children}</div>;
}

export default Container;
