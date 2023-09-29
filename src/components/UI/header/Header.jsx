import React from "react";
import cl from "./header.module.scss";
import {NavList, NavBar} from "../navBar/NavBar";
import ToolBar from "../toolBar/ToolBar";
import Logo from "../logo/Logo";
import GridContainer from "../gridContainer/GridContainer";
import Container from "../container/Container";

function Header({hg = 80, bg = "red", space = 30, mb = 0, lName}) {
  const stylesHeader = {
    backgroundColor: bg,
    justifyContent: "space-between",
    gap: space,
    height: hg,
    marginBottom: mb,
  };
  return (
    <header style={stylesHeader} className={cl.header}>
      <Container sz={80}>
        <GridContainer posX="center">
          <Logo name={lName} posX="start" fz={25} cl="#fff"/>
          <NavBar posX="end" space={50} fz={20}>
            <NavList>Home</NavList>
            <NavList>Menu</NavList>
            <NavList>Contact</NavList>
          </NavBar>
        </GridContainer>
      </Container>
    </header>
  );
}

export default Header;
