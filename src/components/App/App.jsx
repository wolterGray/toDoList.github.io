import React, {useEffect} from "react";
import cl from "./App.module.scss";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Task from "../Tasks/Task";

function App() {
  const [isBurger, setIsBurger] = React.useState(true);

  const [tasksData, setTasksData] = React.useState([]);

  console.log(tasksData);
  return (
    <div className={cl.App}>
      <Header
        tasksData={tasksData}
        isBurger={isBurger}
        setIsBurger={setIsBurger}
      />
      <Main
        tasksData={tasksData}
        setTasksData={setTasksData}
        isBurger={isBurger}
      />
    </div>
  );
}

export default App;
