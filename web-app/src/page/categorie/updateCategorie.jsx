import React, { useState, useEffect } from 'react';
import Navbar from '../../composant/Navbar'; // Assuming Navbar component
import Footer from '../../composant/Footer'; // Assuming Footer component
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Categories from './categorie';
import update from './categorie'; // Assuming update function is exported from categorie.jsx

function UpdateCategorie() {
  const [description, setDescription] = useState(""); // State variable to hold category description
  const { id } = useParams(); // Access ID from URL parameters
  const navigate = useNavigate(); // For optional redirection

  // Fetch category data if editing (has an ID)
  useEffect(() => {
    const fetchCategory = async () => {
      if (id) { // Check if ID exists
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/categorie/${id}`);
          setDescription(response.data.description); // Update state with fetched description
        } catch (err) {
          console.error("Échec de la récupération de la catégorie:", err);
        }
      }
    };
    fetchCategory();
  }, [id]); // Re-run effect when ID changes

  axios.interceptors.request.use(config => {
    const token = localStorage.getItem('csrf-token'); // Assuming you store the token in localStorage
    if (token && config.method === 'put') {
      config.headers['X-CSRF-TOKEN'] = token;
    }
    return config;
  });

  async function update(event) {
    event.preventDefault();
    try {
        await axios.put(`http://127.0.0.1:8000/api/categorie/${id}`, {
           description:description
        });
        alert("Mise à jour de la categorie réussie");
        navigate('/categorie');
    } catch (err) {
        console.error("Échec de la mise à jour de la categorie:", err);
        alert("Échec de la mise à jour de la categorie");
    }
}


  return (
    <React.Fragment>
      <Navbar />
      <div className="container mt-5">
        <h2>Modification de catégorie</h2>
        <form onSubmit={update}>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description de la catégorie
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description} // Input value bound to state variable
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Modifier la catégorie
          </button>
        </form>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default UpdateCategorie;
