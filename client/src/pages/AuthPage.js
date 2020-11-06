import React, { useContext, useEffect, useState } from 'react'


export const AuthPage = () => {

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
