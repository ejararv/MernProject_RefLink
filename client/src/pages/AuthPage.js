import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'


export const AuthPage = () => {
  
  
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

 //тутачки и есть сама функция для изменения формы, spread оператором вытягиваем текст из формы
// присваивается значения к полям name в форме [event.target.name]: event.target.value 
  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
     // message(data.message)
    } catch (e) {}
  }
  
  return(
    <div>
        <div className="row">
            <div className="col s7" style={{
                backgroundImage: "url(" + "https://source.unsplash.com/random" + ")", backgroundPosition: 'center',
                backgroundSize: 'cover', height: '100vh' }}>
            </div>
            <div className="col s5" style={{}}>
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
                                    onChange={changeHandler}
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
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Haslo</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <a className="waves-effect waves-light btn">Zaloguj się</a>
                        <a className="waves-effect waves-light btn">Rejestracja</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}



