import React from 'react';

const Filter = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === 'checkbox') {
      // Handle the checkboxes for education level or main stream
      if (name === 'educationLevel' || name === 'mainStream') {
        if (checked) {
          // Add the value if checked
          onFilterChange(name, value, true);
        } else {
          // Remove the value if unchecked
          onFilterChange(name, value, false);
        }
      } else {
        // Handle the other checkboxes (private, public, topRanked)
        onFilterChange(name, checked);
      }
    }
  };

  return (
    <div className="filters">
      <h3>Filter Options</h3>

      {/* Filter for Private Colleges */}
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

      {/* Filter for Public Colleges */}
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

      {/* Filter for Top Ranked Colleges */}
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

      {/* Location Filter - Dropdown (Single Selection) */}
      <div className="checkbox-group">
        <h4>Location:</h4>
        <select
          name="location"
          value={filters.location}
          onChange={(e) => onFilterChange('location', e.target.value)} // Only one location can be selected
        >
          <option value="">Select Location</option> {/* Default value */}
          {['New York', 'California', 'Texas', 'Florida', 'Nevada', 'Washington', 'Ohio', 'Oregon'].map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Education Level Filter - Checkboxes (Multiple Selections) */}
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

      {/* Main Stream Filter - Checkboxes (Multiple Selections) */}
      <div className="checkbox-group">
        <h4>Main Stream:</h4>
        {['Engineering', 'Arts', 'IT', 'Medicine', 'Law', 'Business', 'Design', 'Architecture', 'Science', 'Education'].map((stream) => (
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
  );
};

export default Filter;
