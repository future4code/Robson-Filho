import axios from "axios"
import {BASE_URL} from "../constants/urls"
import { useHistory } from "react-router"
import { goToFeed } from "../routes/cordinator"



export const login = (body, history) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        goToFeed(history)
    })
    .catch((err) => {
        console.log(err)
    })
}