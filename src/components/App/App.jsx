import React, {useEffect} from "react";
import cl from "./App.module.scss";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Authorization from "../Authorization/Authorization";
import WelcomePage from "../WelcomePage/WelcomePage";
import axios from "axios";
import {API_TODO_URL} from "../../network/urlConst";
import Download from "../Download/Download";

function App() {
 
  const [isPending, setIsPending] = React.useState(false);
  const getTasks = () => {
    setIsPending(true)
    axios
      .get(API_TODO_URL)
      .then((response) => setTasksData(response.data))
      .catch((err) => console.log(err));
      setIsPending(false)
  };
  const [isBurger, setIsBurger] = React.useState(true);
  const [tasksData, setTasksData] = React.useState([]);
  
  React.useEffect(() => {
    getTasks();
  }, []);
 
  return (
    <div className={cl.App}>
      <div className={cl.background}></div>
      {isPending && <Download />}
      <Header
        tasksData={tasksData}
        isBurger={isBurger}
        setIsBurger={setIsBurger}
      />
      <Main
        isPending={isPending}
        setIsPending={setIsPending}
        tasksData={tasksData}
        setTasksData={setTasksData}
        isBurger={isBurger}
        getTasks={getTasks}
      />
      {/* <WelcomePage/> */}
      {/* <Authorization/> */}
    </div>
  );
}

export default App;
