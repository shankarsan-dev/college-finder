// // // // import React, { useState } from 'react';
// // // // import './css/Navbar.css';

// // // // function Navbar() {
// // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// // // //   const toggleMobileMenu = () => {
// // // //     setIsMobileMenuOpen(!isMobileMenuOpen);
// // // //   };

// // // //   return (
// // // //     <nav className="navbar">
// // // //       <div className="top-container">
// // // //         {/* Logo */}
// // // //         <div className="logo">College Discover</div>

// // // //         {/* Search Bar */}
// // // //         <div className="search-bar">
// // // //           <input type="text" placeholder="Search colleges, Courses..." />
// // // //           <button>
// // // //             <svg
// // // //               xmlns="http://www.w3.org/2000/svg"
// // // //               height="24px"
// // // //               viewBox="0 -960 960 960"
// // // //               width="24px"
// // // //               fill="#000000"
// // // //             >
// // // //               <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 
// // // //                 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75
// // // //                  52.5 127.5T380-400Z" />
// // // //             </svg>
// // // //           </button>
// // // //         </div>
// // // //         {/* Hamburger Menu */}
// // // //         <div className="hamburger-menu" onClick={toggleMobileMenu}>
// // // //           <div></div>
// // // //           <div></div>
// // // //           <div></div>
// // // //         </div>

// // // //       {/* Navigation Links */}
// // // //       <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
// // // //       <div className="search-bar1" style={{}}>
// // // //           <input type="text" placeholder="Search colleges, Courses..." />
// // // //           <button>
// // // //             <svg
// // // //               xmlns="http://www.w3.org/2000/svg"
// // // //               height="24px"
// // // //               viewBox="0 -960 960 960"
// // // //               width="24px"
// // // //               fill="#000000"
// // // //             >
// // // //               <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 
// // // //                 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75
// // // //                  52.5 127.5T380-400Z" />
// // // //             </svg>
// // // //           </button>
// // // //         </div>
// // // //         <li><a href="/">Home</a></li>
// // // //         <li><a href="/course">Course</a></li>
// // // //         <li><a href="/news">News</a></li>
// // // //         <li><a href="/blogs">Blogs</a></li>
// // // //       </ul>
// // // //       </div>
// // // //     </nav>
    
// // // //   );
// // // // }

// // // // export default Navbar;
// // // import React, { useEffect, useState } from "react";
// // // import "./css/Navbar.css";

// // // function Navbar() {
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [searchResults, setSearchResults] = useState([]);
// // //   const [showSuggestions, setShowSuggestions] = useState(false);
// // //   const [navSearchTerm, setNavSearchTerm] = useState("");
// // //   const [navSearchResults, setNavSearchResults] = useState([]);
// // //   const [showNavSuggestions, setShowNavSuggestions] = useState(false);

// // //   const toggleMobileMenu = () => {
// // //     setIsMobileMenuOpen(!isMobileMenuOpen);
// // //   };

// // //   // Fetch search results for main search bar
// // //   useEffect(() => {
// // //     if (searchTerm.trim() === "") {
// // //       setSearchResults([]);
// // //       setShowSuggestions(false);
// // //       return;
// // //     }

// // //     const fetchResults = async () => {
// // //       try {
// // //         const response = await fetch(`https://your-api-endpoint.com/search?query=${searchTerm}`);
// // //         const data = await response.json();
// // //         setSearchResults(data);
// // //         setShowSuggestions(true);
// // //       } catch (error) {
// // //         console.error("Error fetching search results:", error);
// // //       }
// // //     };

// // //     const delaySearch = setTimeout(fetchResults, 300);
// // //     return () => clearTimeout(delaySearch);
// // //   }, [searchTerm]);

// // //   // Fetch search results for navigation search bar
// // //   useEffect(() => {
// // //     if (navSearchTerm.trim() === "") {
// // //       setNavSearchResults([]);
// // //       setShowNavSuggestions(false);
// // //       return;
// // //     }

// // //     const fetchResults = async () => {
// // //       try {
// // //         const response = await fetch(`https://your-api-endpoint.com/search?query=${navSearchTerm}`);
// // //         const data = await response.json();
// // //         setNavSearchResults(data);
// // //         setShowNavSuggestions(true);
// // //       } catch (error) {
// // //         console.error("Error fetching search results:", error);
// // //       }
// // //     };

// // //     const delaySearch = setTimeout(fetchResults, 300);
// // //     return () => clearTimeout(delaySearch);
// // //   }, [navSearchTerm]);

// // //   return (
// // //     <nav className="navbar">
// // //       <div className="top-container">
// // //         <div className="logo">College Discover</div>
        
// // //         <div className="search-bar">
// // //           <input
// // //             type="text"
// // //             placeholder="Search colleges, courses..."
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //             onFocus={() => setShowSuggestions(true)}
// // //             onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
// // //           />
// // //           <button>
// // //             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
// // //               <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 
// // //                 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
// // //             </svg>
// // //           </button>
// // //           {showSuggestions && searchResults.length > 0 && (
// // //             <div className="search-results">
// // //               {searchResults.map((result, index) => (
// // //                 <div key={index} className="search-item" onClick={() => setSearchTerm(result.name)}>
// // //                   {result.name}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>

// // //         <div className="hamburger-menu" onClick={toggleMobileMenu}>
// // //           <div></div>
// // //           <div></div>
// // //           <div></div>
// // //         </div>

// // //         <ul className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
// // //           <li><a href="/">Home</a></li>
// // //           <li><a href="/course">Course</a></li>
// // //           <li><a href="/news">News</a></li>
// // //           <li><a href="/blogs">Blogs</a></li>
// // //           <li>
// // //             <input
// // //               type="text"
// // //               placeholder="Search..."
// // //               value={navSearchTerm}
// // //               onChange={(e) => setNavSearchTerm(e.target.value)}
// // //               onFocus={() => setShowNavSuggestions(true)}
// // //               onBlur={() => setTimeout(() => setShowNavSuggestions(false), 200)}
// // //             />
// // //             {showNavSuggestions && navSearchResults.length > 0 && (
// // //               <div className="search-results">
// // //                 {navSearchResults.map((result, index) => (
// // //                   <div key={index} className="search-item" onClick={() => setNavSearchTerm(result.name)}>
// // //                     {result.name}
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </li>
// // //         </ul>
// // //       </div>
// // //     </nav>
// // //   );
// // // }

// // // export default Navbar;
// // import React, { useEffect, useState } from "react";
// // import "./css/Navbar.css";

// // function Navbar() {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [searchResults, setSearchResults] = useState([]);
// //   const [showSuggestions, setShowSuggestions] = useState(false);
// //   const [navSearchTerm, setNavSearchTerm] = useState("");
// //   const [navSearchResults, setNavSearchResults] = useState([]);
// //   const [showNavSuggestions, setShowNavSuggestions] = useState(false);

// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen(!isMobileMenuOpen);
// //   };

// //   // Fetch search results for main search bar
// //   useEffect(() => {
// //     if (searchTerm.trim() === "") {
// //       setSearchResults([]);
// //       setShowSuggestions(false);
// //       return;
// //     }

// //     const fetchResults = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:8000/api/colleges/search/${searchTerm}`);
// //         const data = await response.json();
// //         console.log(data);
// //         setSearchResults(data);
// //         setShowSuggestions(true);
// //       } catch (error) {
// //         console.error("Error fetching search results:", error);
// //       }
// //     };

// //     const delaySearch = setTimeout(fetchResults, 300);
// //     return () => clearTimeout(delaySearch);
// //   }, [searchTerm]);

// //   // Fetch search results for navigation search bar
// //   useEffect(() => {
// //     if (navSearchTerm.trim() === "") {
// //       setNavSearchResults([]);
// //       setShowNavSuggestions(false);
// //       return;
// //     }

// //     const fetchResults = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:8000/api/colleges/search/${navSearchTerm}`);
// //         const data = await response.json();
// //         setNavSearchResults(data);
// //         setShowNavSuggestions(true);
// //       } catch (error) {
// //         console.error("Error fetching search results:", error);
// //       }
// //     };

// //     const delaySearch = setTimeout(fetchResults, 300);
// //     return () => clearTimeout(delaySearch);
// //   }, [navSearchTerm]);

// //   return (
// //     <nav className="navbar">
// //       <div className="top-container">
// //         <div className="logo">College Discover</div>
        
// //         <div className="search-bar">
// //           <input
// //             type="text"
// //             placeholder="Search colleges, courses..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             onFocus={() => setShowSuggestions(true)}
// //             onBlur={() => setTimeout(() => setShowSuggestions(false), 50)}
// //           />
// //           <button>
// //             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
// //               <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 
// //                 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
// //             </svg>
// //           </button>
// //           {showSuggestions && searchResults.length > 0 && (
// //             <div className="search-results">
// //               {searchResults.map((result, index) => (
// //                 <div key={index} className="search-item" onClick={() => setSearchTerm(result.college_name)}>
// //                   {result.college_name}
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         <div className="hamburger-menu" onClick={toggleMobileMenu}>
// //           <div></div>
// //           <div></div>
// //           <div></div>
// //         </div>

// //         <ul className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
// //           <li><a href="/">Home</a></li>
// //           <li><a href="/course">Course</a></li>
// //           <li><a href="/news">News</a></li>
// //           <li><a href="/blogs">Blogs</a></li>
// //           <li>
             
// //         <div className="search-bar1">
// //           <input
// //             type="text"
// //             placeholder="Search colleges, courses..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             onFocus={() => setShowSuggestions(true)}
// //             onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
// //           />
// //           <button>
// //             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
// //               <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 
// //                 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
// //             </svg>
// //           </button>
// //           {showSuggestions && searchResults.length > 0 && (
// //             <div className="search-results1">
// //               {searchResults.map((result, index) => (
// //                 <div key={index} className="search-item" onClick={() => setSearchTerm(result.college_name)}>
// //                 {result.college_name}
// //               </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// import React, { useEffect, useState } from "react";
// import "./css/Navbar.css";

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
//   // Main search state
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
  
//   // Navigation search (for mobile view) state
//   const [navSearchTerm, setNavSearchTerm] = useState("");
//   const [navSearchResults, setNavSearchResults] = useState([]);
//   const [showNavSuggestions, setShowNavSuggestions] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Fetch search results for main search bar
//   useEffect(() => {
//     if (searchTerm.trim() === "") {
//       setSearchResults([]);
//       setShowSuggestions(false);
//       return;
//     }

//     const fetchResults = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/api/colleges/search/${searchTerm}`);
//         const data = await response.json();
//         console.log("Main search results:", data);
//         setSearchResults(data);
//         setShowSuggestions(true);
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       }
//     };

//     const delaySearch = setTimeout(fetchResults, 300);
//     return () => clearTimeout(delaySearch);
//   }, [searchTerm]);

//   // Fetch search results for navigation search bar
//   useEffect(() => {
//     if (navSearchTerm.trim() === "") {
//       setNavSearchResults([]);
//       setShowNavSuggestions(false);
//       return;
//     }

//     const fetchResults = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/api/colleges/search/${navSearchTerm}`);
//         const data = await response.json();
//         console.log("Nav search results:", data);
//         setNavSearchResults(data);
//         setShowNavSuggestions(true);
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       }
//     };

//     const delaySearch = setTimeout(fetchResults, 300);
//     return () => clearTimeout(delaySearch);
//   }, [navSearchTerm]);

//   return (
//     <nav className="navbar">
//       <div className="top-container">
//         <div className="logo">College Discover</div>

//         {/* Main Search Bar */}
//         <div className="search-bar-container">
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search colleges, courses..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onFocus={() => setShowSuggestions(true)}
//               onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//             />
//             <button>
//               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
//                 <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
//               </svg>
//             </button>
//             {showSuggestions && searchResults.length > 0 && (
//               <div className="search-results" onMouseDown={(e) => e.preventDefault()}>
//                 {searchResults.map((result, index) => (
//                   <div
//                     key={index}
//                     className="search-item"
//                     onClick={() => setSearchTerm(result.college_name)}
//                   >
//                     {result.college_name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Hamburger Menu */}
//         <div className="hamburger-menu" onClick={toggleMobileMenu}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>

//         {/* Navigation Links */}
//         <ul className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
//           <li>
//             {/* Navigation (mobile) Search Bar */}
//             <div className="search-bar1">
//               <input
//                 type="text"
//                 placeholder="Search colleges, courses..."
//                 value={navSearchTerm}
//                 onChange={(e) => setNavSearchTerm(e.target.value)}
//                 onFocus={() => setShowNavSuggestions(true)}
//                 onBlur={() => setTimeout(() => setShowNavSuggestions(false), 200)}
//               />
//               <button>
//                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
//                   <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
//                 </svg>
//               </button>
//               {showNavSuggestions && navSearchResults.length > 0 && (
//                 <div className="search-results1" onMouseDown={(e) => e.preventDefault()}>
//                   {navSearchResults.map((result, index) => (
//                     <div
//                       key={index}
//                       className="search-item"
//                       onClick={() => setNavSearchTerm(result.college_name)}
//                     >
//                       {result.college_name}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </li>
//           <li><a href="/">Home</a></li>
//           <li><a href="/course">Course</a></li>
//           <li><a href="/news">News</a></li>
//           <li><a href="/blogs">Blogs</a></li>
          
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import React, { useEffect, useState } from "react";
// import "./css/Navbar.css";

// function Navbar() {
//   // Desktop search state
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   // Mobile search state (for search-bar1)
//   const [navSearchTerm, setNavSearchTerm] = useState("");
//   const [navSearchResults, setNavSearchResults] = useState([]);
//   const [showNavSuggestions, setShowNavSuggestions] = useState(false);

//   // Mobile menu toggle state
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Hide suggestions when user scrolls
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowSuggestions(false);
//       setShowNavSuggestions(false);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Desktop search: fetch results based on searchTerm
//   useEffect(() => {
//     if (searchTerm.trim() === "") {
//       setSearchResults([]);
//       setShowSuggestions(false);
//       return;
//     }

//     const fetchResults = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8000/api/colleges/search/${searchTerm}`
//         );
//         const data = await response.json();
//         console.log("Desktop search results:", data);
//         setSearchResults(data);
//         setShowSuggestions(true);
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       }
//     };

//     const delaySearch = setTimeout(fetchResults, 300);
//     return () => clearTimeout(delaySearch);
//   }, [searchTerm]);

//   // Mobile search: fetch results based on navSearchTerm
//   useEffect(() => {
//     if (navSearchTerm.trim() === "") {
//       setNavSearchResults([]);
//       setShowNavSuggestions(false);
//       return;
//     }

//     const fetchResults = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8000/api/colleges/search/${navSearchTerm}`
//         );
//         const data = await response.json();
//         console.log("Mobile search results:", data);
//         setNavSearchResults(data);
//         setShowNavSuggestions(true);
//       } catch (error) {
//         console.error("Error fetching mobile search results:", error);
//       }
//     };

//     const delaySearch = setTimeout(fetchResults, 300);
//     return () => clearTimeout(delaySearch);
//   }, [navSearchTerm]);

//   return (
//     <nav className="navbar">
//       <div className="top-container">
//         <div className="logo">College Discover</div>

//         {/* Desktop Search Bar */}
//         <div className="search-bar-container">
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search colleges, courses..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onFocus={() => setShowSuggestions(true)}
//               onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//             />
//             <button>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="24px"
//                 viewBox="0 -960 960 960"
//                 width="24px"
//                 fill="#000000"
//               >
//                 <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
//               </svg>
//             </button>
//             {showSuggestions && searchResults.length > 0 && (
//               <div
//                 className="search-results"
//                 onMouseDown={(e) => e.preventDefault()}
//               >
//                 {searchResults.map((result, index) => (
//                   <div
//                     key={index}
//                     className="search-item"
//                     onClick={() => setSearchTerm(result.college_name)}
//                   >
//                     {result.college_name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Hamburger Menu Icon */}
//         <div className="hamburger-menu" onClick={toggleMobileMenu}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>

//         {/* Navigation Links (Mobile Menu) */}
//         <ul className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/course">Course</a>
//           </li>
//           <li>
//             <a href="/news">News</a>
//           </li>
//           <li>
//             <a href="/blogs">Blogs</a>
//           </li>
//           {/* Mobile Search Bar */}
//           <li className="mobile-search">
//             <div className="search-bar1">
//               <input
//                 type="text"
//                 placeholder="Search colleges, courses..."
//                 value={navSearchTerm}
//                 onChange={(e) => setNavSearchTerm(e.target.value)}
//                 onFocus={() => setShowNavSuggestions(true)}
//                 onBlur={() =>
//                   setTimeout(() => setShowNavSuggestions(false), 200)
//                 }
//               />
//               <button>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="24px"
//                   viewBox="0 -960 960 960"
//                   width="24px"
//                   fill="#000000"
//                 >
//                   <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
//                 </svg>
//               </button>
//               {showNavSuggestions && navSearchResults.length > 0 && (
//                 <div
//                   className="search-results1"
//                   onMouseDown={(e) => e.preventDefault()}
//                 >
//                   {navSearchResults.map((result, index) => (
//                     <div
//                       key={index}
//                       className="search-item"
//                       onClick={() => setNavSearchTerm(result.college_name)}
//                     >
//                       {result.college_name}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useEffect, useState } from "react";
import "./css/Navbar.css";

function Navbar() {
  // Desktop search state
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Mobile search state (for search-bar1)
  const [navSearchTerm, setNavSearchTerm] = useState("");
  const [navSearchResults, setNavSearchResults] = useState([]);
  const [showNavSuggestions, setShowNavSuggestions] = useState(false);

  // Mobile menu toggle state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Hide suggestions when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setShowSuggestions(false);
      setShowNavSuggestions(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop search: fetch results based on searchTerm
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      setShowSuggestions(false);
      return;
    }

    const fetchResults = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/colleges/search/${searchTerm}`
        );
        const data = await response.json();
        console.log("Desktop search results:", data);
        setSearchResults(data);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    const delaySearch = setTimeout(fetchResults, 300);
    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  // Mobile search: fetch results based on navSearchTerm
  useEffect(() => {
    if (navSearchTerm.trim() === "") {
      setNavSearchResults([]);
      setShowNavSuggestions(false);
      return;
    }

    const fetchResults = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/colleges/search/${navSearchTerm}`
        );
        const data = await response.json();
        console.log("Mobile search results:", data);
        setNavSearchResults(data);
        setShowNavSuggestions(true);
      } catch (error) {
        console.error("Error fetching mobile search results:", error);
      }
    };

    const delaySearch = setTimeout(fetchResults, 300);
    return () => clearTimeout(delaySearch);
  }, [navSearchTerm]);

  return (
    <nav className="navbar">
      <div className="top-container">
        <div className="logo">College Discover</div>

        {/* Desktop Search Bar */}
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search colleges, courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </button>
            {showSuggestions && searchResults.length > 0 && (
              <div
                className="search-results"
                onMouseDown={(e) => e.preventDefault()}
              >
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="search-item"
                    onClick={() => setSearchTerm(result.college_name)}
                  >
                    {result.college_name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Links (Mobile Menu) */}
        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
            {/* Mobile Search Bar */}
            <li className="mobile-search">
            <div className="search-bar1">
              <input
                type="text"
                placeholder="Search colleges, courses..."
                value={navSearchTerm}
                onChange={(e) => setNavSearchTerm(e.target.value)}
                onFocus={() => setShowNavSuggestions(true)}
                onBlur={() =>
                  setTimeout(() => setShowNavSuggestions(false), 200)
                }
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </button>
              {showNavSuggestions && navSearchResults.length > 0 && (
                <div
                  className="search-results1"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {navSearchResults.map((result, index) => (
                    <div
                      key={index}
                      className="search-item"
                      onClick={() => setNavSearchTerm(result.college_name)}
                    >
                      {result.college_name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/course">Course</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
        
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
