import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getGameById } from '../services/api';
import PagePresentation from '../components/PagePresentation';
import DetailsJeu from '../components/DetailsJeu';
import data from "../data/db.json";

export default function ProductPage() {

  const [jeux, setJeux] = useState(data.games);

  // récupérer une variable d'url
  const { id } = useParams();

  useEffect(() => {
    getGameById().then((data) => setJeux(data.results));
  }, []);
  
  const jeu = data.games.find((game) => game.id === parseInt(id)); // Récupérez les détails du jeu basé sur l'ID

  if (!jeu) {
    return <p>Le jeu n'existe pas.</p>; // Gérez le cas où le jeu n'est pas trouvé
  }

  return (
    <>
    <h2>Liste de jeux</h2>
    {
      jeux.map((jeu) => {
        return (
          <PagePresentation
            key={crypto.randomUUID()}
            // id = {jeu.id}
            title = {jeu.name}
            desc = {jeu.description}
            picture = {jeu.picture}
          />
        )
      })}
  </>
  )
}
