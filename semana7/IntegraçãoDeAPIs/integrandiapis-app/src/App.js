import React from "react"
import axios from "axios"
import styled from "styled-components"
import { react } from "@babel/types"

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const url2 = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers: {
  Authorization: "robson-silva-molina"
  }
}

body

export default class app extends React.Component {

  state = {
    Users: [],
    inputUsers: ""
  }

  componentDidMount() {
    this.pegarPlaylists();
  }

  addUser = () => {
    const body = {
      name: "Pamela",
      email: "Pamelamedeios@hotmail.com",
      }
    }

    axios.post(url2,body,headers)
    .then()
    .catch()
  }

