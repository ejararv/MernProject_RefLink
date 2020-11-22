import React from 'react'

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>

      <p>Twój link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
      <p>Skąd: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
      <p>Liczba kliknięć w link: <strong>{link.clicks}</strong></p>
      <p>Data utworzenia: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </>
  )
}
