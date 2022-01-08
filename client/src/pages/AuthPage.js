import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginPress = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <header className="login">
      <div className="row">
        <div className="col-6 hide"></div>
        <div className="col-6 full">
          <div className="fon">
            <div className="container">
              <form>
                <div className="form-group">
                  <h5 className="card-title">Zaloguj sie</h5>
                  <div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        placeholder="Wpisz email"
                        id="email"
                        type="text"
                        name="email"
                        class="form-control"
                        value={form.email}
                        onChange={changeHandler}
                        onKeyPress={loginPress}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Hasło</label>
                      <input
                        placeholder="Wpisz hasło"
                        id="password"
                        type="password"
                        name="password"
                        class="form-control"
                        value={form.password}
                        onChange={changeHandler}
                        onKeyPress={loginPress}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <div>
                  <a
                    className="btn btn-primary"
                    style={{ marginRight: 10 }}
                    disabled={loading}
                    onClick={loginHandler}
                  >
                    Zaloguj sie
                  </a>
                  <a clasNames="nav-link" href="/registration">
                    Nie masz konta? Zarejestruj sie
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
