import React, { useState } from 'react';
import './css/Home.css'; // Assuming you save the CSS in Home.css
import Filter from './filter'; // Import the Filter component
import trinityImage from '../assets/trinity.png'; // Adjust the path accordingly
import Footer from './Footer';

const Home = () => {
  const [filters, setFilters] = useState({
    private: false,
    public: false,
    topRanked: false,
    location: [],
    educationLevel: [],
    mainStream: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const collegesPerPage = 5;

  const handleFilterChange = (name, value, checked) => {
    if (name === 'location' || name === 'mainStream' || name === 'educationLevel') {
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
    {
      name: 'College A',
      type: 'private',
      affiliation: 'University X',
      location: 'New York',
      image: trinityImage,
    },
    {
      name: 'College B',
      type: 'public',
      affiliation: 'University Y',
      location: 'California',
      image: trinityImage,
    },
    {
      name: 'College C',
      type: 'private',
      affiliation: 'University Z',
      location: 'Texas',
      image: trinityImage,
    },
    {
      name: 'College D',
      type: 'public',
      affiliation: 'University A',
      location: 'Florida',
      image: trinityImage,
    },
    {
      name: 'College E',
      type: 'private',
      affiliation: 'University B',
      location: 'Nevada',
      image: trinityImage,
    },
    {
      name: 'College F',
      type: 'public',
      affiliation: 'University C',
      location: 'Washington',
      image: trinityImage,
    },
    {
      name: 'College G',
      type: 'private',
      affiliation: 'University D',
      location: 'Ohio',
      image: trinityImage,
    },
    {
      name: 'College H',
      type: 'public',
      affiliation: 'University E',
      location: 'Oregon',
      image: trinityImage,
    },
  ];

  const filteredColleges = colleges.filter((college) => {
    if (filters.private && college.type !== 'private') return false;
    if (filters.public && college.type !== 'public') return false;
    if (filters.topRanked && college.rank > 5) return false;
    if (filters.location.length && !filters.location.includes(college.location)) return false;
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
                  <img src={college.image} alt={college.name || "College Image"} className="college-image" />
                  <div className="college-details">
                    <h4>{college.name || "Unknown College"}</h4>
                    <p>
                      <strong>Affiliation:</strong> {college.affiliation || "Not Affiliated"}
                    </p>
                    <p>
                      <strong>Location:</strong> {college.location || "Unknown Location"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No colleges match the selected filters.</p>
            )}
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
