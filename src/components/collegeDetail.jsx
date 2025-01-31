import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdSchool, MdLocationCity, MdPhone, MdEmail, MdPlace } from 'react-icons/md';
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
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error('Failed to fetch college data');
        }

        setCollege({
          "address": "Surya Bikram Gyawali Marg, Old Baneshwor, Kathmandu",
          "college_id": 1,
          "college_name": "Thames International College",
          "college_logo": "https://media.edusanjal.com/_sized_/logos/thames-college-thumbnail-200x200.png",
          "cover_image": "https://media.edusanjal.com/_sized_/cover_photo/thames-cover-thumbnail-1400x280-70.jpg",
          "detailed_info": "Thames International College, located in Baneshwor, is a leading academic institution offering a variety of undergraduate programs...",
          "offered_program": "Bachelor of Business Administration (BBA) - 64 Seats, Bachelor of Information Management (BIM) - 64 Seats, Bachelor of Arts in Social Work (BASW) - 32 Seats",
          "additional_details": "Tribhuvan University, Private Institution, 01-5971224, info@thamescollege.edu.np",
          "map_url": "https://www.google.com/maps/?q=27.701667450376043,85.34187196479105"
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCollegeData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!college) return <p>No college found.</p>;

  const [affiliation, institutionType, contact, email] = college.additional_details.split(',');

  return (
    <>
      <div className="college-detail-container">
        <div className="photo-header-container">
          <div className="photo-container">
            <img src={college.cover_image} alt={`${college.college_name} Banner`} className="college-photo" />
            <img src={college.college_logo} alt={`${college.college_name} Logo`} className="college-logo" />
          </div>
          <div className="college-header">
            <div className="college-info-side">
              <h1>{college.college_name}</h1>
              <p>{college.address}</p>
            </div>
          </div>
        </div>

        <div className="college-info">
          <div className="left-column">
            <h3>Advertisement</h3>
            <div className="ad-placeholder">
              <p>Advertisement here</p>
            </div>
          </div>

          <div className="center-column">
            <h3>College Description</h3>
            <p>{college.detailed_info}</p>

            <h3>Offered Programs</h3>
            <ul className="program-list">
              {college.offered_program.split(',').map((program, index) => (
                <li key={index} className="program-item">
                  {program.trim()}
                </li>
              ))}
            </ul>
          </div>

          <div className="right-column" style={{backgroundColor:''}}>
            <div className="top-section">
              <div className="info-item">
                <MdSchool className="icon" />
                <p>{affiliation}</p>
              </div>
              <div className="info-item">
                <MdLocationCity className="icon" />
                <p>{institutionType}</p>
              </div>
            </div>

            <div className="bottom-section">
              <div className="info-item">
                <MdPhone className="icon" />
                <p>{contact}</p>
              </div>
              <div className="info-item">
                <MdEmail className="icon" />
                <p>{email}</p>
              </div>
              <div className="info-item" onClick={() => window.location.href = college.map_url}>
                <MdPlace className="icon" />
                <p>View on Map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollegeDetail;
