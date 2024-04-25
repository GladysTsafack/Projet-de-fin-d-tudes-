function Navbar(){
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
                        <a href="/" className="small mr-3">
                        <span className="icon-lock"></span>
                        Log In
                        </a>
                        <a href="/register" className="small">
                        <span className="icon-person"></span>
                        Register
                        </a>
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
                            <li><a href="elements.html">Categorie</a></li>
                            <li className="has-children">
                            <a href="#">Categorie</a>
                            <ul className="dropdown">
                                <li><a href="#">Sub Menu One</a></li>
                                <li><a href="#">Sub Menu Two</a></li>
                                <li><a href="#">Sub Menu Three</a></li>
                            </ul>
                            </li>
                            <li><a href="#">Menu Three</a></li>
                        </ul>
                        </li>
                        <li><a href="staff.html">Planning</a></li>
                        <li><a href="news.html">Recommandations</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li class="nav-item dropdown pe-3">

                            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="./profile-img.jpg" alt="Profile" class="rounded-circle"/>
                                <span class="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                            </a>

                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li class="dropdown-header">
                                    <h6>Kevin Anderson</h6>
                                    <span>Web Designer</span>
                                </li>

                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i class="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                <hr class="dropdown-divider"/>
                                </li>

                                <li>
                                <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                    <i class="bi bi-gear"></i>
                                    <span>Account Settings</span>
                                </a>
                                </li>
                                <li>
                                <hr class="dropdown-divider"/>
                                </li>

                                <li>
                                <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
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

                    <a href="#" className="btn-book btn btn-secondary btn-sm menu-absolute">Enroll Now</a>

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