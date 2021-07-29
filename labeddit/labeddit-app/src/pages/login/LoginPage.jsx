import React from 'react'
import { useHistory } from 'react-router-dom'
import {ButtonSecondaryColor, TextApp, AppleStoreImage, GooglePlayImage, FormDiv, DivLoginAll, RegisterDiv, InputTextEmail, ImputTextSenha, ButtonRegister, PrimeiraVezLabeddit} from './Styled'
import { Header } from '../../components/header/Header'
import { useForm } from '../../hooks/useForm'
import {login} from "../../services/user"
              


export const LoginPage = () => {
    // useUnProtectedPage()
    const history = useHistory()
    const {form, onChange} = useForm({email:"", password:""})

    const handleSubmit = (event) => {
        event.preventDefault()
        login(form, history)
    }

    return (
    <div>
        <Header/>
        
        <DivLoginAll>
            <h3>⠀⠀⠀⠀⠀</h3>

            <FormDiv onSubmit={handleSubmit}>

            <InputTextEmail  
            placeholder='EMAIL'
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}/>

            <ImputTextSenha  
            placeholder='SENHA'
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}/>

            </FormDiv>
            
            <ButtonSecondaryColor>ENTRAR</ButtonSecondaryColor>
            <RegisterDiv>
            <PrimeiraVezLabeddit>Primeira vez no Labennin?</PrimeiraVezLabeddit>
            <ButtonRegister onSubmit={handleSubmit}>CADASTRE-SE</ButtonRegister>
            </RegisterDiv>
        </DivLoginAll>
        <TextApp>Obtenha o Aplicativo.</TextApp>
        <AppleStoreImage src='https://www.instagram.com/static/images/appstore-install-badges/badge_ios_portuguese-brazilian-pt_br.png/68006a2bb372.png'/>
        <GooglePlayImage src='https://www.instagram.com/static/images/appstore-install-badges/badge_android_portuguese_brazilian-pt_BR.png/2f2a0c05b2f3.png'/>
    </div>
    )}