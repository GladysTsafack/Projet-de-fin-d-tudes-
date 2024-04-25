import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './composant/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div class="untree_co-hero overlay header">


    <div class="container">
      <div class="row align-items-center justify-content-center">

        <div class="col-12">

          <div class="row justify-content-center ">

            <div class="col-lg-6 text-center ">
              <a href="https://vimeo.com/342333493" data-fancybox data-aos="fade-up" data-aos-delay="0" class="caption mb-4 d-inline-block">Watch the video</a>

              <h1 class="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Education is the Mother of Leadership</h1>
              <p class="mb-0" data-aos="fade-up" data-aos-delay="300"><a href="#" class="btn btn-secondary">Explore courses</a></p>

            </div>


          </div>

        </div>

      </div>
    </div>

  </div>
    </>
  )
}

export default App
