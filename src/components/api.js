// api.js
const BASE_URL = 'http://localhost:3000/users'; // Assurez-vous que ceci correspond à l'URL de votre json-server

export const enregistrerUtilisateur = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
        throw error;
    }
};
export async function verifierUtilisateur(email, motDePasse) {
    try {
      // Remplacez 'http://localhost:3000/utilisateurs' par l'URL de votre API
      const response = await fetch('http://localhost:3000/users');
      const utilisateurs = await response.json();
  
      // Trouver l'utilisateur avec l'email donné
      const utilisateurTrouve = utilisateurs.find(utilisateur => utilisateur.email === email);
  
      // Vérifier si l'utilisateur existe et si le mot de passe est correct
      if (utilisateurTrouve && utilisateurTrouve.motDePasse === motDePasse) {
        return utilisateurTrouve;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Erreur lors de la vérification des identifiants:', error);
      throw error;
    }
  }
  
