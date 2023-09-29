import React  from "react";
import cl from "./navbar.module.scss";

export function NavList(props) {
  return <a className={cl.menu_item}>{props.children}</a>;
}
export function NavBar({
  space = 20,
  fz = 20,
  clr = "white",
  posX = "end",
  children,
}) {
  const stylesNavbar = {
    gap: space,
    fontSize: fz,
    color: clr,
    justifySelf: posX,
  };

  return (
    <nav style={stylesNavbar} className={cl.nav}>
      {children}
    </nav>
  );
}
