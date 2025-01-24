import React, { useState } from 'react';
import './css/Home.css'; // Assuming you save the CSS in Home.css
import Filter from './filter'; // Import the Filter component
import trinityImage from '../assets/trinity.png'; // Adjust the path accordingly
import Footer from './Footer';
import Ads from './Ads';

const Home = () => {
  const [filters, setFilters] = useState({
    private: false,
    public: false,
    topRanked: false,
    location: '', // Single value for location
    educationLevel: [],
    mainStream: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const collegesPerPage = 9; // Changed from 5 to 6

  const handleFilterChange = (name, value, checked) => {
    if (name === 'location') {
      // Location is a single value, so directly update it
      setFilters((prevFilters) => ({ ...prevFilters, location: value }));
    } else if (name === 'educationLevel' || name === 'mainStream') {
      // Multiple selection for education level and main stream
      setFilters((prevFilters) => {
        const newValues = checked
          ? [...prevFilters[name], value]
          : prevFilters[name].filter((item) => item !== value);
        return { ...prevFilters, [name]: newValues };
      });
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
    setCurrentPage(1); // Reset to the first page on filter change
  };

  const colleges = [
    { name: 'College A', type: 'private', affiliation: 'University X', location: 'New York', mainStream: ['Engineering', 'IT'], image: trinityImage },
    { name: 'College B', type: 'public', affiliation: 'University Y', location: 'California', mainStream: ['Arts', 'Design'], image: trinityImage },
    { name: 'College C', type: 'private', affiliation: 'University Z', location: 'Texas', mainStream: ['Medicine', 'Law'], image: trinityImage },
    { name: 'College D', type: 'public', affiliation: 'University A', location: 'Florida', mainStream: ['Business', 'Science'], image: trinityImage },
    { name: 'College E', type: 'private', affiliation: 'University B', location: 'Nevada', mainStream: ['Engineering', 'Architecture'], image: trinityImage },
    { name: 'College F', type: 'public', affiliation: 'University C', location: 'Washington', mainStream: ['Law', 'Arts'], image: trinityImage },
    { name: 'College G', type: 'private', affiliation: 'University D', location: 'Ohio', mainStream: ['Education', 'Design'], image: trinityImage },
    { name: 'College H', type: 'public', affiliation: 'University E', location: 'Oregon', mainStream: ['IT', 'Business'], image: trinityImage },
    { name: 'College A', type: 'private', affiliation: 'University X', location: 'New York', mainStream: ['Engineering', 'IT'], image: trinityImage },
    { name: 'College B', type: 'public', affiliation: 'University Y', location: 'California', mainStream: ['Arts', 'Design'], image: trinityImage },
    { name: 'College C', type: 'private', affiliation: 'University Z', location: 'Texas', mainStream: ['Medicine', 'Law'], image: trinityImage },
    { name: 'College D', type: 'public', affiliation: 'University A', location: 'Florida', mainStream: ['Business', 'Science'], image: trinityImage },
    { name: 'College E', type: 'private', affiliation: 'University B', location: 'Nevada', mainStream: ['Engineering', 'Architecture'], image: trinityImage },
  ];
  

  const filteredColleges = colleges.filter((college) => {
    if (filters.private && college.type !== 'private') return false;
    if (filters.public && college.type !== 'public') return false;
    if (filters.topRanked && college.rank > 5) return false;
    if (filters.location && college.location !== filters.location) return false; // Only check if location is selected
    if (filters.educationLevel.length && !filters.educationLevel.includes(college.educationLevel)) return false;
    if (filters.mainStream.length && !filters.mainStream.some((stream) => college.mainStream.includes(stream))) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
  const startIndex = (currentPage - 1) * collegesPerPage;
  const currentColleges = filteredColleges.slice(startIndex, startIndex + collegesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Ads />
      <div className="container">
        {/* Left side - Filter Options */}
        <Filter filters={filters} onFilterChange={handleFilterChange} />

        {/* Right side - College List */}
        <div className="college-list">
          <h3>College List</h3>
          <div className="college-container">
            {currentColleges.length > 0 ? (
              currentColleges.map((college, index) => (
                <div key={index} className="college-card">
                  <img src={college.image} alt={college.name || 'College Image'} className="college-image" />
                  <div className="college-details">
                    <h4>{college.name || 'Unknown College'}</h4>
                    <p>
                      <strong>Affiliation:</strong> {college.affiliation || 'Not Affiliated'}
                    </p>
                    <p>
                      <strong>Location:</strong> {college.location || 'Unknown Location'}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No colleges match the selected filters.</p>
            )}
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      {filteredColleges.length > collegesPerPage && (
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

export default Home;
