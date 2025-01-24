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

  const handleFilterChange = (name, value, checked) => {
    if (name === 'location' || name === 'mainStream' || name === 'educationLevel') {
      // Handle multi-selection (location, educationLevel, or mainStream)
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
  ];

  const filteredColleges = colleges.filter((college) => {
    if (filters.private && college.type !== 'private') return false;
    if (filters.public && college.type !== 'public') return false;
    if (filters.topRanked && college.rank > 5) return false;
    if (filters.location.length && !filters.location.includes(college.location)) return false;
    return true;
  });

  return (
   <>
    <div className="container">
      {/* Left side - Filter Options */}
      <Filter filters={filters} onFilterChange={handleFilterChange} />

      {/* Right side - College List */}
      <div className="college-list">
        <h3>College List</h3>
        <div className="college-container">
          {filteredColleges.map((college, index) => (
            <div key={index} className="college-card">
              <img src={college.image} alt={college.name} className="college-image" />
              <div className="college-details">
                <h4>{college.name}</h4>
                <p><strong>Affiliation:</strong> {college.affiliation}</p>
                <p><strong>Location:</strong> {college.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default Home;
