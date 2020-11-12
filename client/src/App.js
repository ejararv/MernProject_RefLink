import React from 'react'
import 'materialize-css'

import { useRoutes } from './routes';
import {BrowserRouter as Router} from 'react-router-dom'
import { useLogin } from './hooks/login.hook';


function App() {

  const {token,login,logout,userId} = useLogin()
  const routes = useRoutes(false)


  return (
    <Router>
      {routes}
    </Router>
  );
}

export default App;
