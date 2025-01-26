import React, { useState, useEffect } from 'react';
import './css/Course.css'; // Assuming you save the CSS in Course.css
import Filter from './coursefilter'; // Import the Filter component
import Footer from './Footer';
import Ads from './Ads';

const Course = () => {
  const [filters, setFilters] = useState({
    courseType: '', // Single value for course type
    category: [], // Multiple categories can be selected
    location: '', // Single value for location
    educationLevel: [], // Multiple education levels can be selected
    mainStream: [], // Multiple main streams can be selected
  });

  const [courses, setCourses] = useState([]); // State to store courses fetched from server
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6; // Number of courses per page

  // Fetch data from the server
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        // // Replace with your API endpoint
        console.log(response);
        
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses([
          {
            "name": "Course A",
            "type": "online",
            "category": ["IT", "Design"],
            "location": "Online",
            "educationLevel": ["bachelor"],
            "mainStream": ["Engineering"],
            "duration": "6 months"
          },
          {
            "name": "Course gggB",
            "type": "offline",
            "category": ["Business", "Finance"],
            "location": "California",
            "educationLevel": ["+2"],
            "mainStream": ["Law"],
            "duration": "12 months"
          },
          {
            "name": "Course C",
            "type": "online",
            "category": ["Engineering"],
            "location": "New York",
            "educationLevel": ["bachelor"],
            "mainStream": ["Engineering"],
            "duration": "9 months"
          },
          {
            "name": "Course D",
            "type": "offline",
            "category": ["Law", "Science"],
            "location": "Texas",
            "educationLevel": ["bachelor"],
            "mainStream": ["Medicine"],
            "duration": "8 months"
          },
          {
            "name": "Course E",
            "type": "online",
            "category": ["Design", "Architecture"],
            "location": "Online",
            "educationLevel": ["bachelor"],
            "mainStream": ["Design"],
            "duration": "6 months"
          },
          {
            "name": "Course F",
            "type": "offline",
            "category": ["Medicine"],
            "location": "Florida",
            "educationLevel": ["+2"],
            "mainStream": ["Medicine"],
            "duration": "12 months"
          },
          {
            "name": "Course G",
            "type": "online",
            "category": ["Business", "IT"],
            "location": "Washington",
            "educationLevel": ["bachelor"],
            "mainStream": ["IT"],
            "duration": "10 months"
          },
          {
            "name": "Course H",
            "type": "offline",
            "category": ["Arts"],
            "location": "Nevada",
            "educationLevel": ["+2"],
            "mainStream": ["Arts"],
            "duration": "5 months"
          },
          {
            "name": "Course I",
            "type": "online",
            "category": ["Engineering"],
            "location": "Online",
            "educationLevel": ["bachelor"],
            "mainStream": ["Engineering"],
            "duration": "6 months"
          },
          {
            "name": "Course J",
            "type": "offline",
            "category": ["Law"],
            "location": "Oregon",
            "educationLevel": ["bachelor"],
            "mainStream": ["Law"],
            "duration": "9 months"
          }
        ]
        );
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleFilterChange = (name, value, checked) => {
    if (name === 'category' || name === 'educationLevel' || name === 'mainStream') {
      setFilters((prevFilters) => {
        const updatedFilter = checked
          ? [...prevFilters[name], value]
          : prevFilters[name].filter((item) => item !== value);
        return { ...prevFilters, [name]: updatedFilter };
      });
    } else {
      setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    }
    setCurrentPage(1); // Reset to the first page on filter change
  };

  const filteredCourses = courses.filter((course) => {
    if (filters.courseType && course.type !== filters.courseType) return false;
    if (filters.location && course.location !== filters.location) return false;
    if (filters.category.length && !filters.category.some((category) => course.category.includes(category))) return false;
    if (filters.educationLevel.length && !filters.educationLevel.some((level) => course.educationLevel.includes(level))) return false;
    if (filters.mainStream.length && !filters.mainStream.some((stream) => course.mainStream.includes(stream))) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (isLoading) {
    return <p>Loading courses...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Ads />
      <div className="container">
        {/* Left side - Filter Options */}
        <Filter filters={filters} onFilterChange={handleFilterChange} />

        {/* Right side - Course List */}
        <div className="course-list">
          <h3>Course List</h3>
          <div className="course-container">
            {currentCourses.length > 0 ? (
              currentCourses.map((course, index) => (
                <div key={index} className="course-card">
                  <div className="course-details">
                    <h4>{course.name || 'Unknown Course'}</h4>
                    <p>
                      <strong>Education Level:</strong> {course.educationLevel.join(', ') || 'Not Specified'}
                    </p>
                    <p>
                      <strong>Duration:</strong> {course.duration || 'Not Specified'}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No courses match the selected filters.</p>
            )}
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      {filteredCourses.length > coursesPerPage && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Course;
