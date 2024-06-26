import Footer from "../composant/Footer"
import Navbar from "../composant/Navbar"
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { SessionProvider,userSession } from 'react-session'

function Login(){
    const [formData,setForData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate() 

    const handlechange = (e)=>{
        const {name,value}= e.target;
        setForData(prevFormData =>({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmitlogin = (e)=>{
        // const { session,setSession } = userSession()

        e.preventDefault();
        axios.post('http://localhost:8000/api/login', formData).then((Response)=>{
                
               if (Response.data['id'] != '') {
                localStorage.setItem('id', Response.data['id']  );
                localStorage.setItem('nom', Response.data['nom']  );
                localStorage.setItem('adresse', Response.data['adresse']  );
                   window.location.href = "accueil";
               }
            }).catch((error)=>{
                console.error('Erreur lors de la creation du compte:', error)
            })
            console.log(formData)

    }

    return(
       <div>
        <Navbar></Navbar>
        <div class="untree_co-hero inner-page overlay header" >
            <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-12">
                <div class="row justify-content-center ">
                    <div class="col-lg-6 text-center ">
                    <h1 class="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Login</h1>

                    </div>
                </div>
                </div>
            </div>
            </div> 

        </div> 
        <br />
        <div class="untree_co-section">
            <div class="container">

            <div class="row mb-5 justify-content-center">
                <div class="col-lg-5 mx-auto order-1" data-aos="fade-up" data-aos-delay="200">
                <form onSubmit={handleSubmitlogin} class="form-box">
                    <div class="row">
                    <div class="col-12 mb-3">
                        <input type="text" class="form-control" name="email" onChange={handlechange} placeholder="Email" />
                    </div>
                    <div class="col-12 mb-3">
                        <input type="password" class="form-control" name="password" onChange={handlechange} placeholder="Password" />
                    </div>

                    <div class="col-12 mb-3">
                        <label class="control control--checkbox">
                        <span class="caption">Remember me</span>
                        <input type="checkbox" checked="checked" />
                        <div class="control__indicator"></div>
                        </label>
                    </div>
                    <div class="col-12">
                        {/* <input type="submit" value="Se connecter" class="btn btn-primary"/> */}
                        <button type="submit" class="btn btn-primary">Se connecter</button>
                    </div>
                    
                    <div className="text-center col-12 my-2 row">
                        <div className="offset-md-6 col-md-6"><a href="/register" >Creer mon compte</a></div> 
                    </div>
                    </div>
                </form>
                </div>
            </div>

            
            </div>
        </div>
        <Footer/>
       </div>

    )
}

export default Login