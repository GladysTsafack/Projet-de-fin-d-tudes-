import React from 'react'; // Ajoutez cette ligne d'import
import { Link } from 'react-router-dom';
import Footer from "../../composant/Footer";
import Navbar from "../../composant/Navbar";

import axios from 'axios';
import { useEffect, useState } from "react";

function Activites() {
    const [id, setId] = useState('');
    const [nom, setNom] = useState("");
    const [date, setDate] = useState("");
    const [heure_debut, setHeureDebut] = useState("");
    const [heure_fin, setHeureFin] = useState("");
    const [localisation, setLocalisation] = useState("");
    const [categorie, setCategorie] = useState("");
    const [user, setUser] = useState("");
    const [activites, setActivites] = useState([]);

    useEffect(() => {
        Load();
    }, []);

    async function Load() {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/Activites");
            setActivites(result.data);
            console.log(result.data);
        } catch (err) {
            console.error("Failed to load activities:", err);
        }
    }

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/Activites", {
                nom: nom,
                date: date,
                heure: heure,
                categorie: categorie,
                user:user
            });
            alert("Activité enregistrée avec succès");
            setNom("");
            setDate("");
            setHeureDebut("");
            setHeureFin("");
            setLocalisation("");
            setCategorie("");
            Load();
        } catch (err) {
            console.error("Échec de l'enregistrement de l'activité:", err);
            alert("Échec de l'enregistrement de l'activité");
        }
    }

    async function editActivite(activite) {
        setNom(activite.nom);
        setDate(activite.date);
        setHeureDebut(activite.heure_debut);
        setHeureFin(activite.heure_fin);
        setLocalisation(activite.localisation);
        setCategorie(activite.categorie);
        setUser(activite.user);
        setId(activite.id);
    }

    async function deleteActivite(id) {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/Activites/${id}`);
            alert("Activité supprimée avec succès");
            Load();
        } catch (err) {
            console.error("Échec de la suppression de l'activité:", err);
        }
    }

    async function update(event) {
        event.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/Activites/${id}`, {
                nom: nom,
                date: date,
                heure_debut: heure_debut,
                heure_fin:heure_fin,
                localisation:localisation,
                categorie: categorie,
                user:user
            });
            alert("Mise à jour de l'activité réussie");
            setId("");
            setNom("");
            setDate("");
            setHeureDebut("");
            setHeureFin("");
            setLocalisation("");
            setCategorie("");
            Load();
        } catch (err) {
            console.error("Échec de la mise à jour de l'activité:", err);
            alert("Échec de la mise à jour de l'activité");
        }
    }

    return (
        <React.Fragment>
            <Navbar />
         
            <div className="untree_co-hero inner-page overlay header">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Activités</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <br />
                    <button type="submit" className='btn btn-info'> <Link to={'/Activiteform'}>ajouter</Link></button>
                    <table className="table table-dark" align="center">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Date</th>
                                <th scope="col">Heure de debut</th>
                                <th scope="col">Heure de fin</th>
                                <th scope="col">localisation</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activites.map(activite => (
                                <tr key={activite.id}>
                                    <th scope="row">{activite.id}</th>
                                    <td>{activite.nom}</td>
                                    <td>{new Date(activite['Date']).toLocaleDateString()}</td>
                                    <td>{activite.heure_debut}</td>
                                    <td>{activite.heure_fin}</td>
                                    <td>{activite.localisation}</td>
                                    <td>{activite.categorie}</td>
                                    <td>{ activite.user}</td>
                                    <td>
  <button type="button" className="btn btn-warning">
    <Link to={`/updateActivite/` + activite.id}>modifier</Link>
  </button>
  <button type="button" className="btn btn-danger" onClick={() => deleteActivite(activite.id)}>Supprimer</button>
</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Activites;
