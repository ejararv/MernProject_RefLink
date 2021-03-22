import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">Nie ma linków</p>
  }

  return (
    <div className="container">
      <table class="table section-heading list">
        <thead class=" text-uppercase">
          <tr class="table-active">
            <th className="hide">#</th>
            <th className="hide">Oryginalny link</th>
            <th className="hide">Twój link</th>
            <th className="show-link">Wybierz link aby zobaczyć szczegóły</th>
            <th className="hide">Zobacz szczegóły</th>
          </tr>
        </thead>

        <tbody class="table-active">
          {links.map((link, index) => {
            return (
              <tr key={link._id}>
                <th className="hide">{index + 1}</th>
                <td className="hide">{link.from}</td>
                <td className="hide">{link.to}</td>
                <td className="show-link">
                  <Link
                    className="btn btn-link float-none"
                    to={`/detail/${link._id}`}
                  >
                    {link.to}
                  </Link>
                </td>
                <td className="hide">
                  <Link
                    className="btn btn-primary float-none"
                    to={`/detail/${link._id}`}
                  >
                    Otwórz
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
