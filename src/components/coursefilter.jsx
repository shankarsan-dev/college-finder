import React from 'react';

const Filter = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'educationLevel' || name === 'mainStream') {
      onFilterChange(name, value, checked);
    }
  };

  return (
    <div className="filters">
      <h3>Filter Options</h3>

      {/* Education Level Filter */}
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
                onChange={handleCheckboxChange}
              />
              {level === 'bachelor' ? "Bachelor's" : '+2'}
            </label>
          </div>
        ))}
      </div>

      {/* Main Stream Filter */}
      <div className="checkbox-group">
        <h4>Main Stream:</h4>
        {['Engineering', 'Arts', 'IT', 'Medicine', 'Business', 'Design', 'Education'].map((stream) => (
          <div key={stream} className="checkbox">
            <label>
              <input
                type="checkbox"
                name="mainStream"
                value={stream}
                checked={filters.mainStream.includes(stream)}
                onChange={handleCheckboxChange}
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
