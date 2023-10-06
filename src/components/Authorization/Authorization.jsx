import React from "react";
import cl from "./authorization.module.scss";
import CheckBox from "../UI/customCheckBox/CheckBox";
import LineBG from "../LineBG/LineBG";
import Logo from "../Logo/Logo";

function Authorization() {
  return (
    <div className={cl.wrapper}>
      <div className={cl.logo}>
        <Logo fz={20} fzLogo={30} />
      </div>
      <LineBG />
      <div className={cl.form}>
        <h3 className={cl.title}>Login</h3>
        <div className={cl.input_wrapper}>
          <div className={cl.login}>
            <input
              autoFocus
              type="text"
              required
              className={cl.input}
              placeholder="E-mail"
            />
          </div>
          <div className={cl.password}>
            <input
              required
              type="password"
              className={cl.input}
              placeholder="Password"
            />
          </div>
          <div className={cl.checkbox}>
            <label className={cl.checkbox}>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
        </div>
        <button className={cl.button}>Login</button>
      </div>
    </div>
  );
}

export default Authorization;
