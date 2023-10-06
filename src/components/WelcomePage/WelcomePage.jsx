import React from "react";
import cl from "./welcomePage.module.scss";
import Logo from "../Logo/Logo";
import LineBG from "../LineBG/LineBG";

function WelcomePage() {
  return (
    <>
      <LineBG/>
      <div className={cl.logoWrap}>
        <Logo fz={20} fzLogo={30}/>
      </div>
      <div className={cl.wrapper}>
        <div className={cl.logo}></div>
        <h1 className={cl.title}>Hello!</h1>
        <h4 className={cl.subtitle}>
          Welcome to the best task list in the world!
        </h4>
        <button className={cl.button}>Let`s start</button>
      </div>
    </>
  );
}

export default WelcomePage;
