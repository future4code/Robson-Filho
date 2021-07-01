import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { object } from "prop-types";

export const TelaInicio = () => {
  const [profile, setProfile] = useState("");
  const [people, setPeople] = useState({})

  const [newLoad, setNewLoad] = useState(1)

  const getProfile = () => {
    axios
    .get(
      `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${profile}/person`
    )
    .then((res) => {
      setPeople(res.data.profile);
    })
    .catch((err) => {
      console.log("Por gentileza, tentar novamente!");
    });
  }

  useEffect(() => {
 
    getProfile()
  }, [newLoad]);

  const like = (event) => {
    setProfile(event.target.value);
  };

  const deslike = () => {
    getProfile()
    setNewLoad(newLoad +1)
    console.log(newLoad)
    console.log(people)
  };

  return (
    <div>
      <h1>Eu tenho: {people.age}</h1>
      <h1>eu sou: {people.name}</h1>
      <img src={people.photo}></img>
      <h1>INICIO</h1>
      <button onClick={like}>Like</button>
      <button onClick={() => deslike()}>deslike</button>
      {/* <p>eu sou: {profile.bio}</p> */}
    </div>
  );
};
