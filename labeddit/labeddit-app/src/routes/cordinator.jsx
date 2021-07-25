
import {useHistory} from 'react-router-dom' 




export const GoToRegister = () => {
    const history = useHistory()

    history.push('/cadastrar')

}

export const GoToPost = () => {
    const history = useHistory()
    history.push('/feed')
}



// export const goToRegister = (history) => {
//     history.push('/cadastrar')
// }

// export const goToSignup = (history) => {
//     history.push('/')
// }

// export const goToFeed = (history) => {
//     history.push('/feed')
// }

// export const goToPost = (history) => {
//     history.push('/post')
// }