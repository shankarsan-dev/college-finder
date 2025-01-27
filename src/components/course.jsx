import React, { useState } from 'react';
import CourseFilter from './CourseFilter';
import './css/Course.css';
import Footer from './Footer';

const Courses = () => {
  const [filters, setFilters] = useState({
    educationLevel: [],
    mainStream: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 12;
  const [filterVisible, setFilterVisible] = useState(false); // Initially hidden on mobile

  const courses = [
    { name: 'Introduction to Engineering', mainStream: 'Engineering', educationLevel: 'bachelor', description: 'Basics of Engineering concepts.' },
    { name: 'Advanced IT Systems', mainStream: 'IT', educationLevel: 'bachelor', description: 'Study of IT architecture and systems.' },
    { name: 'Arts & Design Basics', mainStream: 'Arts', educationLevel: '+2', description: 'Introduction to Arts and Design.' },
    { name: 'Medical Fundamentals', mainStream: 'Medicine', educationLevel: 'bachelor', description: 'Overview of Medical practices.' },
    { name: 'Business Management', mainStream: 'Business', educationLevel: 'bachelor', description: 'Core Business Management skills.' },
    { name: 'Introduction to Engineering', mainStream: 'Engineering', educationLevel: 'bachelor', description: 'Basics of Engineering concepts.' },
    { name: 'Advanced IT Systems', mainStream: 'IT', educationLevel: 'bachelor', description: 'Study of IT architecture and systems.' },
    { name: 'Arts & Design Basics', mainStream: 'Arts', educationLevel: '+2', description: 'Introduction to Arts and Design.' },
    { name: 'Medical Fundamentals', mainStream: 'Medicine', educationLevel: 'bachelor', description: 'Overview of Medical practices.' },
    { name: 'Business Management', mainStream: 'Business', educationLevel: 'bachelor', description: 'Core Business Management skills.' },
    
    { name: 'Introduction to Engineering', mainStream: 'Engineering', educationLevel: 'bachelor', description: 'Basics of Engineering concepts.' },
    { name: 'Advanced IT Systems', mainStream: 'IT', educationLevel: 'bachelor', description: 'Study of IT architecture and systems.' },
    { name: 'Arts & Design Basics', mainStream: 'Arts', educationLevel: '+2', description: 'Introduction to Arts and Design.' },
    { name: 'Medical Fundamentals', mainStream: 'Medicine', educationLevel: 'bachelor', description: 'Overview of Medical practices.' },
    { name: 'Business Management', mainStream: 'Business', educationLevel: 'bachelor', description: 'Core Business Management skills.' },
    { name: 'Introduction to Engineering', mainStream: 'Engineering', educationLevel: 'bachelor', description: 'Basics of Engineering concepts.' },
    { name: 'Advanced IT Systems', mainStream: 'IT', educationLevel: 'bachelor', description: 'Study of IT architecture and systems.' },
    { name: 'Arts & Design Basics', mainStream: 'Arts', educationLevel: '+2', description: 'Introduction to Arts and Design.' },
    { name: 'Medical Fundamentals', mainStream: 'Medicine', educationLevel: 'bachelor', description: 'Overview of Medical practices.' },
    { name: 'Business Management', mainStream: 'Business', educationLevel: 'bachelor', description: 'Core Business Management skills.' },
    { name: 'Legal Principles', mainStream: 'Law', educationLevel: '+2', description: 'Basics of law and legal studies.' },
    { name: 'Architectural Design', mainStream: 'Architecture', educationLevel: 'bachelor', description: 'Foundations of architectural design.' },
  ];

  const handleFilterChange = (name, value, checked) => {
    setFilters((prevFilters) => {
      const newValues = checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter((item) => item !== value);
      return { ...prevFilters, [name]: newValues };
    });
  };

  const filteredCourses = courses.filter((course) => {
    if (filters.educationLevel.length && !filters.educationLevel.includes(course.educationLevel)) return false;
    if (filters.mainStream.length && !filters.mainStream.includes(course.mainStream)) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
   <>
    <div className="courses-container">
      {/* Mobile filter toggle button */}
      <button 
        className="filter-toggle-button" 
        onClick={() => setFilterVisible(!filterVisible)}
      >
        show Filters
      </button>

      {/* Left side - Course Filter */}
      <CourseFilter 
        filters={filters} 
        onFilterChange={handleFilterChange} 
        filterVisible={filterVisible} 
      />

      {/* Right side - Course List */}
      <div className="course-list">
        <h3>Course List</h3>
        <div className="course-container">
          {currentCourses.length > 0 ? (
            currentCourses.map((course, index) => (
              <div key={index} className="course-card">
                <h4>{course.name}</h4>
                <p><strong>Stream:</strong> {course.mainStream}</p>
                <p><strong>Education Level:</strong> {course.educationLevel === 'bachelor' ? "Bachelor's" : '+2'}</p>
                <p>{course.description}</p>
              </div>
            ))
          ) : (
            <p>No courses match the selected filters.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="pagination-container">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    <div style={{margin:'20px'}}>


    </div>
    <Footer/>
   </>
  );
};

export default Courses;
