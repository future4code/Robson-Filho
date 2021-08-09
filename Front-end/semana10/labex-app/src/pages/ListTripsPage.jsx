import React from "react";
import { useHistory } from "react-router-dom";

export const ListTripsPage = () => {
  const history = useHistory()
  const Subscribe = () => {
    history.push("/subscribe")
  }

  const backToHome = () => {
    history.push("/")
  }
  
  

  return (
    <div>
      <h1>ListTrips</h1>
      <button onClick={Subscribe}>Subscribe</button>
      <button onClick={backToHome}>Voltar</button>
    </div>
  );
};
