import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'


const Navbar = () => {
  const {state, dispatch} = useContext(UserContext)

const Loginlogout=()=>{
  
  if (!state) {
    return(
      <>
      
     
      <li><Link to="/logout">Logout</Link></li>
           

      </>
    )
  }else if (state) {
    return(
      <>
      <li><Link to="/login">Login</Link></li>

      </>
    )
  } 
  else{
    return(
      <>
      <li><Link to="/login">Login</Link></li>
     
           
    </>
    )
  }
}


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
              <li>
                <Link style={{display: "none"}} to="/askquestion">askquestion</Link>
              </li> 
              <li>
                <Link style={{display: "none"}} to="/seeque">seeque</Link>
              </li> 
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact Us</Link>
              </li>

             
            </ul>
          </div>
          <div class="functional-buttons">
            <ul>
    
              <li><Link style={{visibility: "hidden"}} to="/signup">Sign up</Link></li>
      <Loginlogout />
          
            </ul>
          </div>
          {/* <div class="functional-buttons">
            <ul>
    
              <li><Link style={{visibility: "hidden"}} to="/signup">Sign up</Link></li>
              <li><Link to="/login">Log in</Link></li>
            </ul>
          </div> */}
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Navbar