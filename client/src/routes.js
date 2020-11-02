 import React from 'react'
 import {Route, Switch, Redirect} from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { LinksPage } from './pages/LinksPage'
import {CreatePage} from './pages/CreatePage'
import { UserPage } from './pages/UserPage'
 
 export const useRoutes = isAuthenticated => {

    if (isAuthenticated) {
        return (
        <Switch>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>

                <Route path="/create" exact>
                    <CreatePage />
                </Route>

                <Route path="/user/:id" >
                    <UserPage />
                </Route>
                <Redirect to="/create" />
                </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
 }