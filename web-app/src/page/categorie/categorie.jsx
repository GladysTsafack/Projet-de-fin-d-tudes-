import React from 'react'; // Ajoutez cette ligne d'import
import { Link } from 'react-router-dom';
import Footer from "../../composant/Footer";
import Navbar from "../../composant/Navbar";
import axios from 'axios';
import { useEffect, useState } from "react";

function Categories() {
    const [id, setId] = useState('');
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        Load();
    }, []);

    async function Load() {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/categorie");
            setCategories(result.data);
            console.log(result.data);
        } catch (err) {
            console.error("Failed to load categories:", err);
        }
    }

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/categorie", {
                description: description,
            });
            alert("Categorie enregistrée avec succès");
            setDescription("");
            Load();
        } catch (err) {
            console.error("Échec de l'enregistrement de la categorie:", err);
            alert("Échec de l'enregistrement de la categorie");
        }
    }

    async function editCategorie(categorie) {
       setDescription(categorie.description);
    }

    async function deleteCategorie(id) {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/categorie/${id}`);
            alert("categorie supprimée avec succès");
            Load();
        } catch (err) {
             console.error("Échec de la suppression de la categorie:", err);
        }
    }

     async function update(event) {
        event.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/categorie/${id}`, {
               description:description
            });
            alert("Mise à jour de la categorie réussie");
           setDescription("");
            Load();
        } catch (err) {
            console.error("Échec de la mise à jour de la categorie:", err);
            alert("Échec de la mise à jour de la categorie");
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
                                    <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Categories</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <br />
                    <button type="button" className='btn btn-info'>
                    <Link to="/categorieForm">Ajouter une catégorie</Link>
                    </button>
                    <table className="table table-dark" align="center">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">description</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(categorie => (
                                <tr key={categorie.id}>
                                    <th scope="row">{categorie.id}</th>
                                    <td>{categorie.description}</td>
                                    <td>
                                        <button type="button" className="btn btn-warning"> <Link to={`/updateCategorie/` + categorie.id}>modifier</Link></button>
                                        <button type="button" className="btn btn-danger" onClick={() => deleteCategorie(categorie.id)}>Supprimer</button>
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

export default Categories;
