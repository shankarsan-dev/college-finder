// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import CollegeDetail from './components/collegeDetail';
import Courses from './components/course';
import Degree from './components/degree';
import News from './components/news';
import Blog from './components/blog';

const App = () => {
  return (
   <>
   <Navbar/>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collegeDetail/:id" element={<CollegeDetail/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/degree" element={<Degree/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
};

export default App;
