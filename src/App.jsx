// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import './index.css';


const App = () => {
  return (
   <>

   <Navbar/>

   <p>gg</p>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
      
       
      </Routes>
    </BrowserRouter>
   </>
  );
};

export default App;
