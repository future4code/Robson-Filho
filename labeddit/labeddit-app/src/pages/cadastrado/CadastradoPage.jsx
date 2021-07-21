import React from 'react'
import { useHistory } from 'react-router'

export const CadastradoPage = () => {
    const history = useHistory()
    const goToLogin = () => {
        history.push('/')
    }
    
    return(
    <div>
        <h1>VOCÊ FOI CADASTRADO COM SUCESSO</h1>
        <h2>CLIQUE AQUI PARA FAZER LOGIN</h2>
        <button onClick={goToLogin}>LOGAR</button>
    </div>
    )}