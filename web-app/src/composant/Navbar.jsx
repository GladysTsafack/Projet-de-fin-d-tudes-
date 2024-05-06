function Navbar(){
    // console.log(session.user);
    const id = localStorage.getItem('id');
    const nom = localStorage.getItem('nom');
    return(
        <div>
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close">
                    <span className="icofont-close js-menu-toggle"></span>
                </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>
            <nav className="site-nav mb-5">
                <div className="pb-2 top-bar mb-3">
                <div className="container">
                    <div className="row align-items-center">

                    <div className="col-6 col-lg-9">
                        <a href="#" className="small mr-3"><span className="icon-question-circle-o mr-2"></span> <span className="d-none d-lg-inline-block">Have a questions?</span></a> 
                        <a href="#" className="small mr-3"><span className="icon-phone mr-2"></span> <span className="d-none d-lg-inline-block">10 20 123 456</span></a> 
                        <a href="#" className="small mr-3"><span className="icon-envelope mr-2"></span> <span className="d-none d-lg-inline-block">info@mydomain.com</span></a> 
                    </div>

                    <div className="col-6 col-lg-3 text-right">
                        {/* <a href="/" className="small mr-3">
                        <span className="icon-lock"></span>
                        Log In
                        </a>
                        <a href="/register" className="small">
                        <span className="icon-person"></span>
                        Register
                        </a> */}
                        
                    <div className="site-navigation text-center">
                    

                    <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
                        <li className="has-children">
                            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="/images/profile-img.jpg" alt="Profile" class="rounded-circle mx-3" width={30} />
                                <span class="d-none d-md-block  ps-2">{nom}</span>
                            </a>
                            <ul className="dropdown">
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="">
                                        <i class="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                <hr class="dropdown-divider"/>
                                </li>

                                <li>
                                <a class="dropdown-item d-flex align-items-center" href="">
                                    <i class="bi bi-gear"></i>
                                    <span>Account Settings</span>
                                </a>
                                </li>
                                <li>
                                <hr class="dropdown-divider"/>
                                </li>

                                <li>
                                <a class="dropdown-item d-flex align-items-center" href="">
                                    <i class="bi bi-question-circle"></i>
                                    <span>Need Help?</span>
                                </a>
                                </li>
                                <li>
                                <hr class="dropdown-divider"/>
                                </li>

                                <li>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <i class="bi bi-box-arrow-right"></i>
                                    <span>Sign Out</span>
                                </a>
                                </li>
                            </ul>
                        </li>
                     
                    </ul>

                   
                    </div>
                    </div>

                    </div>
                </div>
                </div>
                <div className="sticky-nav js-sticky-header">
                <div className="container position-relative">
                    <div className="site-navigation text-center">
                    <a href="index.html" className="logo menu-absolute m-0">Learner<span className="text-primary">.</span></a>

                    <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
                        <li className="active"><a href="/accueil">Accueil</a></li>
                        <li className="has-children">
                        <a href="/activites">Activités</a>
                        <ul className="dropdown">
                            <li><a href="/activites">Categorie</a></li>
                            <li className="has-children">
                            <a href="#">Categorie</a>
                            {/* <ul className="dropdown">
                                <li><a href="#">Sub Menu One</a></li>
                                <li><a href="#">Sub Menu Two</a></li>
                                <li><a href="#">Sub Menu Three</a></li>
                            </ul> */}
                            </li>
                        </ul>
                        </li>
                        <li><a href="">Planning</a></li>
                        <li><a href="">Recommandations</a></li>
                        <li><a href="">About</a></li>
                        
                    </ul>

                    <a href="#" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
                        <span></span>
                    </a>

                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar