import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { LinkCard } from "../components/LinkCard";

export const DetailPage = () => {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [deleteLinkById] = useState();
  const [link, setLink] = useState(null);
  const linkId = useParams().id;

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/link/${linkId}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLink(fetched);
    } catch (e) {}
  }, [token, linkId, request]);

  const deleteLink = async () => {
    try {
      const del = request(`/api/link/${linkId}`, "DELETE", null, {
        Authorization: `Bearer ${token}`,
      });

      deleteLinkById(del);
    } catch (e) {}
  };

  useEffect(() => {
    getLink();
  }, [getLink]);

  return (
    <>
      <body class="bg-light">
        <div class="container">
          {!loading && link && <LinkCard link={link} />}

          <a className="btn btn-primary float-right" href="/links">
            Powrót do listy
          </a>

          <a
            className="btn btn-primary float-right"
            onClick={deleteLink}
            href="/links"
          >
            Usun link
          </a>
        </div>
      </body>
    </>
  );
};
