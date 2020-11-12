import {useCallback, useState, useEffect} from 'react'

const storageName = 'userData'

export const useLogin = () => {

const [token, setToken] = useState(null)
const [userId, setUserId] = useState(null)

const login = useCallback((jwtToken, id)=> {

    setToken(jwtToken)
    setUserId(id)

    localStorage.setItem(storageName, JSON.stringify({
        userId, token
    })) //апи браузера


},[])
const logout = useCallback(()=> {


    setToken(null)
    setUserId(null)// просто удаляем токен и пользователя
    localStorage.removeItem(storageName)

},[])


useEffect(() => {
     const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token) {
            console.log(data.token , data.userId)
        }
    }, [login])



return { login, logout, token, userId}

}