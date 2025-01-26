import React, { useState, useEffect } from 'react';

const Filter = ({ filters, onFilterChange }) => {
  const [isFiltersVisible, setFiltersVisible] = useState(false);

  // Update visibility based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setFiltersVisible(true); // Always show filters on desktop
      } else {
        setFiltersVisible(false); // Hide filters on mobile
      }
    };

    // Initialize on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCheckboxChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === 'checkbox') {
      if (name === 'educationLevel' || name === 'mainStream') {
        if (checked) {
          onFilterChange(name, value, true);
        } else {
          onFilterChange(name, value, false);
        }
      } else {
        onFilterChange(name, checked);
      }
    }
  };

  const toggleFilters = () => {
    setFiltersVisible(!isFiltersVisible);
  };

  return (
    <div className="filters-wrapper">
      {/* Toggle Filters Button (Hamburger/Show Filters Button) */}
      <button className="toggle-filters-button" onClick={toggleFilters}>
        {isFiltersVisible ? 'Hide Filters' : 'Show Filters'}
      </button>

      {/* Filter Section */}
      <div className={`filters ${isFiltersVisible ? 'visible' : 'hidden'}`}>
        {/* Close Filters Button */}
        <button className="close-filters-button" onClick={toggleFilters}>
          ✖
        </button>

        <h3>Filter Options</h3>

        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="private"
              checked={filters.private}
              onChange={(e) => handleCheckboxChange(e)}
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
              onChange={(e) => handleCheckboxChange(e)}
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
              onChange={(e) => handleCheckboxChange(e)}
            />
            Top Ranked Colleges
          </label>
        </div>

        <div className="checkbox-group">
          <h4>Location:</h4>
          <select
            name="location"
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
          >
            <option value="">Select Location</option>
            {['New York', 'California', 'Texas', 'Florida', 'Nevada', 'Washington', 'Ohio', 'Oregon'].map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="checkbox-group">
          <h4>Education Level:</h4>
          {['bachelor', '+2'].map((level) => (
            <div key={level} className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="educationLevel"
                  value={level}
                  checked={filters.educationLevel.includes(level)}
                  onChange={(e) => handleCheckboxChange(e)}
                />
                {level === 'bachelor' ? "Bachelor's" : '+2'}
              </label>
            </div>
          ))}
        </div>

        <div className="checkbox-group">
          <h4>Main Stream:</h4>
          {[ 
            'Engineering',
            'Arts',
            'IT',
            'Medicine',
            'Law',
            'Business',
            'Design',
            'Architecture',
            'Science',
            'Education',
          ].map((stream) => (
            <div key={stream} className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="mainStream"
                  value={stream}
                  checked={filters.mainStream.includes(stream)}
                  onChange={(e) => handleCheckboxChange(e)}
                />
                {stream}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
