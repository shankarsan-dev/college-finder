import React from 'react';

const Filter = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === 'checkbox') {
      if (name === 'location' || name === 'mainStream' || name === 'educationLevel') {
        onFilterChange(name, value, checked);
      } else {
        onFilterChange(name, checked);
      }
    }
  };

  return (
    <div className="filters">
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

      {/* Location Filter - Checkboxes */}
      <div className="checkbox-group">
        <h4>Location:</h4>
        <div className="location-scroll">
          {['New York', 'California', 'Texas', 'Florida', 'Nevada', 'Washington', 'Chicago', 'Ohio', 'Miami', 'Los Angeles'].map((loc) => (
            <div key={loc} className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="location"
                  value={loc}
                  checked={filters.location.includes(loc)}
                  onChange={(e) => handleCheckboxChange(e)}
                />
                {loc}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Education Level Filter - Checkboxes */}
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

      {/* Main Stream Filter - Checkboxes */}
      <div className="checkbox-group">
        <h4>Main Stream:</h4>
        <div className="main-stream-scroll">
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
    </div>
  );
};

export default Filter;
