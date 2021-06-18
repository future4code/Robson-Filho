
import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
`

export default class TelaCadastrado extends React.Component {
    state = { 
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "robson-molina"
        }
    })
    .then((res) => {
        this.setState({usuarios: res.data})
    })
    .catch((err) => {
        alert("Ocorreu um erro, por favor tente novamente!")
    })
}
   
    render() {
        console.log(this.state.usuarios)
        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario>{user.name}</CardUsuario>
        })

        return (
            <div>
                <h1>oi</h1>
                {CardUsuario}   
                {listaUsuarios}             
                <button onClick={this.props.irParaCadastro}>Cadastrar aqui!</button>
                
            </div>
        )
    }}