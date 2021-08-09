import React from "react";
import { useHistory } from "react-router";


export const LoginPage = () => {

  const history = useHistory()

  const BackToList = () => {
    history.push("list")
  }
  
  return (
    <div>
      <h1>Login</h1>
      <button>Send</button>
      <button onClick={BackToList}>Voltar</button>
    </div>
  );
};
