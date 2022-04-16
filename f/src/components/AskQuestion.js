import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ReactQuill  from "react-quill";
import { useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css"; // ES6
import { TagsInput } from "react-tag-input-component"
import "./css/AskQuestion.css"
import axios from "axios";
import { selectUser } from './Userslice';


const AskQuestion = () => {
  const user = useSelector(selectUser);
  const navigate=useNavigate()


  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  

  const handleQuill = (value) => {
    setBody(value);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title !== "" && body !== "") {
      const bodyJSON = {
        title: title,
        body: body,
        tag: JSON.stringify(tags),
        user: user,
      };
      await axios
        .post("/api/questions", bodyJSON)
        .then((res) => {
          // console.log(res.data);
          alert("Question added successfully");
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };



  const callAskQuestionPage = async ()=>{
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
      // console.log(data)

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
    callAskQuestionPage()
  },[])


  return (

   <div  className="mainn pl-3 pr-3 pt-5 pb-5 " >
    <div >
     {/* <div class="page-heading header-text ">
        <div class="container pb-5"> */}
        


     <div className="add-question    " >
      <div className="add-question-container">
        <div className="head-title">
          <h1 >Ask a public question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3 style={{textAlign:'left'}}>Title</h3>
                <small style={{textAlign:'left'}}>
                  Be specific and imagine you’re asking a question to another 
                  person
                </small>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g Is there an R function for finding teh index of an element in a vector?"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3 style={{textAlign:'left'}}>Body</h3>
                <small style={{textAlign:'left'}}>
                  Include all the information someone would need to answer your
                  question
                </small>
                <ReactQuill
          className="react-quill"
          theme="snow"
                   value={body}
                   onChange={handleQuill}
                    // modules={Editor.modules}
                   />
              </div>
            </div>
            <div className="question-option"   >
              <div className="title">
                <h3 style={{textAlign:'left'}}>Tags</h3>
                <small style={{textAlign:'left'}}>
                  Add up to 5 tags to describe what your question is about
                </small>
                {/* <input
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  data-role="tagsinput"
                  data-tag-trigger="Space"
                  type="text"
                  placeholder="e.g. (asp.net-mvc php react json)"
                /> */}

                 <TagsInput 
                  value={tags}
                  onChange={setTags}
                  name="tags"
                  placeHolder="press enter to add new tag"
                /> 

                {/* <ChipsArray /> */}
              </div  >
            </div>
          </div>
        </div>
        <div class="ma pb-4 mt-2">
        <button type='submit'
         onClick={handleSubmit} 
        className="button-59" role="button" >
          Add your question
        </button>
      </div>
    </div>
    </div>
       </div>
    </div>
    
  )
}

export default AskQuestion