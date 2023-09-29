import React from "react";
import cl from "./nothingPage.module.scss";

function NothingPage() {
  return (
    <div className={cl.nothing}>
      <p>
        There is nothing here yet... Use the left panel to create your first
        topic and add Tasks to it!
      </p>
    </div>
  );
}

export default NothingPage;
