import React, { useContext } from 'react'
import {  useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export const Navbar = () => {
  const history = useHistory()
  
  const auth = useContext(AuthContext)


  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  
   
  return (
    

    <nav class="navbar navbar-expand-lg navbar-shrink" id="mainNav">
      <a class="navbar-brand" href="/">RefLink</a>
      <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        Menu
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav text-uppercase ml-auto">
          
          <li class="nav-item"><a class="nav-link" href="/create">Utwórz link</a></li>
          <li class="nav-item"><a class="nav-link" href="/links">Lista linków</a></li>
          <li class="nav-item"><a class="nav-link" href="/team">Nasz zespół</a></li>
          <li class="nav-item"><a class="nav-link" href="/" onClick={logoutHandler}>Wylogój</a></li>
        </ul>
      </div>
    </nav>
  )}
  
