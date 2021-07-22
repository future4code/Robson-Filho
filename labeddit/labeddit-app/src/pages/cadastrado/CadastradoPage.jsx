import React from 'react'
import { useHistory } from 'react-router'
import { Header } from '../../components/header/Header'

export const CadastradoPage = () => {
    const history = useHistory()
    const goToLogin = () => {
        history.push('/')
    }
    
    return(
    <div>
        <Header/>
        <h1>VOCÊ FOI CADASTRADO COM SUCESSO</h1>
        <h2>CLIQUE AQUI PARA FAZER LOGIN</h2>
        <button onClick={goToLogin}>LOGAR</button>
    </div>
    )}