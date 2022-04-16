import React, { createContext, useReducer, useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './authentication/Login';
import Logout from './authentication/Logout';
import Signup from './authentication/Signup';
import AskQuestion from './components/AskQuestion';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import QueAns from './components/QueAns';
import Question from './components/Question';

import Tags from './components/Tags';

import { initialState, reducer } from './components/reducer/UseReducer';


//context api
export const UserContext= createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

//   const [statet , setstatet]=useState('')
//    statet={
//     auth:0,
//   }
//  const loginHandler = (e) =>{
//     setstatet({auth: !statet.auth})
//   }
  
  return (
    <div>
      <UserContext.Provider value={{state, dispatch}}>
      <Navbar 
      />
      {/* login={(e)=>{loginHandler(e)}} status={statet.auth}  */}
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tags' element={<Tags/>}/>
        <Route path='/question' element={<Question/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/queans' element={<QueAns/>}/>
        <Route path='/askquestion' element={<AskQuestion/>}/>
        
       
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
