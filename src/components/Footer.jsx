import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">College Discover</h2>
          <p className="text-sm">
            Discover the best colleges, courses, and opportunities. Your future starts here.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                Colleges
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.508 1.493-3.89 3.777-3.89 1.095 0 2.24.195 2.24.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.874h2.773l-.443 2.89h-2.33V21.88C18.343 21.13 22 16.991 22 12z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.92 9.92 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.868 9.868 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149 4.918 4.918 0 003.15 9.722a4.903 4.903 0 01-2.23-.616v.061a4.918 4.918 0 003.946 4.827 4.92 4.92 0 01-2.224.085 4.923 4.923 0 004.6 3.417A9.868 9.868 0 010 19.54a13.9 13.9 0 007.548 2.212c9.055 0 14.001-7.496 14.001-13.986 0-.21-.005-.423-.015-.633A10.025 10.025 0 0024 4.557z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.307.975.975 1.245 2.242 1.307 3.608.058 1.266.07 1.646.07 4.852s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.307 3.608-.975.975-2.242 1.245-3.608 1.307-1.266.058-1.646.07-4.852.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.307-.975-.975-1.245-2.242-1.307-3.608-.058-1.266-.07-1.646-.07-4.852s.012-3.584.07-4.85c.062-1.366.332-2.633 1.307-3.608.975-.975 2.242-1.245 3.608-1.307 1.266-.058 1.646-.07 4.852-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.387.062-2.676.35-3.665 1.339-1.015 1.014-1.29 2.314-1.348 3.665-.058 1.286-.072 1.688-.072 4.947s.014 3.667.072 4.947c.062 1.387.35 2.676 1.339 3.665 1.014 1.015 2.314 1.29 3.665 1.348 1.286.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.387-.062 2.676-.35 3.665-1.339 1.015-1.014 1.29-2.314 1.348-3.665.058-1.286.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.062-1.387-.35-2.676-1.339-3.665-1.014-1.015-2.314-1.29-3.665-1.348-1.286-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.163a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100-2.881 1.44 1.44 0 000 2.881z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} College Discover. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
