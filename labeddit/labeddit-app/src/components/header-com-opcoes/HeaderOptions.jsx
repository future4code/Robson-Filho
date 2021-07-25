import React from 'react' 
import { useHistory } from 'react-router-dom'
import { HeaderStyled, LogoLabeddit, ButtonLogin } from './Styled'
import {ButtonFeed, Buttons} from './Styled'

export const HeaderOption = () => {
   const history = useHistory()
   const goToLogin = () => {
      history.push('/')
   }

const goToPosts = () => {
   history.push('/posts')
}
   
   return(

    <HeaderStyled>
       <LogoLabeddit src='https://tecnomotor.com.br/novosite/images/contato/linkedin-icon.png'/>
   <Buttons>
       <ButtonLogin onClick={goToPosts}>Post</ButtonLogin>
       <ButtonFeed onClick={goToLogin}>Feed</ButtonFeed>
       <ButtonLogin onClick={goToLogin}>Logout</ButtonLogin>
   </Buttons>
    </HeaderStyled>

    )}