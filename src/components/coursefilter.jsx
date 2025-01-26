import React, { useState, useEffect } from 'react';

const FilterCourse = ({ filters, onFilterChange }) => {
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
      if (name === 'category' || name === 'educationLevel') {
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

        <div className="checkbox-group">
          <h4>Categories:</h4>
          {['Engineering', 'Business', 'IT', 'Design', 'Arts', 'Science', 'Medicine', 'Law', 'Education'].map((category) => (
            <div key={category} className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="category"
                  value={category}
                  checked={filters.category.includes(category)}
                  onChange={(e) => handleCheckboxChange(e)}
                />
                {category}
              </label>
            </div>
          ))}
        </div>

        <div className="checkbox-group">
          <h4>Educational Level:</h4>
          {['+2', 'bachelor'].map((level) => (
            <div key={level} className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="educationLevel"
                  value={level}
                  checked={filters.educationLevel.includes(level)}
                  onChange={(e) => handleCheckboxChange(e)}
                />
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCourse;
