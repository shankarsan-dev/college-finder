import React, { useState } from 'react';
import Filter from './coursefilter';

const coursesData = [
  { id: 1, name: 'Engineering Basics', educationLevel: 'bachelor', mainStream: 'Engineering' },
  { id: 2, name: 'Introduction to Arts', educationLevel: '+2', mainStream: 'Arts' },
  { id: 3, name: 'IT for Beginners', educationLevel: 'bachelor', mainStream: 'IT' },
  { id: 4, name: 'Advanced Medicine', educationLevel: 'bachelor', mainStream: 'Medicine' },
  { id: 5, name: 'Business Fundamentals', educationLevel: '+2', mainStream: 'Business' },
  { id: 6, name: 'Creative Design', educationLevel: 'bachelor', mainStream: 'Design' },
  { id: 7, name: 'Educational Psychology', educationLevel: '+2', mainStream: 'Education' },
];

export default function Course() {
  const [filters, setFilters] = useState({
    educationLevel: [],
    mainStream: [],
  });

  const handleFilterChange = (name, value, add) => {
    setFilters((prev) => {
      const updated = { ...prev };
      if (add) {
        updated[name] = [...prev[name], value];
      } else {
        updated[name] = prev[name].filter((item) => item !== value);
      }
      return updated;
    });
  };

  const filteredCourses = coursesData.filter((course) => {
    const matchesEducationLevel =
      filters.educationLevel.length === 0 || filters.educationLevel.includes(course.educationLevel);
    const matchesMainStream =
      filters.mainStream.length === 0 || filters.mainStream.includes(course.mainStream);

    return matchesEducationLevel && matchesMainStream;
  });

  return (
    <div className="course-container">
      {/* Filter Section */}
      <div className="filters-container">
        <Filter filters={filters} onFilterChange={handleFilterChange} />
      </div>

      {/* Courses Section */}
      <div className="courses-container">
        <h3>Available Courses</h3>
        {filteredCourses.length > 0 ? (
          <div className="card-grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="card">
                <h4>{course.name}</h4>
                <p><strong>Education Level:</strong> {course.educationLevel === 'bachelor' ? "Bachelor's" : '+2'}</p>
                <p><strong>Main Stream:</strong> {course.mainStream}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No courses match the selected filters.</p>
        )}
      </div>
    </div>
  );
}
