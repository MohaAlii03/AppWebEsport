import React from 'react'

export default function DetailsJeu({title, desc, picture }) {
  return (
    <div>
      {/* <p>id : {id}</p> */}
      <p>Titre : {title}</p>
      <p>Description : {desc}</p>
      <p>
        <img src={picture} alt="" />
      </p>
    </div>
  )
}
