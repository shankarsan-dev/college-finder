// import React from 'react';


// const SearchFilter = () => {
//     return (
//         <form className="  search-form mt-3 bg-white shadow-md rounded-lg p-6 space-y-4 flex flex-col md:flex-row md:items-center md:space-y-0 md:space-x-4 justify-evenly">
//         <select name="level" className="p-2 border rounded-md hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out">
//             <option value="">Select Level</option>
//             <option value="bachelor">Bachelor</option>
//             <option value="plus_two">+2</option>
//         </select>

//         <select name="course" className="p-2 border rounded-md hover:shadow-lg focus:ring-2 focus:ring-green-500 transition-all duration-300 ease-in-out">
//             <option value="">Select Course</option>
//             <option value="science">Science</option>
//             <option value="management">Management</option>
//             <option value="humanities">Humanities</option>
//         </select>

//         <select name="location" className="p-2 border rounded-md hover:shadow-lg focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out">
//             <option value="">Select Location</option>
//             <option value="kathmandu">Kathmandu</option>
//             <option value="pokhara">Pokhara</option>
//             <option value="biratnagar">Biratnagar</option>
//         </select>

//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out">Search</button>
//     </form>
//   );
// }

// export default SearchFilter;
// 
// import React, { useState } from "react";

// const SearchFilter = () => {
//   const [level, setLevel] = useState(""); // State to track selected level
//   const [courseOptions, setCourseOptions] = useState([]); // State to track course options

//   const handleLevelChange = (e) => {
//     const selectedLevel = e.target.value;
//     setLevel(selectedLevel);

//     // Update course options based on the selected level
//     if (selectedLevel === "plus_two") {
//       setCourseOptions([
//         "Science",
//         "Management",
//         "Humanities",
//         "Fine Arts",
//       ]);
//     } else if (selectedLevel === "bachelor") {
//       setCourseOptions([
//         "BBA",
//         "BCA",
//         "BBM",
//         "CA",
//         "BSC",
//         "CSIT",
//         "BIT",
//         "BHM",
//       ]);
//     } else {
//       setCourseOptions([]);
//     }
//   };

//   return (
//     <div className="mt-44 max-w-full px-4 md:px-10 py-10 ">
//       <form className="bg-white shadow-md rounded-full p-6 space-y-4 flex flex-col md:flex-row md:items-center md:space-y-0 md:space-x-4 justify-evenly max-w-full">
//         <select
//           name="level"
//           onChange={handleLevelChange}
//           value={level}
//           className="p-2 border rounded-full hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out w-full md:w-auto"
//         >
//           <option value="">Select Level</option>
//           <option value="bachelor">Bachelor</option>
//           <option value="plus_two">+2</option>
//         </select>

//         <select
//           name="course"
//           className="  p-2 border rounded-full hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out w-full md:w-auto"
//         >
//           <option value="">Select Course</option>
//           {courseOptions.map((course, index) => (
//             <option key={index} value={course.toLowerCase()}>
//               {course}
//             </option>
//           ))}
//         </select>

//         <select
//           name="location"
//           className="p-2 border rounded-full hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out w-full md:w-auto"
//         >
//           <option value="">Select Location</option>
//           <option value="kathmandu">Kathmandu</option>
//           <option value="pokhara">Pokhara</option>
//           <option value="biratnagar">Biratnagar</option>
//         </select>

//         <button
//           type="button"
//           className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out w-full md:w-auto"
//         >
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchFilter;

// import React, { useState } from "react";

// const SearchFilter = () => {
//   const [level, setLevel] = useState(""); // State to track selected level
//   const [courseOptions, setCourseOptions] = useState([]); // State to track course options

//   const handleLevelChange = (e) => {
//     const selectedLevel = e.target.value;
//     setLevel(selectedLevel);

//     // Update course options based on the selected level
//     if (selectedLevel === "plus_two") {
//       setCourseOptions([
//         "Science",
//         "Management",
//         "Humanities",
//         "Fine Arts",
//       ]);
//     } else if (selectedLevel === "bachelor") {
//       setCourseOptions([
//         "BBA",
//         "BCA",
//         "BBM",
//         "CA",
//         "BSC",
//         "CSIT",
//         "BIT",
//         "BHM",
//       ]);
//     } else {
//       setCourseOptions([]);
//     }
//   };

//   return (
//     <div className="mt-44 max-w-full px-4 md:px-10 py-10">
//       <form className="bg-white shadow-md rounded-none md:rounded-full p-6 space-y-4 flex flex-col md:flex-row md:items-center md:space-y-0 md:space-x-4 justify-evenly w-full">
//         <select
//           name="level"
//           onChange={handleLevelChange}
//           value={level}
//           className="p-2 border rounded-none md:rounded-full hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out w-full md:w-auto"
//         >
//           <option value="">Select Level</option>
//           <option value="bachelor">Bachelor</option>
//           <option value="plus_two">+2</option>
//         </select>

//         <select
//           name="course"
//           className="p-2 border rounded-none md:rounded-full hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out w-full md:w-auto"
//         >
//           <option value="">Select Course</option>
//           {courseOptions.map((course, index) => (
//             <option key={index} value={course.toLowerCase()}>
//               {course}
//             </option>
//           ))}
//         </select>

//         <select
//           name="location"
//           className="p-2 border rounded-none md:rounded-full hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out w-full md:w-auto"
//         >
//           <option value="">Select Location</option>
//           <option value="kathmandu">Kathmandu</option>
//           <option value="pokhara">Pokhara</option>
//           <option value="biratnagar">Biratnagar</option>
//         </select>

//         <button
//           type="button"
//           className="bg-blue-500 text-white py-2 px-4 rounded-none md:rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out w-full md:w-auto"
//         >
//           Search
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchFilter;
// import React, { useState } from "react";

// const SearchFilter = () => {
//   const [level, setLevel] = useState(""); // State to track selected level
//   const [courseOptions, setCourseOptions] = useState([]); // State to track course options

//   const handleLevelChange = (e) => {
//     const selectedLevel = e.target.value;
//     setLevel(selectedLevel);

//     // Update course options based on the selected level
//     if (selectedLevel === "plus_two") {
//       setCourseOptions([
//         "Science",
//         "Management",
//         "Humanities",
//         "Fine Arts",
//       ]);
//     } else if (selectedLevel === "bachelor") {
//       setCourseOptions([
//         "BBA",
//         "BCA",
//         "BBM",
//         "CA",
//         "BSC",
//         "CSIT",
//         "BIT",
//         "BHM",
//       ]);
//     } else {
//       setCourseOptions([]);
//     }
//   };

//   return (
//     <div className=" px-4 md:px-10 py-10 sm:mt-50 w">
//       <form className="bg-white shadow-md rounded-md md:rounded-full p-6 space-y-4 flex flex-col md:flex-row md:items-center md:space-y-0 md:space-x-4 justify-evenly w-[100%]">
//         <select
//           name="level"
//           onChange={handleLevelChange}
//           value={level}
//           className="p-2 border rounded-md md:rounded-full hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out w-full md:w-auto"
//         >
//           <option value="">Select Level</option>
//           <option value="bachelor">Bachelor</option>
//           <option value="plus_two">+2</option>
//         </select>

//         <select
//           name="course"
//           className="p-2 border rounded-md md:rounded-full hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out w-full md:w-auto"
//         >
//           <option value="">Select Course</option>
//           {courseOptions.map((course, index) => (
//             <option key={index} value={course.toLowerCase()}>
//               {course}
//             </option>
//           ))}
//         </select>

//         <select
//           name="location"
//           className="p-2 border rounded-md md:rounded-full hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out w-full md:w-auto"
//         >
//           <option value="">Select Location</option>
//           <option value="kathmandu">Kathmandu</option>
//           <option value="pokhara">Pokhara</option>
//           <option value="biratnagar">Biratnagar</option>
//         </select>

//         <button
//           type="button"
//           className="bg-blue-500 text-white py-2 px-4 rounded-md md:rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out w-full md:w-auto"
//         >
//           Search
//         </button>
//       </form>
//     </div>

//   );
// };
  
// export default SearchFilter;
import React, { useState } from "react";

const SearchFilter = () => {
  const [level, setLevel] = useState(""); // State to track selected level
  const [courseOptions, setCourseOptions] = useState([]); // State to track course options

  const handleLevelChange = (e) => {
    const selectedLevel = e.target.value;
    setLevel(selectedLevel);

    // Update course options based on the selected level
    if (selectedLevel === "plus_two") {
      setCourseOptions(["Science", "Management", "Humanities", "Fine Arts"]);
    } else if (selectedLevel === "bachelor") {
      setCourseOptions([
        "BBA",
        "BCA",
        "BBM",
        "CA",
        "BSC",
        "CSIT",
        "BIT",
        "BHM",
      ]);
    } else {
      setCourseOptions([]);
    }
  };

  return (
    <form className="bg-white shadow-md p-4 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center w-full md:w-[80%] rounded-md md:rounded-full">
      <select
        name="level"
        onChange={handleLevelChange}
        value={level}
        className="p-2 border rounded-md md:rounded-full w-full md:w-auto flex-1 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      >
        <option value="">Select Level</option>
        <option value="bachelor">Bachelor</option>
        <option value="plus_two">+2</option>
      </select>

      <select
        name="course"
        className="p-2 border rounded-md md:rounded-full w-full md:w-auto flex-1 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      >
        <option value="">Select Course</option>
        {courseOptions.map((course, index) => (
          <option key={index} value={course.toLowerCase()}>
            {course}
          </option>
        ))}
      </select>

      <select
        name="location"
        className="p-2 border rounded-md md:rounded-full w-full md:w-auto flex-1 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      >
        <option value="">Select Location</option>
        <option value="kathmandu">Kathmandu</option>
        <option value="pokhara">Pokhara</option>
        <option value="biratnagar">Biratnagar</option>
      </select>

      <button
        type="button"
        className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full md:rounded-full w-full md:w-auto hover:bg-blue-600 transition-all duration-300">
        <img src="src\assets\search.svg"  className ="inline-block"alt="" />
      </button>
    </form>
  );
};

export default SearchFilter;
