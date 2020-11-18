import {createContext} from 'react'


function clear() {}

export const AuthContext = createContext({
    token: null,
    userId:null,
    login: clear,
    logout: clear,
    isAuthenticated: false
}) 