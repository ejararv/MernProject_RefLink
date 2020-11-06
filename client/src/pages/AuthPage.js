import React, {useContext, useEffect, useState} from 'react'
import { useHttp } from '../hooks/http.hook'



export const AuthPage = () => {

  const {loading, error, request} = useHttp()

  const [form ,setForm] = useState ({    //useState Передаёт данные в виде массива где 1 значение это данные из формы а 2значение это функция для формы
    email: '' , password:''
  })

//тутачки и есть сама функция для изменения формы, spread оператором вытягиваем текст из формы
// присваивается значения к полям name в форме [event.target.name]: event.target.value 
   const changeHandler = event => {
     setForm ({ ...form , [event.target.name]: event.target.value })  
   }



   const  registerHandler  = async () =>
   {
     try{
      const data = await request('/api/auth/register', 'POST', {...form})
      console.log('Data', data)
     }catch(e) {

     }
   }
  
  

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Referal Link</h1>


        <div>
    <h1> TEST</h1>
  </div>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Zaloguj sie</span>
            <div>

              <div className="input-field">
                <input
                  placeholder="Wpisz email"
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input"
                  onClick={changeHandler}
                  
                
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
                  onClick={changeHandler}
                  
                />
                <label htmlFor="email">Haslo</label>
              </div>

            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{marginRight: 10}}
              disabled={loading} 
             
            >
              Zaloguj
            </button>
            <button
              className="btn grey lighten-1 black-text"
             onClick={registerHandler}
             disabled={loading}
            >
             Rejestracja
            </button>
          </div>
        </div>
      </div>
    </div>
  )

return (
  <div>
    <h1> TEST</h1>
  </div>
)

}
