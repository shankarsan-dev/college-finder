import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#37AFE1", // Updated background color
    color: "white",
    padding: "2rem 1rem",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem", // Added top margin here
  };

  const footerContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "1200px",
  };

  const footerSectionStyle = {
    margin: "1rem",
    flex: 1,
    minWidth: "250px",
  };

  const headingStyle = {
    fontSize: "1.25rem",
    marginBottom: "0.75rem",
    color: "#f8f8f8",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
  };

  const listItemStyle = {
    margin: "0.5rem 0",
  };

  const linkStyle = {
    color: "#f8f8f8",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#ff6600",
  };

  const socialIconsStyle = {
    display: "flex",
    gap: "1rem",
  };

  const socialIconStyle = {
    fontSize: "1.5rem",
    color: "#f8f8f8",
    transition: "color 0.3s ease",
  };

  const socialIconHoverStyle = {
    color: "#ff6600",
  };

  const footerBottomStyle = {
    textAlign: "center",
    marginTop: "2rem",
    fontSize: "0.875rem",
    color: "#bbb",
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={footerSectionStyle}>
          <h4 style={headingStyle}>Quick Links</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <a href="#" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>
                Home
              </a>
            </li>
            <li style={listItemStyle}>
              <a href="#" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>
                College
              </a>
            </li>
            <li style={listItemStyle}>
              <a href="#" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>
                Courses
              </a>
            </li>
          </ul>
        </div>

        <div style={footerSectionStyle}>
          <h4 style={headingStyle}>Contact</h4>
          <p>Phone: +977-123456789</p>
          <p>Email: info@iims.edu.np</p>
        </div>

        <div style={footerSectionStyle}>
          <h4 style={headingStyle}>Useful Links</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <a href="#" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>
                Privacy Policy
              </a>
            </li>
            <li style={listItemStyle}>
              <a href="#" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>
                Terms of Use
              </a>
            </li>
          </ul>
        </div>

        <div style={footerSectionStyle}>
          <h4 style={headingStyle}>Follow Us</h4>
          <div style={socialIconsStyle}>
            <a href="#" style={socialIconStyle} onMouseOver={e => e.target.style.color = socialIconHoverStyle.color} onMouseOut={e => e.target.style.color = socialIconStyle.color}>📘</a>
            <a href="#" style={socialIconStyle} onMouseOver={e => e.target.style.color = socialIconHoverStyle.color} onMouseOut={e => e.target.style.color = socialIconStyle.color}>🐦</a>
            <a href="#" style={socialIconStyle} onMouseOver={e => e.target.style.color = socialIconHoverStyle.color} onMouseOut={e => e.target.style.color = socialIconStyle.color}>📸</a>
            <a href="#" style={socialIconStyle} onMouseOver={e => e.target.style.color = socialIconHoverStyle.color} onMouseOut={e => e.target.style.color = socialIconStyle.color}>🔗</a>
          </div>
        </div>
      </div>

      <div style={footerBottomStyle}>
        <p style={{color:'#333333'}}>&copy; 2025 excellent College. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
