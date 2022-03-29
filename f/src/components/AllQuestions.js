import React from 'react'
import { Link } from 'react-router-dom'
import './css/AllQuestions.css'

const AllQuestions = () => {
  return (
    <div className="all-questions pl-3 pr-3">
    <div className="all-questions-container ">
      <div className="all-questions-left ">
        <div className="all-options">
          <div className="all-option">
            <p>0</p>
            <span>votes</span>
          </div>
          <div className="all-option">
            <span>answers</span>
          </div>
          <div className="all-option">
            <small>0 views</small> 
          </div>
        </div>
      </div>
     <div className="question-answer">
        <Link to='/queans'>This is question </Link>


        <div
          style={{
            maxWidth: "90%",
          }}
        >
          <div>This is answer</div>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <span className='question-tags'>react</span>
          <span className='question-tags'>fronted</span>
          <span className='question-tags'>mern</span>
         
          
        </div> 
        <div className="author" >
          <small >Timestamp</small>
          <div className="auth-details">
          <i class="fa fa-user" ><p>User name</p></i>
            
          </div>
        </div>
      </div> 
    </div>
  </div>
  )
}

export default AllQuestions