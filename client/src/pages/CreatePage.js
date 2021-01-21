import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const { request } = useHttp()
  const [link, setLink] = useState('')

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const pressHandler = async event => {
    if (event.key === 'Enter') {
      try {
        const data = await request('/api/link/generate', 'POST', { from: link }, {
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/detail/${data.link._id}`)
      } catch (e) { }
    }
  }

  const createHandler = async event => {
    try {
      const data = await request('/api/link/generate', 'POST', { from: link }, {
        Authorization: `Bearer ${auth.token}`
      })
      history.push(`/detail/${data.link._id}`)
    } catch (e) { }
  }

  return (
    <header class="masthead">
      <div class="fon">
      <div class="container">
        <div class="masthead-heading text-uppercase">
          <form>
          <div class="form-group">
            <label htmlFor="link">Wkliej link</label>
            <input
              placeholder="https://przykład.com/"
              id="link"
              type="text"
              class="form-control"
              value={link}
              onChange={e => setLink(e.target.value)}
              onKeyPress={pressHandler} />
          </div>
          <button type="button" class="btn btn-primary btn-block text-uppercase js=scroll-trigger" onClick={createHandler}>Stworzyć skrót</button>
        </form>
        </div></div>
      </div>
    </header>
  )
}