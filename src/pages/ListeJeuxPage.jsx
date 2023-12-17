// import React from 'react'

// export default function ListeJeuxPage() {
//   return (
//     <div>ListeJeuxPage</div>
//   )
// }
import React from 'react';
import { Link } from 'react-router-dom';
import data from "../data/db.json"; // Importez vos données de jeux depuis votre fichier JSON

export default function ListeJeuxPage() {
  const jeux = data.games; // Récupérez la liste de jeux depuis vos données

  return (
    <div>
      <h1>Liste des jeux :</h1>
      {jeux.map((jeu) => (
        <div key={jeu.id}>
          <Link to={`/product/${jeu.id}`}>{jeu.name}</Link>
        </div>
      ))}
    </div>
  );
}
