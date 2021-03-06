
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEamil =(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_0ji7bxd', 'template_81mekpe',e.target, 'tWmt8VcjCMXpdm0Lv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      e.target.reset()
  }
 
  const navigate=useNavigate()

  const callContactPage = async ()=>{
    try {
      const res=await fetch('/contact',{
        // method:"POST",
        headers:{
          Accept:"appllication/json",
          "Content-Type":"appllication/json"
        },
        credentials:"include"
      })
      const data=await res.json()
      // console.log(data);

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
    callContactPage()
  },[])

  return (
    <div>

    {/* // <!-- Page Content -->
    // <!-- Heading Starts Here --> */}
    <div class="page-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Contact Us</h1>
            <p><Link to="/home">Home</Link> / <span>Contact Us</span></p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Heading Ends Here --> */}


    {/* <!-- Contact Us Starts Here --> */}
    <div class="contact-us">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="contact-form">
              <form id="contact" action="" method="POST" onSubmit={sendEamil}>
                <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <fieldset>
                      <input name="name" type="text" id="name" placeholder="Your name" required/>
                    </fieldset>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <fieldset>
                      <input name="email" type="text" id="email" placeholder="Your email" required/>
                    </fieldset>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <fieldset>
                      <input name="subject" type="text" id="subject" placeholder="Subject" required/>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" rows="6" id="message" placeholder="Your message" required></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="main-button mb-3">Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form> 
          </div>
          </div>
          <div class="col-md-6">
            <div class="right-content">
              <div class="section-heading">
                <span>Contact Us</span>
                <h2>Let's keep in touch</h2>
                <p>Quisque sagittis blandit sapien et elementum. Fusce pretium viverra consequat. Aliquam at feugiat mi. Pellentesque hendrerit, felis ac sodales commodo.</p>
              </div>
              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <ul>
                    <li><i class="fa fa-phone"></i> 010-020-0560</li>
                    <li><i class="fa fa-globe"></i> www.asktopea.com</li>
                  </ul>
                </div>
                <div class="col-md-6 col-sm-12">
                  <ul>
                    <li><i class="fa fa-support"></i> support@asktopea</li>
                    <li><i class="fa fa-envelope"></i> contact@asktopea</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Contact Us Ends Here --> */}


    
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

export default Contact