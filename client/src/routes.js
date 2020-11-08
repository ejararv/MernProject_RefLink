import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { UserPage } from './pages/UserPage'
import { RegisrationPage } from './pages/RegistrationPage'

export const useRoutes = isAuthenticated => {

    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>

                <Route path="/user/:id" >
                    <UserPage />
                </Route>
                <Redirect to="/create" />
                <CreatePage/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            
            

            <Route path="/registration" exact>
                    <RegisrationPage />
                </Route>
            <Redirect to="/" />
        </Switch>
    )
}