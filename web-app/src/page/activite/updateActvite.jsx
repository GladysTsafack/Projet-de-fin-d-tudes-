import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateActivite() {
  const { id} = useParams(); // Get ID from URL params using useParams hook
  const [nom, setNom] = useState("");
  const [Date, setDate] = useState("");
  const [heureDebut, setHeureDebut] = useState("");
  const [heureFin, setHeureFin] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [categorie, setCategorie] = useState("");
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/Activites/${id}`);
        const activite = response.data;
        //  setId(activite.id); // Pre-populate ID in case it's not available initially (optional)
        setNom(activite.nom);
        setDate(activite.Date);
        setHeureDebut(activite.heure_debut);
        setHeureFin(activite.heure_fin);
        setLocalisation(activite.localisation);
        setCategorie(activite.categorie);
        setUser(activite.user);
      } catch (err) {
        console.error("Failed to fetch activity:", err);
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or failure
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state to true
    try {
      await axios.put(`http://127.0.0.1:8000/api/Activites/${id}`, {
        nom: nom,
        Date: Date,
        heure_debut: heureDebut,
        heure_fin: heureFin,
        localisation: localisation,
        // categorie: categorie,
        // user:user
      });
      alert("Activité mise à jour avec succès");
      navigate('/activites'); // Redirect to activities list using useNavigate
    } catch (err) {
      console.error("Failed to update activity:", err);
      alert("Échec de la mise à jour de l'activité");
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

 
  return (
    <div className="container">
      <h1>Modifier une activité</h1>

      {isLoading ? (
        <p className="text-center">Chargement de l'activité...</p>
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
    value={Date}
    
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
{/* <div className="form-group">
  <label htmlFor="categorie">Catégorie:</label>
  <input
    type="text"
    className="form-control"
    id="categorie"
    value={categorie}
    onChange={(e) => setCategorie(e.target.value)}
  />
</div>
<div className="form-group">
  <label htmlFor="user">Utilisateur:</label>
  <input
    type="text"
    className="form-control"
    id="user"
    value={user}
    onChange={(e) => setUser(e.target.value)}
  />
</div> */}
          <button type="submit" className="btn btn-primary">Mettre à jour</button>
          <Link to="/activites" className="btn btn-secondary">Annuler</Link>
        </form>
      )}
    </div>
  );
}

export default UpdateActivite;
