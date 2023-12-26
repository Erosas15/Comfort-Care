import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css';
import HomePage from '../HomePage/HomePage';
import About from '../AboutPage/AboutPage';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;