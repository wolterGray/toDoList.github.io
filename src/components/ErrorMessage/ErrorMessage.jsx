import React from "react";
import cl from "./errorMessage.module.scss";

function ErrorMessage({error}) {
  return (
    <div className={cl.error}>
      <p>{error}</p>
    </div>
  );
}

export default ErrorMessage;
