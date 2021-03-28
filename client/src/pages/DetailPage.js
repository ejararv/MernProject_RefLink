import React, {useCallback, useContext, useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {LinkCard} from '../components/LinkCard'
import { useHistory } from "react-router-dom";


export const DetailPage = () => {
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  const [dellink, deleteLinkById] = useState()
  const [link, setLink] = useState(null)
  const linkId = useParams().id
  const history = useHistory()

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setLink(fetched)
    } catch (e) {}
  }, [token, linkId, request])

   const deleteLink = useCallback(async () => {
    try{
        const del = await request(`/api/link/${linkId}`, 'DELETE', null, {
          Authorization:`Bearer ${token}`
        })
        deleteLinkById(del)
        history.push('/links')
       
    }catch(e){}
  }, [token, linkId, request])

  useEffect(() => {
    getLink()
  }, [getLink])

  if (loading) {
    return <Loader />
  }

  return (
    <>
    <body class="bg-light">
        <div class="container">

      { !loading && link && <LinkCard link={link} /> }
      
      <a class="btn btn-primary float-right" href="/links">Powrót do listy</a>

      <a class="btn btn-primary float-right" onClick={deleteLink} >Usun link</a>
      </div>
      </body>
    </>
  )
}