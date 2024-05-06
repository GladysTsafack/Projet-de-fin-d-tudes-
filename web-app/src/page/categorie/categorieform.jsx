import React, { useState } from 'react';
import Navbar from '../../composant/Navbar';
import Footer from '../../composant/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link component

function CategorieForm() {
  const [description, setDescription] = useState("");

  axios.interceptors.request.use(config => {
    const token = localStorage.getItem('csrf-token'); // Assuming you store the token in localStorage
    if (token && config.method === 'post') {
      config.headers['X-CSRF-TOKEN'] = token;
    }
    return config;
  });

  async function saveCategorie(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/categorie", {
        description: description,
      });
      alert("Catégorie créée avec succès");
      setDescription(""); // Clear the form after successful creation
    } catch (err) {
      console.error("Échec de la création de la catégorie:", err);
      alert("Échec de la création de la catégorie");
    }
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="container mt-5">
        <h2>Création de catégorie</h2>
        <form onSubmit={saveCategorie}>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description de la catégorie
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Créer la catégorie
          </button>
          {/* Add Link component for redirection */}
          <Link to="/categorie" className="btn btn-secondary ml-2">
            Voir les catégories
          </Link>
        </form>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default CategorieForm;
