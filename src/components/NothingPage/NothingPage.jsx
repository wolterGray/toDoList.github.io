import React, {Children} from "react";
import cl from "./nothingPage.module.scss";

function NothingPage({children}) {
  return (
    <div className={cl.nothing}>
      <p>{children}</p>
    </div>
  );
}

export default NothingPage;
