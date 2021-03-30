

import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

import {  useEffect, useState } from 'react'




export const RegisrationPage = () => {


  
  const message = useMessage()
  const {  request, error, clearError } = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })





  useEffect(() => {

    console.log('Error', error)
    message(error)
    clearError()

  }, [error, message, clearError])


  //тутачки и есть сама функция для изменения формы, spread оператором вытягиваем текст из формы
  // присваивается значения к полям name в форме [event.target.name]: event.target.value 
  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
      message(data.message)
    } catch (e) { }
  }


  return (
    <header class="login">
      <div class="row">
        <div class="col-6 hide">
        </div>
        <div class="col-6 full">
          <div class="reg">
            <div class="container">
              <form>
                <div class="form-group">
                  <h5 class="card-title">Zarejestruj sie</h5>
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
                        onChange={changeHandler} />
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
                        onChange={changeHandler} />
                    </div>
                  </div>
                </div>
                <div>
                  <a class="btn btn-primary" onClick={registerHandler}>Zarejestruj sie</a>
                  <a class="nav-link" href="/">Już mam konto</a>
                </div>
              </form>
            </div>
          </div >
        </div>
      </div>
    </header>
  )
}