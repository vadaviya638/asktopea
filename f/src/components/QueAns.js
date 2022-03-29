import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './css/QueAns.css'

const QueAns = () => {
  
    const [show, setShow]=useState(false);
  
  return (
    <div>
      <div className="main pl-3 pr-3 pt-5 pb-5">
      <div className="main-container pt-5 ">
        <div className="main-top ">
          
          <h2 className="main-question" style={{textAlign:''}}>This is question title</h2>
          <Link to="/askquestion" >
            <button class="btn btn-primary float-right" >Ask Question</button>
          </Link>
          {/* <a href="/add-question">
            <button>Ask Question</button> 
          </a> */}
        </div>
        <div className="main-desc">
          <div className="info">
            <p>
             Timestamp
            </p>
            <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>43times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <p className="arrow">▲</p>

                <p className="arrow">0</p>

                <p className="arrow">▼</p>

                {/* <BookmarkIcon />

                <HistoryIcon /> */}
              </div>
            </div>
            <div className="question-answer">
              <p>this is question body</p>

              <div className="author">
                <small>
                  asked "Timestamp"
                </small>
                <div className="auth-details">
                <i class="fa fa-user" ><p>
                    Auther name
                  </p></i>
                
                  
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  <p>this is comment - <span>user name</span></p>
                      <small>Timestamp</small>
                    
                </div>
                <p onClick={() => setShow(!show)}>Add a comment</p>
                {show && (
                  <div className="title">
                    <textarea
                      style={{
                        margin: "5px 0px",
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                     
                      type="text"
                      placeholder="Add your comment..."
                      rows={5}
                    />
                    <button
                      // onClick={handleComment}
                      style={{
                        maxWidth: "fit-content",
                        cursor: "pointer"

                      }}
                    >
                      Add comment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
          }}
          className="all-questions"
        >
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            No of Answers
          </p>
         
          <>
              <div
                style={{
                  borderBottom: "1px solid #eee",
                }}
                
                className="all-questions-container"
              >
                <div className="all-questions-left">
                  <div className="all-options">
                    <p className="arrow">▲</p>

                    <p className="arrow">0</p>

                    <p className="arrow">▼</p>

                    {/* <BookmarkIcon />

                    <HistoryIcon /> */}
                  </div>
                </div>
                <div className="question-answer">
                  <p>this is question body</p>
                  <div className="author">
                    <small>
                      asked "Timestamp"
                    </small>
                    <div className="auth-details">
                <i class="fa fa-user" ><p>
                       Author name
                      </p></i>
                     
                      
                    </div>
                  </div>
                </div>
              </div>
            </>
        
        </div>
        {/* <div className="questions">
          <div className="question">
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
          </div>
        </div> */}
      </div>
      <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <ReactQuill
          className="react-quill"
          theme="snow"
          style={{
            height: "200px",
          }}
        />
      </div>
      <button
        
        style={{
          cursor: "pointer",
          marginTop: "50px",
          maxWidth: "fit-content",
        }}
      >
        Post your answer
      </button>
    </div>
    </div>
        
  )
}

export default QueAns