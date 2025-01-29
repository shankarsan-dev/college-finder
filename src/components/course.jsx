import React, { useState, useEffect } from 'react';
import CourseFilter from './CourseFilter';
import './css/Course.css';
import Footer from './Footer';

const Courses = () => {
  const [filters, setFilters] = useState({
    educationLevel: [],
    mainStream: [],
    duration: [],
  });

  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterVisible, setFilterVisible] = useState(false);
  const coursesPerPage = 12;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with actual API URL
        const data = await response.json();
        setCourses([ {
          "course_id": 1,
          "course_name": "Ten Plus Two (+2) Science",
          "board_name": "National Examinations Board",
          "duration_date": "2 years"
        },
        {
          "course_id": 2,
          "course_name": "Ten Plus Two (+2) Management",
          "board_name": "National Examinations Board",
          "duration_date": "2 years"
        }]);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleFilterChange = (name, value, checked) => {
    setFilters((prevFilters) => {
      const newValues = checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter((item) => item !== value);
      return { ...prevFilters, [name]: newValues };
    });
  };

  const filteredCourses = courses.filter((course) => {
    if (filters.educationLevel.length && !filters.educationLevel.includes(course.board_name)) return false;
    if (filters.mainStream.length && !filters.mainStream.includes(course.course_name)) return false;
    if (filters.duration.length && !filters.duration.includes(course.duration_date)) return false;
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
        <button 
          className="filter-toggle-button" 
          onClick={() => setFilterVisible(!filterVisible)}
        >
          Show Filters
        </button>

        <CourseFilter 
          filters={filters} 
          onFilterChange={handleFilterChange} 
          filterVisible={filterVisible} 
        />

        <div className="course-list">
          <h3>Course List</h3>
          <div className="course-container">
            {currentCourses.length > 0 ? (
              currentCourses.map((course) => (
                <div key={course.course_id} className="course-card">
                  <h4>{course.course_name}</h4>
                  <p><strong>Board:</strong> {course.board_name}</p>
                  <p><strong>Duration:</strong> {course.duration_date}</p>
                </div>
              ))
            ) : (
              <p>No courses match the selected filters.</p>
            )}
          </div>

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
      <Footer />
    </>
  );
};

export default Courses;
