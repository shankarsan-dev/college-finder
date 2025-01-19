const CollegeList = () => {
  const colleges = [
    {
      name: "ABC College",
      image: `src/assets/trinity.png`,
      level: "Bachelor",
      course: "Science",
      location: "Kathmandu",
    },
    {
      name: "XYZ College",
      level: "+2",
      course: "Management",
      location: "Pokhara",
      image: `src/assets/trinity.png`,
    },
    {
      name: "XYZ College",
      level: "+2",
      course: "Management",
      location: "Pokhara",
      image: `src/assets/trinity.png`,
    },
    {
      name: "XYZ College",
      level: "+2",
      course: "Management",
      location: "Pokhara",
      image: `src/assets/trinity.png`,
    },
    {
      name: "XYZ College",
      level: "+2",
      course: "Management",
      location: "Pokhara",
      image: `src/assets/trinity.png`,
    },
    {
      name: "XYZ College",
      level: "+2",
      course: "Management",
      location: "Pokhara",
      image: `src/assets/trinity.png`,
    },
    {
      name: "XYZ College",
      level: "+2",
      course: "Management",
      location: "Pokhara",
      image: `src/assets/trinity.png`,
    },
    {
      name: "XYZ College",
      level: "+2",
      course: "Management",
      location: "Pokhara",
      image: `src/assets/trinity.png`,
    },
    {
      name: "XYZ College",
      level: "+2",
      course: "Management",
      location: "Pokhara",
      image: `src/assets/trinity.png`,
    },
  ];

  return (

    <div className="text-white college-list mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ml-5 mr-5" >
  {colleges.map((college, index) => (
    <div
      key={index}
      className="college text-white shadow-md bg-blue-500 rounded-lg p-3 transition-transform transform hover:scale-105 
      max-w-full aspect-w-1 aspect-h-1 flex flex-col items-center"
    >
      {/* Image */}
      <img
        src={college.image}
        alt={college.name}
        className="text-white max-w-20 h-full object-cover rounded-t-lg mb-4 "
      />

      {/* Content */}
      <div className=" text-white flex flex-col items-center">
        <h3 className="text-xl  font-bold mb-2">{college.name}</h3>
        <p className="text-white">Level: {college.level}</p>
        <p className="text-white">Course: {college.course}</p>
        <p className="text-white">Location: {college.location}</p>
      </div>
    </div>
  ))}
</div>

  );
};
export default CollegeList;
