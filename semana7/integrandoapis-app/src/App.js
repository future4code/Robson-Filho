import React from "react";
import axios from "axios";
import styled from "styled-components";
import { render } from "@testing-library/react";
import TelaLista from "./components/cadastro/TelaDeCadastro"
import TelaDeCadastro from "./components/lista/TelaDeLista"

 export default class app extends React.Component {
  state = {
    TelaAtual: "cadastrar"
  }

  escolheTela = () => {
    switch (this.state.TelaAtual){
      case "lista": 
      return <TelaDeCadastro irParaCadastro={this.irParaCadastro}/>
      case "cadastrar":
      return <TelaLista irParaLista={this.irParaLista}/>
      default:
        return <div>Error! página não encontrada</div>
      
    }
  }

  irParaCadastro = () => {
    this.setState({TelaAtual: "cadastrar"})
  } 

  irParaLista = () => {
    this.setState({TelaAtual: "lista"})
  }

  render(){
    return (
      <div>
        
        {this.escolheTela()}
      </div>
    )
  }
}
