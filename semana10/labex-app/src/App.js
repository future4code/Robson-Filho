import React from "react";
import { AdminHomePage } from "./pages/AdminHomePage";
import { AplicationFormPage } from "./pages/ApplicationFormPage";
import { CreateTripPage } from "./pages/CreateTripPage";
import { HomePage } from "./pages/HomePage";
import { ListTripsPage } from "./pages/ListTripsPage";
import { LoginPage } from "./pages/LoginPage";
import { TripDetailsPage } from "./pages/TripDetailsPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (

    <BrowserRouter>
      <Switch>

      <Route exact path={"/"}>
      <HomePage />
      </Route>

      <Route exact path={"/admin"}>
        <AdminHomePage />
      </Route>

      <Route exact path={"/aplication"}>
        <AplicationFormPage />
      </Route>

      <Route exact path={"/trip"}>
        <CreateTripPage />
      </Route>

      <Route exact path={"/list"}>
      <ListTripsPage />
      </Route>

      <Route exact path={"/subscribe"}>
        <LoginPage />
      </Route>

      <Route exact path={"/details"}>
      <TripDetailsPage />
      </Route>

      <Route>
      <ErrorPage/>
      </Route>

      </Switch>
  </BrowserRouter>
  );
}

export default App;
