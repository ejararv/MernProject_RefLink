import React from 'react'

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Szczegóły linku</h2>



      <table class="table">
        <tbody>
          <tr>
            <th>Twój link:</th>
            <td><a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></td>
          </tr>
          <tr>
            <th>Skąd:</th>
            <td><a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></td>
          </tr>
          <tr>
            <th>Liczba kliknięć w link:</th>
            <td>{link.click}</td>
          </tr>
          <tr>
            <th>Data utworzenia:</th>
            <td>{new Date(link.date).toLocaleDateString()}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}