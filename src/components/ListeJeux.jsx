import React from 'react';

const JeuxListe = ({ jeux }) => {
  return (
    <div>
      <h2>Liste des Jeux Vidéo en Tournoi</h2>
      <ul>
        {jeux.map((jeu, index) => (
          <li key={index}>{jeu.nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default JeuxListe;
