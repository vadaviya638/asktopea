import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import AskQuestion from './components/AskQuestion';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import QueAns from './components/QueAns';
import Question from './components/Question';

import Tags from './components/Tags';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tags' element={<Tags/>}/>
        <Route path='/question' element={<Question/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/queans' element={<QueAns/>}/>
        <Route path='/askquestion' element={<AskQuestion/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
