import React from 'react'

const Home = () => {
  return (
    <div>

    {/* <!-- Page Content -->
    <!-- Banner Starts Here --> */}
    <div class="banner">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="header-text caption">
              <h2>Ask your question</h2>
              <div id="search-section">
              	<form id="suggestion_form" name="gs" method="get" action="#">
                <div class="searchText">
                  
                  <input type="text" name="q" class="searchText" placeholder="Enter your question here..." autocomplete="on"/>
                  
                </div>
                    <input type="submit" name="results" class="main-button" value="Search Now"/>
                 </form>
               <div class="advSearch_chkbox">
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    

    
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
 
</div>
  )
}

export default Home