import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'


export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const { loading, request, error, clearError } = useHttp()
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

  const loginPress = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })
      auth.login(data.token, data.userId)
    } catch (e) { }
  }


  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })
      auth.login(data.token, data.userId)
    } catch (e) { }
  }

  return (
    <header class="login">
      <div class="row">
        <div class="col-6 hide">
        </div>
        <div class="col-6 full">
          <div class="fon">
            <div class="container">
              <form>
                <div class="form-group">
                  <h5 class="card-title">Zaloguj sie</h5>
                  <div>
                    <div class="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        placeholder="Wpisz email"
                        id="email"
                        type="text"
                        name="email"
                        class="form-control"
                        value={form.email}
                        onChange={changeHandler}
                        onKeyPress={loginPress} />
                    </div>
                    <div class="form-group">
                      <label htmlFor="email">Hasło</label>
                      <input
                        placeholder="Wpisz hasło"
                        id="password"
                        type="password"
                        name="password"
                        class="form-control"
                        value={form.password}
                        onChange={changeHandler}
                        onKeyPress={loginPress} />
                    </div>
                  </div>
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div>
                  <a class="btn btn-primary" style={{ marginRight: 10 }} disabled={loading} onClick={loginHandler}>
                    Zaloguj sie</a>
                  <a class="nav-link" href="/registration">Nie masz konta? Zarejestruj sie</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}