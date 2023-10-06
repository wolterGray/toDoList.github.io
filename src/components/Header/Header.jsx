import React from "react";
import cl from "./header.module.scss";
import cn from "classnames";
import Clock from "../Clock/Clock";
import DownloadCircle from "../UI/downloadCircle/DownloadCircle";
import Logo from "../Logo/Logo";

function Header({isBurger, setIsBurger, tasksData}) {
  return (
    <div className={cl.header}>
      <div className={cl.header_wrapper}>
        <div className={cl.left_content}>
          <div
            className={`${cl.burger_menu} ${isBurger && cl.active}`}
            onClick={() => setIsBurger(!isBurger)}>
            <span></span>
          </div>
         <Logo/>
        </div>
        <div className={cl.right_content}>
          <Clock/>
          <DownloadCircle tasksData={tasksData}/>
          <div className={cl.user}>
            <button className={cn(cl.button, cl.logIn)}>Log in</button>
            <button className={cn(cl.button, cl.singUp)}>Sing up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
