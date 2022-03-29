
import React from 'react'
import { Link } from 'react-router-dom'
import AllQuestions from './AllQuestions'
import './css/Main.css'

const Question = () => {
  return (
    <div>

      {/* <!-- Page Content -->
    <!-- Heading Starts Here --> */}
      <div class="page-heading header-text">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <Link to="/askquestion">
                <button type="button" class="btn btn-primary" >Ask Question</button>
              </Link>
              <h1></h1>
              <p><Link to="/home">Home</Link> / <span>Questions</span></p>
            </div>
          </div>
        </div>
      </div > 
      {/* <!-- Heading Ends Here --> */}

      <div class="text-center mt-2"><h4>All Questions</h4></div><br />

      <div className='main pl-3 pr-3'>
        <div className='main-container' >
          <div className='main-desc '>
            <p>All question stat</p>
            <div className='main-filter'>
              <div className='main-tabs'>
                <div className='main-tab'>
                  <Link to=''>Newest</Link>
                </div>
                <div className='main-tab'>
                  <Link to=''>Active</Link>
                </div>
                <div className='main-tab'>
                  <Link to=''>More</Link>
                </div>
              </div>
                <div className='main-filter-item'>
                <i class="fa fa-filter"></i>                 
                 <p >Filter</p>
                </div>
            </div>
          </div>
          <div className='alquestions'>
            <div className='alquestion'>
                  <AllQuestions />
                  <AllQuestions />
                  <AllQuestions />
                  <AllQuestions />
                  <AllQuestions />
                  <AllQuestions />
            </div>
          </div>
        </div>
      </div>




      {/* <!-- Footer Starts Here --> */}
      <footer class="mt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="footer-item">
                <div class="footer-heading">
                  <h2>Question</h2>
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



    </div>
  )
}

export default Question
