import React from 'react'
import { useHistory } from 'react-router-dom'

export const Feed = () => {

    const history = useHistory()
    const goToLogin = () => {
        history.push('/')
    }
    const goToFeed = () => {
        history.push('/post')
    }
    
    return(
    <div>
        <p>FEED</p>
        <button onClick={goToFeed}>POST</button>
        <button onClick={goToLogin}>lOGOUT</button>
    </div>
    )}