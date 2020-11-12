import {useCallback} from 'react'

export const useError = () => {

    return useCallback(text => {
        if(window.M && text)
        {
            window.M.toast({html:text})
        }
    })

}