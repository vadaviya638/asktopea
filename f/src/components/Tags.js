
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Tags = () => {
  
  const navigate=useNavigate()

  const callTagsPage = async ()=>{
    try {
      const res=await fetch('/tags',{
        // method:"POST",
        headers:{
          Accept:"appllication/json",
          "Content-Type":"appllication/json"
        },
        credentials:"include"
      })
      const data=await res.json()
      console.log(data);

      if(!res.status === 200){
        const error=new Error(res.error)
        throw error
      }
    } catch (error) {
      console.log(error);
      navigate('/login')
    }
  }
  useEffect(()=>{
    callTagsPage()
  },[])


  return (
    <div>

    {/* <!-- Page Content -->
    <!-- Heading Starts Here --> */}
    <div class="page-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>All The Tags</h1>
            <p><Link to="/home">Home</Link> / <span>Tags</span></p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Heading Ends Here --> */}


    


    {/* <!-- Footer Starts Here --> */}
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="footer-item">
              <div class="footer-heading">
                <h2>About Us</h2>
              </div>
              <p>Host Cloud is provided by TemplateMo for free of charge. Anyone can download and use this CSS Bootstrap template for commercial purposes.</p>
            </div>
          </div>
          
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="footer-item">
              <div class="footer-heading">
                <h2>Hosting Plans</h2>
              </div>
              <ul class="footer-list">
                <li><a href="#">Basic Cloud 5X</a></li>
                <li><a href="#">Cloud VPS 10X</a></li>
                <li><a href="#">Advanced Cloud</a></li>
                <li><a href="#">Custom Designs</a></li>
                <li><a href="#">Special Solutions</a></li>
              </ul>
            </div>
          </div>
          
          
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="footer-item">
              <div class="footer-heading">
                <h2>Useful Links</h2>
              </div>
              <ul class="footer-list">
                <li><a href="#">Cloud Hosting Platform</a></li>
                <li><a href="#">Light Speed Zone</a></li>
                <li><a href="#">Content Delivery Network</a></li>
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Latest News</a></li>
              </ul>
            </div>
          </div>
          
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="footer-item">
              <div class="footer-heading">
                <h2>More Information</h2>
              </div>
              <ul class="footer-list">
                <li>Phone: <a href="#">010-020-0560</a></li>
                <li>Email: <a href="#">mail@company.com</a></li>
                <li>Support: <a href="#">support@company.com</a></li>
                <li>Website: <a href="#">www.company.com</a></li>
              </ul>
            </div>
          </div>
         
        </div>
      </div>
    </footer>
    {/* <!-- Footer Ends Here --> */}

   
   

  
</div>
  )
}

export default Tags