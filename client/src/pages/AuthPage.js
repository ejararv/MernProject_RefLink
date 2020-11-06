import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  //тутачки и есть сама функция для изменения формы, spread оператором вытягиваем текст из формы
// присваивается значения к полям name в форме [event.target.name]: event.target.value 
  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {}
  }



   const  registerHandler  = async () =>
   {
     try{
      const data = await request('/api/auth/register', 'POST', {...form})
      console.log('Data', data)
     }catch(e) {

     }
   }
  
  

  // return (
  //   <div className="row">
  //     <div className="col s6 offset-s3">
  //       <h1>Referal Link</h1>


  //       <div>
  //   <h1> TEST</h1>
  // </div>
  //       <div className="card blue darken-1">
  //         <div className="card-content white-text">
  //           <span className="card-title">Zaloguj sie</span>





  return (
    <div>
        <div className="row">
            <div class="col s7" style={{
                backgroundImage: "url(" + "https://source.unsplash.com/random" + ")", backgroundPosition: 'center',
                backgroundSize: 'cover', height: '100vh' }}>
            </div>
            <div class="col s5" style={{}}>
                <h2>Zaloguj sie</h2>
                <div className="card blue darken-1">
                    <div className="card-content white-text">

                        <div>

                            <div className="input-field">
                                <input
                                    placeholder="Wpisz email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="yellow-input"
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input
                                    placeholder="Wpisz haslo"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="yellow-input"
                                />
                                <label htmlFor="email">Haslo</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <a class="waves-effect waves-light btn">Zaloguj się</a>
                        <a class="waves-effect waves-light btn">Rejestracja</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
            }



