import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { enregistrerUtilisateur } from './api'; // Importez la fonction depuis api.js
import { verifierUtilisateur } from './api'; // Assurez-vous d'importer la nouvelle fonction


function Userlogin() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false); // Nouveau state pour la case à cocher
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
  console.log("Email:", email); // Afficher l'email saisi
  console.log("Mot de Passe:", motDePasse); // Afficher le mot de passe saisi

    try {
      const result = await verifierUtilisateur(email, motDePasse);
      if (result) {
        navigate('/home');
      } else {
        alert('Identifiants incorrects');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!acceptTerms) {
      alert("Veuillez accepter les conditions d'utilisation.");
      return;
    }
    const userData = { nom, email, motDePasse };
    
    try {
        const utilisateurEnregistre = await enregistrerUtilisateur(userData);
        console.log('Utilisateur enregistré avec succès:', utilisateurEnregistre);
        navigate('/home'); // Redirection vers HomePage après la connexion

        // Autres actions après l'enregistrement réussi...
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
        // Gestion des erreurs...
    }
};

  const handleSwitch = index => {
    setActiveIndex(index);
  };

  return (
    
    <section className="forms-section">
      <h1 className="section-title">INSCRIPTION E-SPORT</h1>
      <div className="forms"> 
        <div className={`form-wrapper ${activeIndex === 0 ? 'is-active' : ''}`}>
          <button type="button" className="switcher switcher-login" onClick={() => handleSwitch(0)}>
            Login
            <span className="underline"></span>
          </button>
          <form className={`form form-login ${activeIndex === 0 ? 'is-active' : ''}`} onSubmit={handleLogin}>
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input id="login-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-login">Login</button>
          </form>
        </div>

        <div className={`form-wrapper ${activeIndex === 1 ? 'is-active' : ''}`}>
  <button type="button" className="switcher switcher-signup" onClick={() => handleSwitch(1)}>
    Sign Up
    <span className="underline"></span>
  </button>
  <form className={`form form-signup ${activeIndex === 1 ? 'is-active' : ''}`} onSubmit={handleSubmit}>
    <fieldset>
      <legend>Please, enter your email, password and password confirmation for sign up.</legend>
      <div className="input-block">
        <label htmlFor="signup-nom">Nom</label>
        <input id="signup-nom" type="text" value={nom} onChange={e => setNom(e.target.value)} required />
      </div>
      <div className="input-block">
        <label htmlFor="signup-email">E-mail</label>
        <input id="signup-email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className="input-block">
        <label htmlFor="signup-password">Password</label>
        <input id="signup-password" type="password" value={motDePasse} onChange={e => setMotDePasse(e.target.value)} required />
      </div>
      <div className="input-block">
        <input
          id="terms-checkbox"
          type="checkbox"
          checked={acceptTerms}
          onChange={e => setAcceptTerms(e.target.checked)}
        />
        <label htmlFor="terms-checkbox">J'accepte les conditions d'utilisation</label>
      </div>

      {/* Vous pouvez ajouter ici un champ de confirmation de mot de passe si nécessaire */}
      <button type="submit" className="btn-signup">Continue</button>
    </fieldset>
  </form>
</div>
      </div>
    </section>
  );
}

export default Userlogin;
