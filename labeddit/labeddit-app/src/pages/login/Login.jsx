import React from 'react'
import { useHistory } from 'react-router-dom'
import {ButtonSecondaryColor, TextApp, AppleStoreImage, GooglePlayImage, FormDiv, DivLoginAll, RegisterDiv, InputTextEmail, ImputTextSenha, ButtonRegister, PrimeiraVezLabeddit} from './Styled'
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
        
        <DivLoginAll>
            <h3>⠀⠀⠀⠀⠀</h3>
            <FormDiv>
            <InputTextEmail type='text' placeholder='EMAIL'/>
            <ImputTextSenha type='password' placeholder='SENHA' />
            </FormDiv>
            <ButtonSecondaryColor onClick={goToFeed}>ENTRAR</ButtonSecondaryColor>
            <RegisterDiv>
            <PrimeiraVezLabeddit>Primeira vez no Labennin?</PrimeiraVezLabeddit>
            <ButtonRegister onClick={goToRegister}>CADASTRE-SE</ButtonRegister>
            </RegisterDiv>
        </DivLoginAll>
        <TextApp>Obtenha o Aplicativo.</TextApp>
        <AppleStoreImage src='https://www.instagram.com/static/images/appstore-install-badges/badge_ios_portuguese-brazilian-pt_br.png/68006a2bb372.png'/>
        <GooglePlayImage src='https://www.instagram.com/static/images/appstore-install-badges/badge_android_portuguese_brazilian-pt_BR.png/2f2a0c05b2f3.png'/>
    </div>
    )}