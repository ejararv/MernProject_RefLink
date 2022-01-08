import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { useEffect, useState } from "react";

export const RegisrationPage = () => {
  const message = useMessage();
  const { request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("Error", error);
    message(error);
    clearError();
  }, [error, message, clearError]);

  //тутачки и есть сама функция для изменения формы, spread оператором вытягиваем текст из формы
  // присваивается значения к полям name в форме [event.target.name]: event.target.value
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerPress = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await request("/api/auth/register", "POST", { ...form });
        message(data.message);
      } catch (e) {}
    }
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (e) {}
  };

  return (
    <header className="login">
      <div className="row">
        <div className="col-6 hide"></div>
        <div className="col-6 full">
          <div className="reg">
            <div className="container">
              <form>
                <div className="form-group">
                  <h5 className="card-title">Zarejestruj sie</h5>
                  <div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        placeholder="Wpisz email"
                        id="email"
                        type="text"
                        name="email"
                        className="form-control"
                        value={form.email}
                        onChange={changeHandler}
                        onKeyPress={registerPress}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Hasło</label>
                      <input
                        placeholder="Wpisz hasło"
                        id="password"
                        type="password"
                        name="password"
                        className="form-control"
                        value={form.password}
                        onChange={changeHandler}
                        onKeyPress={registerPress}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <a
                    className="btn btn-primary"
                    href="/"
                    onClick={registerHandler}
                  >
                    Zarejestruj sie
                  </a>
                  <a className="nav-link" href="/">
                    Już mam konto
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
