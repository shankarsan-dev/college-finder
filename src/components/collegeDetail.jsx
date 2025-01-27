import React from 'react';
import './css/CollegeDetail.css';
import Footer from './Footer';

const CollegeDetail = () => {
  return (

    <>
    <div className="college-detail-container">
      {/* Photo Section with One Image and Logo */}
      <div className="photo-header-container">
        <div className="photo-container">
          <img
            src="https://media.edusanjal.com/__sized__/cover_photo/thames-cover-thumbnail-1400x280-70.jpg"
            alt="College Banner"
            className="college-photo"
          />
          {/* College Logo */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9Gso2xaPC5vbsfREg5AxHwVGWwkii6eFtA&s"
            alt="College Logo"
            className="college-logo"
          />
        </div>

        <div className="college-header">
          <div className="college-info-side">
            <h1>College Name</h1>
            <p>College Address</p>
          </div>
        </div>
      </div>

      {/* Rest of the layout */}
      <div className="college-info">
        <div className="left-column">
          <h3>Introduction</h3>
          <p>Brief introduction about the college.</p>

          <h3>Offered Programs</h3>
          <ul>
            <li>Program 1</li>
            <li>Program 2</li>
            <li>Program 3</li>
          </ul>

          <h3>And many more...</h3>
        </div>

        <div className="center-column">
          <h3>College Description</h3>
          <p>Detailed description of the college, its history, and values.</p>

          <h3>Offered Programs</h3>
          <ul>
            <li>Program 1</li>
            <li>Program 2</li>
            <li>Program 3</li>
          </ul>
        </div>

        <div className="right-column">
          <h3>Affiliation</h3>
          <p>Details about the college's affiliation.</p>

          <h3>Private or Public Institution</h3>
          <p>Private/ Public Institution information.</p>

          <h3>Contact</h3>
          <p>Contact number: xxx-xxx-xxxx</p>

          <h3>Email</h3>
          <p>email@example.com</p>

          {/* Map Section */}
          <div className="college-map">
            <h3>Location on Map</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <h3>Gallery</h3>
        <div className="gallery-grid">
          {[...Array(10)].map((_, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={`src\assets\collegebg.png`}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section - Moved below Gallery */}
      <div className="about-us-section">
        <h3>About Us</h3>
        <p>
          Welcome to [College Name], an institution committed to providing a high-quality education. Founded in [Year], we have a long history of academic excellence and have continually adapted to meet the changing demands of modern education. Our dedicated faculty and state-of-the-art facilities ensure that students receive the best possible learning experience. Whether you're interested in pursuing a degree in the arts, sciences, business, or technology, [College Name] is the place to help you achieve your goals.
        </p>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default CollegeDetail;
