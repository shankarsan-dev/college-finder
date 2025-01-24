import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="logo">
        <h3>Logo</h3>
      </div>
        <div className="information-links">
          <h4>Information</h4>
        <a href="#">FAQs</a>
          <a href="#">About Us</a>
          <a href="#">Our Team</a>
          <a href="#">Advertising Policy</a>
          <a href="#">Terms of Use</a>
         <a href="#">Privacy Policy</a>
        </div>
      <div className="contact">
        <h4>Contact</h4>
        <p>Company Pvt. Ltd</p>
        <p>Address</p>
        <p>Phone Number</p>
        <p>company@gmail.com</p>
      </div>
      <div className="quick-links">
        <h4>Quick Llinks</h4>
        <p>Courses</p>
        <p>College</p>
        <p>Degree</p>
        <p>Exams</p>
        <p>Schools</p>
        <p>Admission</p>
        <p>News</p>
        <p>Blogs</p>
      </div>
      
    </footer>
  );
};

export default Footer;
