import React, { useContext, useEffect, useState } from 'react'

export const CreatePage = () => {
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
                                        className="yellow-input" 
                                        />
                                        <label htmlFor="first_name">First Name</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input 
                                        id="last_name" 
                                        type="text" 
                                        className="yellow-input" 
                                        />
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>

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
                                        <span>Wyrażam zgodę na otrzymywanie newslettera.</span>
                                    </label>
                                </p>
                            </div>
                            <div className="card-action">
                                <button className="waves-effect teal lighten-2 btn" style={{ width: '100%', marginTop: '10px' }}>Rejestruj się</button>
                                <button className="waves-effect teal lighten-4 btn" style={{ width: '100%', marginTop: '10px' }}>Logowanie</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}