import React from 'react'
import { useHistory } from 'react-router'

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
        <p>POST</p>
        <button onClick={goToFeed}>FEED</button>
        <button onClick={goToLogin}>LOGOUT</button>
    </div>
    )} 