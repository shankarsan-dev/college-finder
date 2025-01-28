  // import { motion } from 'framer-motion';
  // import React, { useEffect, useState } from 'react';
  // import trinityImage from '../assets/trinity.png'; // You can remove this if your images come from the API
  // import Ads from './Ads';
  // import './css/Home.css'; // Assuming you save the CSS in Home.css
  // import Filter from './Filter'; // Import the Filter component
  // import Footer from './Footer';

  // const Home = () => {
  //   // State for college data
  //   const [colleges, setColleges] = useState([]);
  //   const [filters, setFilters] = useState({
  //     private: false,
  //     public: false,
  //     topRanked: false,
  //     location: '',
  //     educationLevel: [],
  //     mainStream: [],
  //   });

  //   const [currentPage, setCurrentPage] = useState(1);
  //   const collegesPerPage = 12;

  //   // Fetching data when the component mounts
  //   useEffect(() => {
  //     const fetchColleges = async () => {
  //       try {
  //         const response = await fetch('http://localhost:8000/api/colleges/'); // Replace with your API endpoint
  //         const data = await response.json();
  //         setColleges(data);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };

  //     fetchColleges();
  //   }, []);

  //   const handleFilterChange = (name, value, checked) => {
  //     if (name === 'location') {
  //       setFilters((prevFilters) => ({ ...prevFilters, location: value }));
  //     } else if (name === 'educationLevel' || name === 'mainStream') {
  //       setFilters((prevFilters) => {
  //         const newValues = checked
  //           ? [...prevFilters[name], value]
  //           : prevFilters[name].filter((item) => item !== value);
  //         return { ...prevFilters, [name]: newValues };
  //       });
  //     } else {
  //       setFilters((prevFilters) => ({
  //         ...prevFilters,
  //         [name]: value,
  //       }));
  //     }
  //     setCurrentPage(1); // Reset to first page when filters change
  //   };

  //   const filteredColleges = colleges.filter((college) => {
  //     if (filters.private && college.type !== 'private') return false;
  //     if (filters.public && college.type !== 'public') return false;
  //     if (filters.topRanked && college.rank > 5) return false;
  //     if (filters.location && college.location !== filters.location) return false;
  //     if (filters.educationLevel.length && !filters.educationLevel.some(level => college.educationLevel.includes(level))) return false;
  //     if (filters.mainStream.length && !filters.mainStream.some((stream) => college.mainStream.includes(stream))) return false;
  //     return true;
  //   });

  //   const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
  //   const startIndex = (currentPage - 1) * collegesPerPage;
  //   const currentColleges = filteredColleges.slice(startIndex, startIndex + collegesPerPage);

  //   const handleNextPage = () => {
  //     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  //   };

  //   const handlePrevPage = () => {
  //     if (currentPage > 1) setCurrentPage(currentPage - 1);
  //   };

  //   const containerVariants = {
  //     hidden: { opacity: 1 },
  //     visible: {
  //       opacity: 1,
  //       transition: {
  //         staggerChildren: 0.1,
  //       },
  //     },
  //   };

  //   const cardVariants = {
  //     hidden: { opacity: 0, y: 50 },
  //     visible: {
  //       opacity: 1,
  //       y: 0,
  //       transition: {
  //         type: 'spring',
  //         stiffness: 100,
  //         damping: 10,
  //       },
  //     },
  //   };

  //   return (
  //     <>
  //       <Ads />
  //       <div className="container">
  //         <Filter filters={filters} onFilterChange={handleFilterChange} />

  //         <div className="college-list">
  //           <h3>College List</h3>
  //           <motion.div
  //             className="college-container"
  //             variants={containerVariants}
  //             initial="hidden"
  //             animate="visible"
  //           >
  //             {currentColleges.length > 0 ? (
  //               currentColleges.map((college, index) => (
  //                 <motion.div
  //                   key={index}
  //                   className="college-card"
  //                   variants={cardVariants}
  //                 >
  //                   <img
  //                     src={college.image || trinityImage} // Fallback to default image if none found
  //                     alt={college.name || 'College Image'}
  //                     className="college-image"
  //                   />
  //                   <div className="college-details">
  //                     <h4>{college.name || 'Unknown College'}</h4>
  //                     <p>
  //                       <strong>Affiliation:</strong> {college.affiliation || 'Not Affiliated'}
  //                     </p>
  //                     <p>
  //                       <strong>Location:</strong> {college.location || 'Unknown Location'}
  //                     </p>
  //                   </div>
  //                 </motion.div>
  //               ))
  //             ) : (
  //               <p>No colleges match the selected filters.</p>
  //             )}
  //           </motion.div>
  //         </div>
  //       </div>

  //       {filteredColleges.length > collegesPerPage && (
  //         <div className="pagination">
  //           <button onClick={handlePrevPage} disabled={currentPage === 1}>
  //             Previous
  //           </button>
  //           <span>
  //             Page {currentPage} of {totalPages}
  //           </span>
  //           <button onClick={handleNextPage} disabled={currentPage === totalPages}>
  //             Next
  //           </button>
  //         </div>
  //       )}

  //       <Footer />
  //     </>
  //   );
  // };

  // export default Home;
//   import { motion } from 'framer-motion';
// import React, { useEffect, useState } from 'react';
// import trinityImage from '../assets/trinity.png'; // You can remove this if your images come from the API
// import Ads from './Ads';
// import './css/Home.css'; // Assuming you save the CSS in Home.css
// import Filter from './Filter'; // Import the Filter component
// import Footer from './Footer';
  
//   const Home = () => {
//     // State for college data
//     const [colleges, setColleges] = useState([]);
//     const [filters, setFilters] = useState({
//       private: false,
//       public: false,
//       topRanked: false,
//       location: '',
//       educationLevel: [],
//       mainStream: [],
//     });
  
//     const [currentPage, setCurrentPage] = useState(1);
//     const collegesPerPage = 12;
  
//     // Fetching data when the component mounts
//     useEffect(() => {
//       const fetchColleges = async () => {
//         try {
//           const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with your API endpoint
//           const data = await response.json();
//           console.log('API Response:', data); // Log the response to inspect
//           if (data && Array.isArray(data)) {
//             setColleges([{
//               "id": 1,
//               "college_name": "Thames International College",
//               "university_name": "Tribhuvan University",
//               "address": "Surya Bikram Gyawali Marg, Old Baneshwor, Kathmandu",
//               "image_src": "https://media.edusanjal.com/_sized/cover_photo/thames-cover-crop-c0-5_0-5-302x128-70.jpg",
//               "image_file_name": "Thames International College.jpg"
//             },
//             {
//               "id": 2,
//               "college_name": "Texas College of Management and IT",
//               "university_name": "Lincoln University College",
//               "address": "Siphal, Kathmandu",
//               "image_src": "https://media.edusanjal.com/_sized/cover_photo/TCMIT-Edusanjal_CEMceMm-crop-c0-5_0-5-302x128-70.jpg",
//               "image_file_name": "Texas College of Management and IT.jpg"
//             },
//             {
//               "id": 3,
//               "college_name": "Ace Institute of Management",
//               "university_name": "Pokhara University",
//               "address": "Bibhuti Janak Marg, New Baneshwor, Kathmandu",
//               "image_src": "https://media.edusanjal.com/_sized/org_cover/ace_cover_2-crop-c0-5_0-5-302x128-70.jpg",
//               "image_file_name": "Ace Institute of Management.jpg"
//             },
//             {
//               "id": 4,
//               "college_name": "NCTTM - IST College",
//               "university_name": "Tribhuvan University",
//               "address": "Gyaneshwor, Opposite to German Embassy, Kathmandu",
//               "image_src": "https://media.edusanjal.com/_sized/cover_photo/ist-cover-page-crop-c0-5_0-5-302x128-70.jpg",
//               "image_file_name": "NCTTM - IST College.jpg"
//             },
//             {
//               "id": 5,
//               "college_name": "Kathford International College of Engineering and Management",
//               "university_name": "Tribhuvan University",
//               "address": "Balkumari, Lalitpur",
//               "image_src": "Nothing here",
//               "image_file_name": "Nothing here"
//             },
//             {
//               "id": 6,
//               "college_name": "Nepal College of Information Technology (NCIT)",
//               "university_name": "Pokhara University",
//               "address": "Balkumari, Lalitpur",
//               "image_src": "https://media.edusanjal.com/_sized/cover_photo/ncit-cover-crop-c0-5_0-5-302x128-70.jpg",
//               "image_file_name": "Nepal College of Information Technology (NCIT).jpg"
//             },
//             {
//               "id": 7,
//               "college_name": "Padmashree College",
//               "university_name": "Tribhuvan University",
//               "address": "Tinkune, Kathmandu",
//               "image_src": "https://media.edusanjal.com/_sized/org_cover/padmashree-cover-crop-c0-5_0-5-302x128-70.jpg",
//               "image_file_name": "Padmashree College.jpg"
//             },
//             {
//               "id": 8,
//               "college_name": "Liberty College",
//               "university_name": "Pokhara University",
//               "address": "Pragati Marg-2, Anamnagar, Kathmandu",
//               "image_src": "https://media.edusanjal.com/_sized/cover_photo/liberty_cover-crop-c0-5_0-5-302x128-70.jpg",
//               "image_file_name": "Liberty College.jpg"
//             },
//             {
//               "id": 9,
//               "college_name": "Certified College of Accountancy (CCA)",
//               "university_name": "ACCA",
//               "address": "Thapagaun, New Baneshwor, Kathmandu",
//               "image_src": "https://media.edusanjal.com/_sized/cover_photo/For_Edusanjal-4000px200px_tf7DR8Z-crop-c0-5_0-5-302x128.png",
//               "image_file_name": "Certified College of Accountancy (CCA).jpg"
//             },
//             {
//               "id": 10,
//               "college_name": "Janamaitri Multiple Campus",
//               "university_name": "National Examinations Board",
//               "address": "Kuleshwor, Kathmandu",
//               "image_src": "https://media.edusanjal.com/_sized/cover_photo/jmc-cover35-crop-c0-5_0-5-302x128-70.jpg",
//               "image_file_name": "Janamaitri Multiple Campus.jpg"
//             },
//             {
//               "id": 11,
//               "college_name": "Silver Mountain School of Hotel Management",
//               "university_name": "Queen Margaret University (UK)",
//               "address": "Lainchaur, Kathmandu",
//               "image_src": "https://media.edusanjal.com/_sized/cover_photo/silver-mountain-cover5_vPoIqOe-crop-c0-5_0-5-302x128-70.jpg",
//               "image_file_name": "Silver Mountain School of Hotel Management.jpg"
//             },
//             {
//               "id": 12,
//               "college_name": "Global College of Management",
//               "university_name": "National Examinations Board",
//               "address": "Mid-Baneshwor, Kathmandu",
//               "image_src": "https://media.edusanjal.com/_sized/cover_photo/edusanjalbanner-crop-c0-5_0-5-302x128-70.jpg",
//               "image_file_name": "Global College of Management.jpg"
//             }]); // Set the college data in state
//           } else {
//             setColleges([]); // Fallback to empty array if no data or incorrect structure
//           }
//         } catch (error) {
//           console.error('Error fetching data:', error);
//           setColleges([]); // Ensure colleges is set to an empty array in case of error
//         }
//       };
  
//       fetchColleges();
//     }, []);
  
//     const handleFilterChange = (name, value, checked) => {
//       if (name === 'location') {
//         setFilters((prevFilters) => ({ ...prevFilters, location: value }));
//       } else if (name === 'educationLevel' || name === 'mainStream') {
//         setFilters((prevFilters) => {
//           const newValues = checked
//             ? [...prevFilters[name], value]
//             : prevFilters[name].filter((item) => item !== value);
//           return { ...prevFilters, [name]: newValues };
//         });
//       } else {
//         setFilters((prevFilters) => ({
//           ...prevFilters,
//           [name]: value,
//         }));
//       }
//       setCurrentPage(1); // Reset to first page when filters change
//     };
  
//     const filteredColleges = colleges.filter((college) => {
//       if (filters.private && college.type !== 'private') return false;
//       if (filters.public && college.type !== 'public') return false;
//       if (filters.topRanked && college.rank > 5) return false;
//       if (filters.location && college.location !== filters.location) return false;
//       if (filters.educationLevel.length && !filters.educationLevel.some(level => college.educationLevel.includes(level))) return false;
//       if (filters.mainStream.length && !filters.mainStream.some((stream) => college.mainStream.includes(stream))) return false;
//       return true;
//     });
  
//     const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
//     const startIndex = (currentPage - 1) * collegesPerPage;
//     const currentColleges = filteredColleges.slice(startIndex, startIndex + collegesPerPage);
  
//     const handleNextPage = () => {
//       if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//     };
  
//     const handlePrevPage = () => {
//       if (currentPage > 1) setCurrentPage(currentPage - 1);
//     };
  
//     const containerVariants = {
//       hidden: { opacity: 1 },
//       visible: {
//         opacity: 1,
//         transition: {
//           staggerChildren: 0.1,
//         },
//       },
//     };
  
//     const cardVariants = {
//       hidden: { opacity: 0, y: 50 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//           type: 'spring',
//           stiffness: 100,
//           damping: 10,
//         },
//       },
//     };
  
//     return (
//       <>
//         <Ads />
//         <div className="container">
//           <Filter filters={filters} onFilterChange={handleFilterChange} />
  
//           <div className="college-list">
//             <h3>College List</h3>
//             <motion.div
//               className="college-container"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               {Array.isArray(colleges) && colleges.length > 0 ? (
//                 currentColleges.length > 0 ? (
//                   currentColleges.map((college, index) => (
//                     <motion.div
//                       key={index}
//                       className="college-card"
//                       variants={cardVariants}
//                     >
//                       <img
//                         src={college.image_src || trinityImage} // Fallback to default image if none found
//                         alt={college.college_name || 'College Image'}
//                         className="college-image"
//                       />
//                       <div className="college-details">
//                         <h4>{college.college_name || 'Unknown College'}</h4>
//                         <p>
//                           <strong>Affiliation:</strong> {college.university_name || 'Not Affiliated'}
//                         </p>
//                         <p>
//                           <strong>Location:</strong> {college.address || 'Unknown Location'}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))
//                 ) : (
//                   <p>No colleges match the selected filters.</p>
//                 )
//               ) : (
//                 <p>Loading colleges...</p>
//               )}
//             </motion.div>
//           </div>
//         </div>
  
//         {filteredColleges.length > collegesPerPage && (
//           <div className="pagination">
//             <button onClick={handlePrevPage} disabled={currentPage === 1}>
//               Previous
//             </button>
//             <span>
//               Page {currentPage} of {totalPages}
//             </span>
//             <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//               Next
//             </button>
//           </div>
//         )}
  
//         <Footer />
//       </>
//     );
//   };
  
//   export default Home;
  

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import trinityImage from '../assets/trinity.png'; // You can remove this if your images come from the API
import Ads from './Ads';
import './css/Home.css'; // Assuming you save the CSS in Home.css
import Filter from './Filter'; // Import the Filter component
import Footer from './Footer';

const Home = () => {
  // State for college data
  const [colleges, setColleges] = useState([]);
  const [filters, setFilters] = useState({
    private: false,
    public: false,
    topRanked: false,
    location: '', // City filter
    educationLevel: [],
    mainStream: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const collegesPerPage = 12;

  // Fetching data when the component mounts
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/colleges/ '); // Replace with your API endpoint
        const data = await response.json();
        console.log('API Response:', data); // Log the response to inspect
        if (data && Array.isArray(data)) {
          setColleges(data);
        } else {
          setColleges([]); // Fallback to empty array if no data or incorrect structure
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setColleges([]); // Ensure colleges is set to an empty array in case of error
      }
    };

    fetchColleges();
  }, []);

  const handleFilterChange = (name, value, checked) => {
    if (name === 'location') {
      setFilters((prevFilters) => ({ ...prevFilters, location: value }));
    } else if (name === 'educationLevel' || name === 'mainStream') {
      setFilters((prevFilters) => {
        const newValues = checked
          ? [...prevFilters[name], value]
          : prevFilters[name].filter((item) => item !== value);
        return { ...prevFilters, [name]: newValues };
      });
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
    setCurrentPage(1); // Reset to first page when filters change
  };

  const filteredColleges = colleges.filter((college) => {
    if (filters.private && college.type !== 'private') return false;
    if (filters.public && college.type !== 'public') return false;
    if (filters.topRanked && college.rank > 5) return false;
    
    // City filtering: Extract the city from the address and compare with the selected city
    if (filters.location && college.address) {
      const addressParts = college.address.split(', ');
      const city = addressParts[addressParts.length - 1]; // Assuming the city is the last part
      if (city !== filters.location) return false;
    }

    if (filters.educationLevel.length && !filters.educationLevel.some(level => college.educationLevel.includes(level))) return false;
    if (filters.mainStream.length && !filters.mainStream.some((stream) => college.mainStream.includes(stream))) return false;

    return true;
  });

  const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
  const startIndex = (currentPage - 1) * collegesPerPage;
  const currentColleges = filteredColleges.slice(startIndex, startIndex + collegesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <>
      <Ads />
      <div className="container">
        <Filter filters={filters} onFilterChange={handleFilterChange} />
        <div className="college-list">
          <h3>College List</h3>
          <motion.div
            className="college-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {Array.isArray(colleges) && colleges.length > 0 ? (
              currentColleges.length > 0 ? (
                currentColleges.map((college, index) => (
                  <motion.div
                    key={index}
                    className="college-card"
                    variants={cardVariants}
                  >
                    <img
                      src={college.image_src || trinityImage} // Fallback to default image if none found
                      alt={college.college_name || 'College Image'}
                      className="college-image"
                    />
                    <div className="college-details">
                      <h4>{college.college_name || 'Unknown College'}</h4>
                      <p>
                        <strong>Affiliation:</strong> {college.university_name || 'Not Affiliated'}
                      </p>
                      <p>
                        <strong>Location:</strong> {college.address || 'Unknown Location'}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p>No colleges match the selected filters.</p>
              )
            ) : (
              <p>Loading colleges...</p>
            )}
          </motion.div>
        </div>
      </div>

      {filteredColleges.length > collegesPerPage && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Home;
