import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {ButtonSecondaryColor, InputTextEmail} from './Styled'
import { Header } from '../../components/header/Header'

export const Login = () => {
    const history = useHistory()
    const goToRegister = () => {
        history.push('/cadastrar')
    }

    const goToFeed = () => {
        history.push('/feed')
    }
    

    return (
    <div>
        <Header/>
        <InputTextEmail type={Text} placeholder='EMAIL'/>
        <ButtonSecondaryColor onClick={goToFeed}>ENTRAR</ButtonSecondaryColor>
        <button onClick={goToRegister}>CADASTRAR</button>
    </div>
    )}