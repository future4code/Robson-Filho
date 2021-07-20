import React from 'react'
import {Login} from '../pages/login/Login'
import { Feed } from '../pages/feed/Feed'
import {Cadastrar} from '../pages/cadastrar/Cadastrar'
import { Post } from '../pages/post/Post'
import {ErrorPage} from '../pages/error/ErrorPage'
import {BrowserRouter, Route, Switch} from "react-router-dom"

export const Router = () => {
    return (
    <BrowserRouter>
    <Switch>
        <Route exact path='/'>
            <Login/>
        </Route>
        <Route exact path='/cadastrar'>
            <Cadastrar/>
        </Route>
        <Route exact path='/feed'>
            <Feed/>
        </Route>
        <Route exact path='/post'>
            <Post/>
        </Route>
        <Route>
            <ErrorPage/>
        </Route>
    </Switch>
    </BrowserRouter>
    )}