// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import './index.css';
const App = () => {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
};

export default App;
