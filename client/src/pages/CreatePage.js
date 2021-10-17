import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );
        history.push(`/detail/${data.link._id}`);
      } catch (e) {}
    }
  };

  const createHandler = async () => {
    try {
      const data = await request(
        "/api/link/generate",
        "POST",
        { from: link },
        {
          Authorization: `Bearer ${auth.token}`,
        }
      );
      history.push(`/detail/${data.link._id}`);
    } catch (e) {}
  };

  return (
    <body>
      <header class="masthead">
        <div class="fon">
          <div class="container">
            <div class="masthead-heading text-uppercase">
              <form>
                <div class="form-group">
                  <label htmlFor="link">Wkliej link</label>
                  <input
                    placeholder="https://przykład.com/"
                    id="link"
                    type="text"
                    class="form-control"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    onKeyPress={pressHandler}
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary btn-block text-uppercase js=scroll-trigger"
                  onClick={createHandler}
                >
                  Stworzyć skrót
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <section class="page-section" id="about">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">O nas</h2>
            <h3 class="section-subheading text-muted">
              Program partnerski: dołącz do nas!
            </h3>
          </div>
          <ul class="timeline">
            <li>
              <div class="timeline-image">
                <img
                  class="rounded-circle img-fluid"
                  src="assets/buyer.jpg"
                  alt=""
                />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="subheading">Dla kupujących</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    Zaoszczędź do 90% na zakupach <br />
                    Oszczędzaj na towarach i usługach online
                    <br />
                    Sekretne promocje z rabatami do 99%
                    <br />
                    Wygodne zakupy + Cashback w smartfonie
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img
                  class="rounded-circle img-fluid"
                  src="assets/blogger.jpg"
                  alt=""
                />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="subheading">Dla webmasterów</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    Zarabiaj na ruchu / rekomendacjach / blogu
                    <br />
                    Pobierz produkt do recenzji (bezpłatnie)
                    <br />
                    Przejrzyste statystyki
                    <br />
                    Najlepsze oferty
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-image">
                <img
                  class="rounded-circle img-fluid"
                  src="assets/marketing.jpg"
                  alt=""
                />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="subheading">Dla reklamodawców</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    Większy ruch biznesowy
                    <br />
                    Wzrost sprzedaży
                    <br />
                    Nowi lojalni klienci
                  </p>
                </div>
              </div>
            </li>

            <li class="timeline-inverted">
              <div class="timeline-image">
                <h4>
                  Bądź częścią
                  <br />
                  naszego
                  <br />
                  zespołu!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </body>
  );
};
