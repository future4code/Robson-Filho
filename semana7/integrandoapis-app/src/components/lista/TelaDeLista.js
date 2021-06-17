import { render } from "@testing-library/react"
import React from "react"

export default class TelaCadastrado extends React.Component {
    render(){
        return (
            <div>

                <h1>Lista De cadastrados</h1>
                <h1>fulano</h1>
                <h1>fulano</h1>
                
                <button onClick={this.props.irParaCadastro}>Cadastrar aqui!</button>
                
            </div>
        )
    }
}