import Footer from "../composant/Footer"
import Navbar from "../composant/Navbar"
import React from "react";
import { useState } from "react";
import axios from "axios";

function Register(){
    const [formData,setForData] = useState({
        nom: '',
        genre: '',
        adresse: '',
        email: '',
        password: '',
    });

    const handlechange = (e)=>{
        const {name,value}= e.target;
        setForData(prevFormData =>({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(formData.confirmer==formData.password){
            axios.post('http://localhost:8000/api/register', formData).then((Response)=>{
                console.log(Response.data);
            }).catch((error)=>{
                console.error('Erreur lors de la creation du compte:', error)
            })
            console.log(formData)
        }
    }

    return(
        <div>
            <Navbar></Navbar>
            <div class="untree_co-hero inner-page overlay header">
                <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-12">
                    <div class="row justify-content-center ">
                        <div class="col-lg-6 text-center ">
                        <h1 class="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Register</h1>
                        </div>
                    </div>
                    </div>
                </div> 
                </div> 
            </div>
        <br /><br />
            <div class="untree_co-section">
                <div class="container">
                <div class="row mb-5 justify-content-center">
                    <div class="col-lg-5 mx-auto order-1" data-aos="fade-up" data-aos-delay="200">
                    <form onSubmit={handleSubmit} class="form-box">
                        <div class="row">
                        <div class="col-12 mb-3">
                            <input type="text" class="form-control" name="nom" onChange={handlechange} placeholder="Full name"/>
                        </div>
                        <div class="col-12 m-3">
                            <input type="radio" name="genre" className="form-check-input" value="Feminim" onChange={handlechange}/>
                            <label htmlFor="" className="form-check-label mr-5">Feminin</label>
                            <input type="radio" name="genre" className="form-check-input" value="Masculin" onChange={handlechange}/>
                            <label htmlFor="" className="form-check-label">Masculin</label>
                        </div>
                        <div class="col-12 mb-3">
                            <input type="text" class="form-control" name="adresse" onChange={handlechange} placeholder="Adresse"/>
                        </div>
                        <div class="col-12 mb-3">
                            <input type="text" class="form-control"name="email" onChange={handlechange} placeholder="Email"/>
                        </div>
                        <div class="col-12 mb-3">
                            <input type="password" class="form-control" name="password" onChange={handlechange} placeholder="Password"/>
                        </div>
                        <div class="col-12 mb-3">
                            <input type="password" class="form-control" name="confirmer" onChange={handlechange} placeholder="Re-type Password"/>
                        </div>

                        <div class="col-12 mb-3">
                            <label class="control control--checkbox">
                            <span class="caption">Accept our <a href="#">terms and conditions</a></span>
                            <input type="checkbox" checked="checked" />
                            <div class="control__indicator"></div>
                            </label>
                        </div>

                        <div class="col-12">
                            {/* <input type="submit" value="S'inscrire" class="btn btn-primary"/> */}
                            <button type="submit"  class="btn btn-primary">S'inscrire</button>
                        </div>

                        <div className="text-center col-12 my-2 row">
                            <div className="offset-md-5 col-md-7"><a href="/" >Se connecter à mon compte</a></div> 
                        </div>
                        </div>
                    </form>
                    </div>
                </div> 
            </div>
        </div>
        <Footer></Footer>
    </div>
    )
}

export default Register