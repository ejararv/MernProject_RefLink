import React, { useContext, useEffect, useState } from 'react'


export const AuthPage = () => {

    return (
        <body style={{
            backgroundImage: "url(" + "assets/bg-pink.jpg" + ")", backgroundPosition: 'center',
            backgroundSize: 'auto'
        }}>
            <div>
                <div className="row">
                    <div className="col s6 offset-s3">
                        <h1>Referral Link</h1>
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
        </body>
    )
}
