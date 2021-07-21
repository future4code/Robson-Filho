import React from 'react'
import { useHistory } from 'react-router-dom'

export const Cadastrar = () => {
    
    const history = useHistory()
    const goToRegistred = () => {
        history.push('/cadastrado')
    }

    return (
    <div>
        <p>CADASTRAR</p>
        <button onClick={goToRegistred}>CADASTRAR</button>
    </div>
    )}