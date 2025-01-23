import React, { useState } from 'react';
import './css/Home.css'; // Assuming you save the CSS in App.css

const Home = () => {
  const [filters, setFilters] = useState({
    private: false,
    public: false,
    topRanked: false,
  });
//
//  
  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const colleges = [
    { name: 'College A', type: 'private', rank: 1 },
    { name: 'College B', type: 'public', rank: 5 },
    { name: 'College C', type: 'private', rank: 10 },
    { name: 'College D', type: 'public', rank: 3 },
    { name: 'College E', type: 'private', rank: 8 },
  ];

  const filteredColleges = colleges.filter((college) => {
    if (filters.private && college.type !== 'private') return false;
    if (filters.public && college.type !== 'public') return false;
    if (filters.topRanked && college.rank > 5) return false;
    return true;
  });

  return (
    <div className="container">
      {/* Left side - Filter Options */}
      <div className="filters">
        <h3>Filter Options</h3>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="private"
              checked={filters.private}
              onChange={handleFilterChange}
            />
            Private Colleges
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="public"
              checked={filters.public}
              onChange={handleFilterChange}
            />
            Public Colleges
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="topRanked"
              checked={filters.topRanked}
              onChange={handleFilterChange}
            />
            Top Ranked Colleges
          </label>
        </div>
      </div>

      {/* Right side - College List */}
      <div className="college-list">
        <h3>College List</h3>
        <ul>
          {filteredColleges.map((college, index) => (
            <li key={index}>
              {college.name} - {college.type} - Rank: {college.rank}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
