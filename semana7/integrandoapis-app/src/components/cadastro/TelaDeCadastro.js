import React from "react"
import styled from "styled-components"
import axios from "axios"

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    lidarComNome = (event) => {
        this.setState({nome: event.target.value})
    }

    lidarComEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url,body, {
            headers: {
                Authorization: "Robson-Silva-Molina"
            }
        })
        .then((res) => {
            alert("usuario cadastrado com sucesso!")
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        return (
            <div>
                <h2>Cadastre aqui!</h2>
                <button onClick={this.props.irParaLista}>Ir para Lista</button>
                <input placeholder={"Nome"} value={this.state.nome} onChange={this.lidarComNome} ></input>
                <input placeholder={"E-mail"} value={this.state.email} onChange={this.lidarComEmail}></input>
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
} 