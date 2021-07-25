import React from 'react'
import { useHistory } from 'react-router'
import { HeaderOption } from '../../components/header-com-opcoes/HeaderOptions'
import {AdicionarPost, ImagemAdicionar} from './Styled'

export const Post= () => {
    
    const history = useHistory()
    const goToLogin = () => {
        history.push('/')
    }
    const goToFeed = () => {
        history.push('/feed')
    }
    
    return(
    <div>
        <HeaderOption/>
        <p>POST</p>
        <AdicionarPost href="/"><ImagemAdicionar src="https://cdn.icon-icons.com/icons2/1129/PNG/128/addafolderinterfaceblacksymbolwithplussign_79731.png" alt="Imagem de botão para adicionar post" /></AdicionarPost>
    </div>
    )} 