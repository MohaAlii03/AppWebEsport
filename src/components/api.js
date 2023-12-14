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
