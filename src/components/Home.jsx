import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import trinityImage from '../assets/trinity.png'; // You can remove this if your images come from the API
import Ads from './Ads';
import './css/Home.css'; // Assuming you save the CSS in Home.css
import Filter from './Filter'; // Import the Filter component
import Footer from './Footer';

const Home = () => {
  // State for college data
  const [colleges, setColleges] = useState([]);
  const [filters, setFilters] = useState({
    private: false,
    public: false,
    topRanked: false,
    location: '',
    educationLevel: [],
    mainStream: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const collegesPerPage = 12;

  // Fetching data when the component mounts
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch('/api/colleges'); // Replace with your API endpoint
        const data = await response.json();
        setColleges(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchColleges();
  }, []);

  const handleFilterChange = (name, value, checked) => {
    if (name === 'location') {
      setFilters((prevFilters) => ({ ...prevFilters, location: value }));
    } else if (name === 'educationLevel' || name === 'mainStream') {
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
    setCurrentPage(1); // Reset to first page when filters change
  };

  const filteredColleges = colleges.filter((college) => {
    if (filters.private && college.type !== 'private') return false;
    if (filters.public && college.type !== 'public') return false;
    if (filters.topRanked && college.rank > 5) return false;
    if (filters.location && college.location !== filters.location) return false;
    if (filters.educationLevel.length && !filters.educationLevel.some(level => college.educationLevel.includes(level))) return false;
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

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <>
      <Ads />
      <div className="container">
        <Filter filters={filters} onFilterChange={handleFilterChange} />

        <div className="college-list">
          <h3>College List</h3>
          <motion.div
            className="college-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentColleges.length > 0 ? (
              currentColleges.map((college, index) => (
                <motion.div
                  key={index}
                  className="college-card"
                  variants={cardVariants}
                >
                  <img
                    src={college.image || trinityImage} // Fallback to default image if none found
                    alt={college.name || 'College Image'}
                    className="college-image"
                  />
                  <div className="college-details">
                    <h4>{college.name || 'Unknown College'}</h4>
                    <p>
                      <strong>Affiliation:</strong> {college.affiliation || 'Not Affiliated'}
                    </p>
                    <p>
                      <strong>Location:</strong> {college.location || 'Unknown Location'}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <p>No colleges match the selected filters.</p>
            )}
          </motion.div>
        </div>
      </div>

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
