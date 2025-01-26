// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import CollegeDetail from './components/collegeDetail';

const App = () => {
  return (
   <>
   <Navbar/>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collegeDetail" element={<CollegeDetail/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
};

export default App;
