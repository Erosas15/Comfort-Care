import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import About from './Components/About';

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
