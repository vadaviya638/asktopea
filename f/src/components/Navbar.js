import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>  
    {/* <!-- ***** Preloader End ***** --> */}

    {/* <!-- Header --> */}
    <header class="">
      <nav class="navbar navbar-expand-lg navbar-light " >
        <div class="container">
          <Link class="navbar-brand" to="/home"><h2>Ask <em>Topea</em></h2></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/home">Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/question">Questions</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/tags">Tags</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div class="functional-buttons">
            <ul>
              <li><Link to="/login">Log in</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Navbar