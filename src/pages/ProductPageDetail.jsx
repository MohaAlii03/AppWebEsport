import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getGameById } from '../services/api';
import DetailsJeu from '../components/DetailsJeu';
import data from "../data/db.json";

export default function ProductPageDetail() {

  const [jeux, setJeux] = useState(data.games);

  // récupérer une variable d'url
  const { id } = useParams();

  useEffect(() => {
    getGameById().then((data) => setJeux(data.results));
  }, []);
  

  return (
    <>
    <h2>Détail du jeu</h2>
    {
      jeux.map((jeu) => {
        return (
          <DetailsJeu
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


