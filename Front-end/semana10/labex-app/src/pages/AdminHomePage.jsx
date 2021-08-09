import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

const HomePage = styled.div `
color: red;
`


export const AdminHomePage = () => {
    const history = useHistory()
    const goBack = () => {
        history.goBack("/")
    }
   return (
   <HomePage>
        <h1>
            Admin Home
        </h1>
        <button onClick={goBack}>Voltar</button>
        <button>Entrar</button>
    </HomePage>
    )
}