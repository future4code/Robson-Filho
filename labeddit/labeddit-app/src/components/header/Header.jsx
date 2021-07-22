import React from 'react' 
import { useHistory } from 'react-router-dom'
import { HeaderStyled, LogoLabeddit, ButtonLogin } from './Styled'
import { BodyStyled } from './Styled'


export const Header = () => {
   const history = useHistory()
   const goToLogin = () => {
      history.push('/')
   }
   
   return(

    <HeaderStyled>
       <LogoLabeddit src='https://tecnomotor.com.br/novosite/images/contato/linkedin-icon.png'/>
       <ButtonLogin onClick={goToLogin}>Login</ButtonLogin>
    </HeaderStyled>

    )}