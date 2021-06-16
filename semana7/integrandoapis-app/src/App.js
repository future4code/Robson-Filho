import React from "react";
import axios from "axios";
import styled from "styled-components";
import { render } from "@testing-library/react";
import TelaCadastro from "./components/cadastro/TelaCadastro"
import TelaCadastrado from "./components/cadastrados/TelaCadastrado"

 export default class app extends React.Component {
  state = {
    TelaAtual: "batata"
  }

  escolheTela = () => {
    switch (this.state.TelaAtual){
      case "cadastro": 
      return <TelaCadastro/>
      case "lista":
      return <TelaCadastrado/>
      default:
        return <div>Error! página não encontrada :C</div>
      
    }
  }

  render(){
    return (
      <div>
        
        {this.escolheTela()}
      </div>
    )
  }
}
