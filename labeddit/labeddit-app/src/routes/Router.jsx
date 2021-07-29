import React from 'react'
import {LoginPage} from '../pages/login/LoginPage'
import { Feed } from '../pages/feed/Feed'
import {Cadastrar} from '../pages/cadastrar/Cadastrar'
import { Post } from '../pages/post/Post'
import {ErrorPage} from '../pages/error/ErrorPage'
import { CadastradoPage } from '../pages/cadastrado/CadastradoPage'
import {BrowserRouter, Route, Switch} from "react-router-dom"

export const Router = () => {
    return (
    <BrowserRouter>
    <Switch>
        <Route exact path='/login'>
            <LoginPage/>
        </Route>
        <Route exact path='/cadastrar'>
            <Cadastrar/>
        </Route>
        <Route exact path='/cadastrado'>
            <CadastradoPage/>
        </Route>
        <Route exact path='/'>
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