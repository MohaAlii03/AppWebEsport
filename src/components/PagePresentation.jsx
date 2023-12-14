import React from 'react';
import JeuxListe from './ListeJeux';

class PagePresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jeux: [], // Ici, vous devriez récupérer les jeux depuis une source de données (API, base de données, etc.)
      loading: true,
    };
  }

  componentDidMount() {
    // Ici, vous devriez effectuer une requête pour récupérer la liste des jeux depuis une API ou une source de données
    // Simulons une liste de jeux pour l'exemple
    const jeuxExemple = [
      { nom: 'Super Smash Bros. Ultimate' },
      { nom: 'League of Legends' },
      { nom: 'Overwatch' },
      // ... Ajoutez d'autres jeux ici
    ];

    // Mettre à jour l'état une fois les données récupérées
    this.setState({ jeux: jeuxExemple, loading: false });
  }

  render() {
    const { jeux, loading } = this.state;

    if (loading) {
      return <div>Chargement en cours...</div>;
    }

    return (
      <div>
        <h1>Page de Présentation des Tournois</h1>
        <JeuxListe jeux={jeux} />
      </div>
    );
  }
}

export default PagePresentation;
