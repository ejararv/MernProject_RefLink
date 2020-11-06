import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'


export const AuthPage = () => {
  
  
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

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
                        <h2 style={{ position: 'center' }}>Zaloguj sie</h2>
                        <div className="card" class="border-0">
                            <div className="card-content white-text">

                                <div>

                                    <div className="input-field col s12">
                                        <input
                                            id="email"
                                            type="text"
                                            name="email"
                                            className="yellow-input"
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>

                                    <div className="input-field col s12">
                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            className="yellow-input"
                                        />
                                        <label htmlFor="email">Haslo</label>
                                    </div>

                                </div>
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                        <span>Zapamiętaj mnie</span>
                                    </label>
                                </p>
                            </div>
                            <div className="card-action">
                                <button className="waves-effect teal lighten-2 btn"
                                    style={{ width: '100%', marginTop: '10px' }}>
                                    Zaloguj się
                                    </button>
                                <button className="waves-effect teal lighten-4 btn"
                                    style={{ width: '100%', marginTop: '10px' }}>
                                    Rejestracja
                                    </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
