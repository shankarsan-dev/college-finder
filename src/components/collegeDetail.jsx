import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate
import './css/CollegeDetail.css';
import Footer from './Footer';

const CollegeDetail = () => {
  const { id } = useParams();
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCollegeData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/colleges/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch college data');
        }
        const data = await response.json();
        
        setCollege(data
          //{
        //   "address": "Surya Bikram Gyawali Marg, Old Baneshwor, Kathmandu",
        //   "college_id": 1,
        //   "college_name": "Thames International College",
        //   "college_logo": "https://media.edusanjal.com/_sized_/logos/thames-college-thumbnail-200x200.png",
        //   "cover_image": "https://media.edusanjal.com/_sized_/cover_photo/thames-cover-thumbnail-1400x280-70.jpg",
        //   "detailed_info": "Thames International College, located in Baneshwor, is a leading academic institution offering a variety of undergraduate programs...",
        //   "offered_program": "Bachelor of Business Administration (BBA) - 64 Seats, Bachelor of Information Management (BIM) - 64 Seats, Bachelor of Arts in Social Work (BASW) - 32 Seats",
        //   "additional_details": "Tribhuvan University, Private Institution, 01-5971224, info@thamescollege.edu.np",
        //   "map_url": "https://www.google.com/maps/?q=27.701667450376043,85.34187196479105"
        // }
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCollegeData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!college) {
    return <p>No college found.</p>;
  }

  const [affiliation, institutionType, contact, email] = college.additional_details.split(',');

  return (
    <>
      <div className="college-detail-container">
        {/* Photo Section with One Image and Logo */}
        <div className="photo-header-container">
          <div className="photo-container">
            <img
              src={college.cover_image}
              alt={`${college.college_name} Banner`}
              className="college-photo"
            />
            {/* College Logo */}
            <img
              src={college.college_logo}
              alt={`${college.college_name} Logo`}
              className="college-logo"
            />
          </div>

          <div className="college-header">
            <div className="college-info-side">
              <h1>{college.college_name}</h1>
              <p>{college.address}</p>
            </div>
          </div>
        </div>

        {/* Rest of the layout */}
        <div className="college-info">
          <div className="left-column">
            <h3>Advertisement</h3>
            {/* Placeholder for ads, replace with actual ad content */}
            <div className="ad-placeholder">
              <p>Advertisement here</p>
              {/* You could embed an ad iframe here */}
            </div>
          </div>

          <div className="center-column">
            <h3>College Description</h3>
            <p>{college.detailed_info}</p>

            <h3>Offered Programs</h3>
            <ul className="program-list">
              {college.offered_program.split(',').map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>
          </div>

          <div className="right-column">
            <div className="top-section">
              <h3>Affiliation</h3>
              <p>{affiliation}</p>

              <h3>Private or Public Institution</h3>
              <p>{institutionType}</p>
            </div>

            <div className="bottom-section">
              <h3>Contact</h3>
              <p>{contact}</p>

              <h3>Email</h3>
              <p>{email}</p>

              {/* Map Section */}
              <div className="college-map">
                <h3>Location on Map</h3>
                <img
                  src="https://via.placeholder.com/800x300.png?text=Demo+Map" // Replace with your map image URL
                  alt="Demo Map"
                  width="100%"
                  height="300"
                  onClick={() => window.location.href = college.map_url} // Navigate to map URL on click
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="about-us-section">
          <h3>About Us</h3>
          <p>{college.detailed_info}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CollegeDetail;
