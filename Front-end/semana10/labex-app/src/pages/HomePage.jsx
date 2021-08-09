import React from "react";
import { useHistory } from "react-router";

export const HomePage = () => {

  const history = useHistory()

  const goToLogin = () => {
    history.push("/admin")
  }

  const goToTrips = () => {
    history.push("/list")
  }

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={goToLogin}>Pag Admin</button>
      <button onClick={goToTrips}>Ver viagens</button>
    </div>
  );
};
