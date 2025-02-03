// // import React, { useEffect, useState } from 'react';
// // import { MdEmail, MdLocationCity, MdPhone, MdPlace, MdSchool } from 'react-icons/md';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import './css/CollegeDetail.css';
// // import Footer from './Footer';

// // const CollegeDetail = () => {
// //   const { id } = useParams();
// //   const [college, setCollege] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchCollegeData = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:8000/api/colleges/${id}`);
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch college data');
// //         }
// //         const data = await response.json();
// //         setCollege(data
// //         //   {
// //         //   "address": "Surya Bikram Gyawali Marg, Old Baneshwor, Kathmandu",
// //         //   "college_id": 1,
// //         //   "college_name": "Thames International College",
// //         //   "college_logo": "https://media.edusanjal.com/_sized_/logos/thames-college-thumbnail-200x200.png",
// //         //   "cover_image": "https://media.edusanjal.com/_sized_/cover_photo/thames-cover-thumbnail-1400x280-70.jpg",
// //         //   "detailed_info": "Thames International College, located in Baneshwor, is a leading academic institution offering a variety of undergraduate programs...",
// //         //   "offered_program": "Bachelor of Business Administration (BBA) - 64 Seats, Bachelor of Information Management (BIM) - 64 Seats, Bachelor of Arts in Social Work (BASW) - 32 Seats",
// //         //   "additional_details": "Tribhuvan University, Private Institution, 01-5971224, info@thamescollege.edu.np",
// //         //   "map_url": "https://www.google.com/maps/?q=27.701667450376043,85.34187196479105"
// //         // }
// //       );
// //       console.log(data)
      
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchCollegeData();
// //   }, [id]);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>Error: {error}</p>;
// //   if (!college) return <p>No college found.</p>;

// //   const [affiliation,established, institutionType, contact, email] = college.additional_details.split(',');

// //   return (
// //     <>
// //       <div className="college-detail-container">
// //         <div className="photo-header-container">
// //           <div className="photo-container">
// //             <img src={college.cover_image} alt={`${college.college_name} Banner`} className="college-photo" />
// //             <img src={college.college_logo} alt={`${college.college_name} Logo`} className="college-logo" />
// //           </div>
// //           <div className="college-header">
// //             <div className="college-info-side">
// //               <h1>{college.college_name}</h1>
// //               <p>{college.address}</p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="college-info">
// //           <div className="left-column">
// //             <h3>Advertisement</h3>
// //             <div className="ad-placeholder">
// //               <p>Advertisement here</p>
// //             </div>
// //           </div>

// //           <div className="center-column">
// //             <h3>College Description</h3>
// //             <p>{college.detailed_info}</p>

// //             <h3>Offered Programs</h3>
// //             <ul className="program-list">
// //               {college.offered_program.split(',').map((program, index) => (
// //                 <li key={index} className="program-item">
// //                   {program.trim()}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div className="right-column" style={{backgroundColor:''}}>
// //             <div className="top-section">
// //               <div className="info-item">
// //                 <MdSchool className="icon" />
// //                 <p>{affiliation}</p>
// //               </div>
// //               <div className="info-item">
// //                 <MdLocationCity className="icon" />
// //                 <p>{institutionType}</p>
// //               </div>
// //             </div>

// //             <div className="bottom-section">
// //               <div className="info-item">
// //                 <MdPhone className="icon" />
// //                 <p>{contact}</p>
// //               </div>
// //               <div className="info-item">
// //                 <MdEmail className="icon" />
// //                 <p>{email}</p>
// //               </div>
// //               <div className="info-item" onClick={() => window.location.href = college.map_url}>
      
// //                 <MdPlace className="icon" />
// //                 <p>View on Map</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default CollegeDetail;


// import React, { useEffect, useState } from 'react';
// import { MdEmail, MdLocationCity, MdPhone, MdPlace, MdSchool } from 'react-icons/md';
// import { useNavigate, useParams } from 'react-router-dom';
// import './css/CollegeDetail.css';
// import Footer from './Footer';

// const parseAdditionalDetails = (detailsString) => {
//     if (!detailsString) return {};

//     const details = detailsString.split(",").map(item => item.trim()).filter(item => item !== "");

//     let university_name = "";
//     let institution_type = "";
//     let primary_phone_number = "";
//     let secondary_phone_number = "";
//     let email = "";

//     details.forEach(detail => {
//         if (!university_name) {
//             university_name = detail; // पहला आइटम यूनिवर्सिटी का नाम है
//         } else if (!institution_type && !/\d/.test(detail) && !detail.includes("@")) {
//             institution_type = detail; // पहला नॉन-न्यूमेरिक और नॉन-ईमेल वैल्यू संस्थान का प्रकार है
//         } else if (/^\d{2,}-\d+$/.test(detail)) { 
//             if (!primary_phone_number) {
//                 primary_phone_number = detail;
//             } else {
//                 secondary_phone_number = detail;
//             }
//         } else if (detail.includes("@")) {
//             email = detail;
//         }
//     });

//     return {
//         university_name,
//         institution_type,
//         primary_phone_number,
//         secondary_phone_number,
//         email
//     };
// };

// const CollegeDetail = () => {
//   const { id } = useParams();
//   const [college, setCollege] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCollegeData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/api/colleges/${id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch college data');
//         }
//         const data = await response.json();
//         setCollege(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCollegeData();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!college) return <p>No college found.</p>;

//   const { university_name, institution_type, primary_phone_number, secondary_phone_number, email } = 
//         parseAdditionalDetails(college.additional_details);

//   return (
//     <>
//       <div className="college-detail-container">
//         <div className="photo-header-container">
//           <div className="photo-container">
//             <img src={college.cover_image} alt={`${college.college_name} Banner`} className="college-photo" />
//             <img src={college.college_logo} alt={`${college.college_name} Logo`} className="college-logo" />
//           </div>
//           <div className="college-header">
//             <div className="college-info-side">
//               <h1>{college.college_name}</h1>
//               <p>{college.address}</p>
//             </div>
//           </div>
//         </div>

//         <div className="college-info">
//           <div className="left-column">
//             <h3>Advertisement</h3>
//             <div className="ad-placeholder">
//               <p>Advertisement here</p>
//             </div>
//           </div>

//           <div className="center-column">
//             <h3>College Description</h3>
//             <p>{college.detailed_info}</p>

//             <h3>Offered Programs</h3>
//             <ul className="program-list">
//               {college.offered_program.split(',').map((program, index) => (
//                 <li key={index} className="program-item">
//                   {program.trim()}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="right-column" style={{ backgroundColor: '' }}>
//             <div className="top-section">
//               <div className="info-item">
//                 <MdSchool className="icon" />
//                 <p>{university_name}</p>
//               </div>
//               <div className="info-item">
//                 <MdLocationCity className="icon" />
//                 <p>{institution_type}</p>
//               </div>
//             </div>

//             <div className="bottom-section">
//               <div className="info-item">
//                 <MdPhone className="icon" />
//                 <p>{primary_phone_number}{secondary_phone_number ? `, ${secondary_phone_number}` : ''}</p>
//               </div>
//               <div className="info-item">
//                 <MdEmail className="icon" />
//                 <p>{email}</p>
//               </div>
//               <div className="info-item" onClick={() => window.location.href = college.map_url}>
//                 <MdPlace className="icon" />
//                 <p>View on Map</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CollegeDetail;
import React, { useEffect, useState } from 'react';
import { MdEmail, MdLocationCity, MdPhone, MdPlace, MdSchool } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/CollegeDetail.css';
import Footer from './Footer';

const parseAdditionalDetails = (detailsString) => {
  if (!detailsString) return {};

  const details = detailsString.split(",").map(item => item.trim()).filter(item => item !== "");

  let university_name = "";
  let institution_type = "";
  let primary_phone_number = "";
  let secondary_phone_number = "";
  let email = "";

  details.forEach(detail => {
    if (!university_name) {
      university_name = detail; // पहला आइटम यूनिवर्सिटी का नाम है
    } else if (!institution_type && !/\d/.test(detail) && !detail.includes("@")) {
      institution_type = detail; // पहला नॉन-न्यूमेरिक और नॉन-ईमेल वैल्यू संस्थान का प्रकार है
    } else if (/^\d{2,}-\d+$/.test(detail)) {
      if (!primary_phone_number) {
        primary_phone_number = detail;
      } else {
        secondary_phone_number = detail;
      }
    } else if (detail.includes("@")) {
      email = detail;
    }
  });

  return {
    university_name,
    institution_type,
    primary_phone_number,
    secondary_phone_number,
    email
  };
};

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
        setCollege(data);
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

  const { university_name, institution_type, primary_phone_number, secondary_phone_number, email } =
    parseAdditionalDetails(college.additional_details);

  // Function to copy text to clipboard and show a toast notification.
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success(`Copied: ${text}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error("Failed to copy text", {
          position: "top-right",
          autoClose: 2000,
        });
        console.error('Could not copy text: ', err);
      });
  };

  return (
    <>
      <div className="college-detail-container">
        <div className="photo-header-container">
          <div className="photo-container">
            <img 
              src={college.cover_image} 
              alt={`${college.college_name} Banner`} 
              className="college-photo" 
            />
            <img 
              src={college.college_logo} 
              alt={`${college.college_name} Logo`} 
              className="college-logo" 
            />
          </div>
          {/* Container for College Name and Address */}
          <div className="college-name-address">
            <h1>{college.college_name}</h1>
            <p>{college.address}</p>
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

          <div className="right-column">
            <div className="top-section">
              <div className="info-item">
                <MdSchool className="icon" />
                <p>{university_name}</p>
              </div>
              <div className="info-item">
                <MdLocationCity className="icon" />
                <p>{institution_type}</p>
              </div>
            </div>

            <div className="bottom-section">
              <div 
                className="info-item" 
                onClick={() => copyToClipboard(
                  primary_phone_number + (secondary_phone_number ? `, ${secondary_phone_number}` : '')
                )}
              >
                <MdPhone className="icon" />
                <p>
                  {primary_phone_number}
                  {secondary_phone_number ? `, ${secondary_phone_number}` : ''}
                </p>
              </div>
              <div 
                className="info-item" 
                onClick={() => copyToClipboard(email)}
              >
                <MdEmail className="icon" />
                <p>{email}</p>
              </div>
              <div 
                className="info-item" 
                onClick={() => window.location.href = college.map_url}
              >
                <MdPlace className="icon" />
                <p>View on Map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default CollegeDetail;
