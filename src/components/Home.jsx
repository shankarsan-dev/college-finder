import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import trinityImage from '../assets/trinity.png'; // You can remove this if your images come from the API
import Ads from './Ads';
import './css/Home.css'; // Assuming you save the CSS in Home.css
import Filter from './Filter'; // Import the Filter component
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate(); // Hook to navigate to other routes
  const [colleges, setColleges] = useState([]);
  const [filters, setFilters] = useState({
    private: false,
    public: false,
    topRanked: false,
    location: '', // City filter
    educationLevel: [],
    mainStream: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const collegesPerPage = 12;

  // Fetching data when the component mounts
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with your API endpoint
        const data = await response.json();
        console.log('API Response:', data); // Log the response to inspect
        if (data && Array.isArray(data)) {
          setColleges([{
            "id": 1,
            "college_name": "Thames International College",
            "university_name": "Tribhuvan University",
            "address": "Surya Bikram Gyawali Marg, Old Baneshwor, Kathmandu",
            "image_src": "https://media.edusanjal.com/_sized/cover_photo/thames-cover-crop-c0-5_0-5-302x128-70.jpg",
            "image_file_name": "Thames International College.jpg"
          },
          {
            "id": 2,
            "college_name": "Texas College of Management and IT",
            "university_name": "Lincoln University College",
            "address": "Siphal, Kathmandu",
            "image_src": "https://media.edusanjal.com/_sized/cover_photo/TCMIT-Edusanjal_CEMceMm-crop-c0-5_0-5-302x128-70.jpg",
            "image_file_name": "Texas College of Management and IT.jpg"
          },
          {
            "id": 3,
            "college_name": "Ace Institute of Management",
            "university_name": "Pokhara University",
            "address": "Bibhuti Janak Marg, New Baneshwor, Kathmandu",
            "image_src": "https://media.edusanjal.com/_sized/org_cover/ace_cover_2-crop-c0-5_0-5-302x128-70.jpg",
            "image_file_name": "Ace Institute of Management.jpg"
          }]); // Sample data, replace with real data
        } else {
          setColleges([]); // Fallback to empty array if no data or incorrect structure
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setColleges([]); // Ensure colleges is set to an empty array in case of error
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
    
    // City filtering: Extract the city from the address and compare with the selected city
    if (filters.location && college.address) {
      const addressParts = college.address.split(', ');
      const city = addressParts[addressParts.length - 1]; // Assuming the city is the last part
      if (city !== filters.location) return false;
    }

    return true;
  });

  const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
  const startIndex = (currentPage - 1) * collegesPerPage;
  const currentColleges = filteredColleges.slice(startIndex, startIndex + collegesPerPage);

  const handleCardClick = (id) => {
    navigate(`/collegeDetail/${id}`); // Navigate to the CollegeDetail page with the id
  };

  return (
    <>
      <Ads />
      <div className="container">
        <Filter filters={filters} onFilterChange={handleFilterChange} />
        <div className="college-list">
          <h3>College List</h3>
          <motion.div className="college-container">
            {currentColleges.length > 0 ? (
              currentColleges.map((college) => (
                <motion.div
                  key={college.id}
                  className="college-card"
                  onClick={() => handleCardClick(college.id)} // Add click handler
                >
                  <img
                    src={college.image_src || trinityImage} // Fallback to default image if none found
                    alt={college.college_name || 'College Image'}
                    className="college-image"
                  />
                  <div className="college-details">
                    <h4>{college.college_name || 'Unknown College'}</h4>
                    <p>
                      <strong>Affiliation:</strong> {college.university_name || 'Not Affiliated'}
                    </p>
                    <p>
                      <strong>Location:</strong> {college.address || 'Unknown Location'}
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
      <Footer />
    </>
  );
};

export default Home;
