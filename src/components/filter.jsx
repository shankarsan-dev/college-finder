import React, { useEffect, useState } from 'react';

const Filter = ({ filters, onFilterChange, availableCities }) => {
  const [isFiltersVisible, setFiltersVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setFiltersVisible(true); // Always show filters on desktop
      } else {
        setFiltersVisible(false); // Hide filters on mobile by default
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

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
      <button className="toggle-filters-button" onClick={toggleFilters}>
        {isFiltersVisible ? 'Hide Filters' : 'Show Filters'}
      </button>

      <div className={`filters ${isFiltersVisible ? 'visible' : 'hidden'}`}>
        <button className="close-filters-button" onClick={toggleFilters}>
          ✖
        </button>

        <h3>Filter Options</h3>

        {/* Checkbox for Private Colleges */}
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

        {/* Checkbox for Public Colleges */}
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

        {/* Checkbox for Top Ranked Colleges */}
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

        {/* Dropdown for Location */}
        <div className="checkbox-group">
          <h4>Location:</h4>
          <select
            name="location"
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
          >
            <option value="">All Locations</option>
            {availableCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Education Level Filters */}
        <div className="checkbox-group">
          <h4>Education Level:</h4>
          {['Bachelor', '+2'].map((level) => (
            <div key={level} className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="educationLevel"
                  value={level}
                  checked={filters.educationLevel.includes(level)}
                  onChange={(e) => handleCheckboxChange(e)}
                />
                {level === 'Bachelor' ? "Bachelor's" : '+2'}
              </label>
            </div>
          ))}
        </div>

        {/* Main Stream Filters */}
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
