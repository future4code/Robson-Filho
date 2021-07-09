import React, { useState, useEffect, Component } from "react";
import axios from "axios";
// import { object } from "prop-types";
import styled from "styled-components";

const CardImg = styled.img `
width: 100px;
`

export const TelaInicio = () => {

  // Like
  
  const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person'

  const [like, setLike] = useState(false)

  useEffect(() => {
    axios.post(url)
    .then((res) => {
      setLike(true)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

// Deslike

  const [profile, setProfile] = useState({});
  const [people, setPeople] = useState({})
  const [newLoad, setNewLoad] = useState(0)


  const getProfiles = () => {
    axios
    .get(
      `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Robson/person`
    )
    .then((res) => {
      setPeople(res.data.profile);
    })
    .catch((err) => {
      console.log("Por gentileza, tentar novamente!");
    });
  }

  useEffect(() => {
    getProfiles()
  }, [newLoad]);

  // const like = (event) => {
  //   setProfile(event.target.value);
  // };

  const deslike = () => {
    setNewLoad(newLoad +1)
  };

  return (
    <div>
      <h1>Eu tenho: {people.age}</h1>
      <h1>eu sou: {people.name}</h1>
      <CardImg src={people.photo} alt='pessoa'/>
      <h1>INICIO</h1>
      <button onClick={setLike}>Like</button>
      <button onClick={deslike}>deslike</button>
      {/* <p>eu sou: {profile.bio}</p> */}
    </div>
  );
};
