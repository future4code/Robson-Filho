import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderOption } from '../../components/header-com-opcoes/HeaderOptions'
import {CardPosts} from '../../components/cardpost/CardPosts'
import { useState, useEffect } from 'react'
import {goToPost} from '../../routes/cordinator'
import axios from 'axios'


// const [posts, setPosts] = useState('')

// useEffect = () => {
//     axios.get('https://labeddit.herokuapp.com/posts')
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     }), []
// }

export const Feed = () => {

    const [post, setPost] = useState('')

    // useEffect = () => {
    //     axios.get(' https://labeddit.herokuapp.com/posts')
    //     .then(res () => {
    //         console.log(res)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     }, [])
    // }

    // const url = 'https://labeddit.herokuapp.com/posts'

    // useEffect(() => {
    //     // Atualiza o titulo do documento usando a API do browser
    //     axios.get(url, Header)
    //     .then((res) => {
    //         console.log(res)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    //   }, []);
   
    
    const history = useHistory()
    const goToFeed = () => {
        history.push('/post')
    }
    
    return(
    <div>
        <HeaderOption/>
        <CardPosts/>
        <p>FEED</p>
        <button onClick={goToPost}>POST</button>
    </div>
    ) }


//     curl --location -g --request GET '{{baseURL}}/posts/6503d483-68ee-4b96-b399-44cbb5e2041b/comments' \
// --header 'Authorization: {{token}}' \
// --data-raw ''