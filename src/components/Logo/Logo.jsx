import React from "react";
import cl from "./logo.module.scss";
import { GiMoebiusTriangle } from "react-icons/gi";

function Logo({fz, fzLogo}) {
  return (
    <a href="#!" className={cl.logo} >
      <GiMoebiusTriangle style={{fontSize:`${fzLogo}px`}} className={cl.logo_icon} />
      <p style={{fontSize:`${fz}px`}} className={cl.logo_text} href="!#">
        myTODO
      </p>
    </a>
  );
}

export default Logo;
