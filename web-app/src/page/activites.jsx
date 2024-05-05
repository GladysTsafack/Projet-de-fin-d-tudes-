import Footer from "../composant/Footer"
import Navbar from "../composant/Navbar"

function Activites(){
    return(
        <div>
            <Navbar/>
            <div class="untree_co-hero inner-page overlay header" >
                <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-12">
                    <div class="row justify-content-center ">
                        <div class="col-lg-6 text-center ">
                        <h1 class="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Activités</h1>

                        </div>
                    </div>
                    </div>
                </div>
                </div> 
            </div> 
            <div class="untree_co-section">
                <div class="container">
                <div class="row justify-content-center mb-3">
                    <div class="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0">
                    <h2 class="line-bottom text-center mb-4">Browse Top Category</h2>
                    </div>
                </div>
                <div class="row align-items-stretch">
                    <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
                    <a href="#" class="category d-flex align-items-start h-100">
                        <div>
                        <i class="uil uil-atom"></i>
                        </div>
                        <div>
                        <h3>Science</h3>
                        <span>1,391 courses</span>
                        </div>
                    </a>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <a href="#" class="category d-flex align-items-start h-100">
                        <div>
                        <i class="uil uil-briefcase"></i>
                        </div>
                        <div>
                        <h3>Business</h3>
                        <span>3,234 courses</span>
                        </div>
                    </a>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <a href="#" class="category d-flex align-items-start h-100">
                        <div>
                        <i class="uil uil-calculator"></i>
                        </div>
                        <div>
                        <h3>Finance Accounting</h3>
                        <span>931 courses</span>
                        </div>
                    </a>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
                    <a href="#" class="category d-flex align-items-start h-100">
                        <div>
                        <i class="uil uil-pen"></i>
                        </div>
                        <div>
                        <h3>Design</h3>
                        <span>7,291 courses</span>
                        </div>
                    </a>
                    </div>


                    <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
                    <a href="#" class="category d-flex align-items-start h-100">
                        <div>
                        <i class="uil uil-music"></i>
                        </div>
                        <div>
                        <h3>Music</h3>
                        <span>9,114 courses</span>
                        </div>
                    </a>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
                    <a href="#" class="category d-flex align-items-start h-100">
                        <div>
                        <i class="uil uil-chart-pie"></i>
                        </div>
                        <div>
                        <h3>Marketing</h3>
                        <span>2,391 courses</span>
                        </div>
                    </a>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <a href="#" class="category d-flex align-items-start h-100">
                        <div>
                        <i class="uil uil-camera"></i>
                        </div>
                        <div>
                        <h3>Photography</h3>
                        <span>7,991 courses</span>
                        </div>
                    </a>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
                    <a href="#" class="category d-flex align-items-start h-100">
                        <div>
                        <i class="uil uil-circle-layer"></i>
                        </div>
                        <div>
                        <h3>Animation</h3>
                        <span>6,491 courses</span>
                        </div>
                    </a>
                    </div>
                </div>

                <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="400">
                    <div class="col-lg-8 text-center">
                    <p>We have more category here. <a href="#">Browse all</a></p>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Activites