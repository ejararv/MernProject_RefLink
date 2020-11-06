import {useState} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState (false)

    const [eror, setEror] = useState (false)

    const request  = () => {

    }
    return { loading, request, eror }
}