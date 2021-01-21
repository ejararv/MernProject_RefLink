import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">Nie ma linków</p>
  }

  return (
    <table class="table section-heading">
      <thead class=" text-uppercase">
      <tr>
        <th>#</th>
        <th>Oryginalny link</th>
        <th>Twój link</th>
        <th>Zobacz szczegóły</th>
      </tr>
      </thead>

      <tbody>
      { links.map((link, index) => {
        return (
          <tr key={link._id}>
            <th>{index + 1}</th>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>
              <Link to={`/detail/${link._id}`}>Otwórz</Link>
            </td>
          </tr>
        )
      }) }
      </tbody>
    </table>
  )
}