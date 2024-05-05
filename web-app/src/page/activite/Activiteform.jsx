import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActiviteForm = () => {
  const [nom, setNom] = useState('');
  const [date, setDate] = useState('');
  const [heureDebut, setHeureDebut] = useState('');
  const [heureFin, setHeureFin] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [categorie, setCategorie] = useState('');
  const [categories, setCategories] = useState([]); // Array to store categories
  const [user, setUser] = useState(''); // Currently logged-in user
  const [isLoading, setIsLoading] = useState(false);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/categorie');
        setCategories(response.data);
      } catch (err) {
        alert("impossible d'afficher les categories");
        console.error('Failed to fetch categories:', err);
      }
    };
    fetchCategories();
  }, []);

  // Get the currently logged-in user (replace with your auth logic)
  useEffect(() => {
    const loggedInUser = 'belva'; // Replace with actual user data
    setUser(loggedInUser);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/Activites', {
        nom,
        date,
        heure_debut: heureDebut,
        heure_fin: heureFin,
        localisation,
        categorie,
        user, // Set user from currently logged-in user
      });

      console.log('Activité ajoutée avec succès:', response.data);
      alert("activite ajoute avec success");
      // Optionally, redirect to a list of activities or display a success message
    } catch (err) {
        alert("echec de l'ajout");
      console.error('Échec de l\'ajout d\'activité:', err);
      // Handle errors appropriately
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Ajouter une activité</h1>

      {isLoading ? (
        <p className="text-center">Ajout en cours...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom:</label>
            <input
              type="text"
              className="form-control"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="heureDebut">Heure de début:</label>
            <input
              type="time"
              className="form-control"
              id="heureDebut"
              value={heureDebut}
              onChange={(e) => setHeureDebut(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="heureFin">Heure de fin:</label>
            <input
              type="time"
              className="form-control"
              id="heureFin"
              value={heureFin}
              onChange={(e) => setHeureFin(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="localisation">Localisation:</label>
            <input
              type="text"
              className="form-control"
              id="localisation"
              value={localisation}
              onChange={(e) => setLocalisation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="categorie">Catégorie:</label>
            <select
              className="form-control"
              id="categorie"
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
            >
              <option value="">--Sélectionnez une catégorie--</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.nom}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="user">Utilisateur:</label>
            <input
              type="text"
              className="form-control"
              id="user"
              value={user}
              disabled // Disable user input field
            />
          </div>
          <button type="submit" className="btn btn-primary">Ajouter</button>
        </form>
      )}
    </div>
  );
};

export default ActiviteForm;
