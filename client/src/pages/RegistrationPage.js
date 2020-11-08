import React, { useContext, useEffect, useState } from 'react'
import registerHandler from '../pages/AuthPage'
import {useHttp} from '../hooks/http.hook'

export const RegisrationPage = () => {
    
    

    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
      email: '', password: '', user_name: '', last_name:''
    })

   


      
    useEffect( () =>{ 
    }, [error])
    
    
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
    
    return (
        <div>
            <div className="row">
                <div className="col need-hide" style={{
                    backgroundImage: "url(" + "https://source.unsplash.com/random" + ")", backgroundPosition: 'center',
                    backgroundSize: 'cover', height: '100vh'
                }}>
                </div>
                <div className="col" style={{ marginTop: '10vh' }}>
                    <form style={{ margin: '5vh' }}>
                        <h2 style={{ position: 'center' }}>Zarejestruj się</h2>
                        <div className="card" class="border-0">
                            <div className="card-content white-text">
                                <div>
                                    <div className="input-field col s6">
                                        <input 
                                        id="first_name" 
                                        type="text" 
                                        name="first_name"
                                        className="yellow-input" 
                                        onChange={changeHandler}
                                        />
                                        <label htmlFor="first_name">First Name</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input 
                                        id="last_name" 
                                        type="text"
                                        name="last_name" 
                                        className="yellow-input" 
                                        onChange={changeHandler}
                                        />
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>

                                    <div className="input-field col s12">
                                        <input
                                            id="email"
                                            type="text"
                                            name="email"
                                            className="yellow-input"
                                            onChange={changeHandler}
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>

                                    <div className="input-field col s12">
                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            className="yellow-input"
                                            onChange={changeHandler}
                                        />
                                        <label htmlFor="email">Haslo</label>
                                    </div>

                                </div>
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Wyrażam zgodę na otrzymywanie newslettera.</span>
                                    </label>
                                </p>
                            </div>
                            <div className="card-action">
                                <button className="waves-effect teal lighten-2 btn"  onClick={registerHandler} style={{ width: '100%', marginTop: '10px' }}>Rejestruj się</button>
                                <button className="waves-effect teal lighten-4 btn" style={{ width: '100%', marginTop: '10px' }}>Logowanie</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}