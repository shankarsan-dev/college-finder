// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Example() {
//   return (
//     <Disclosure as="nav" className="bg-blue-600">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button */}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon className="block size-6 group-data-[open]:hidden" />
//               <XMarkIcon className="hidden size-6 group-data-[open]:block" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex shrink-0 items-center">
//               <img
//                 src="https://tailwindui.com/plus/img/logos/mark.svg?color=white&shade=500"
//                 alt="Your Company"
//                 className="h-8 w-auto"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="button"
//               className="relative rounded-full bg-blue-600 p-1 text-white hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
//             >
//               <span className="sr-only">View notifications</span>
//               <BellIcon className="size-6" />
//             </button>

//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               <div>
//                 <MenuButton className="relative flex rounded-full bg-blue-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     className="h-8 w-8 rounded-full"
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     alt=""
//                   />
//                 </MenuButton>
//               </div>
//               <MenuItems
//                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
//               >
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Your Profile
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Settings
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Sign out
//                   </a>
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }
// import React, { useState } from "react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-blue-600 text-white px-4 py-3 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold">Logo</div>

//         {/* Hamburger Icon */}
//         <button
//           className="text-white md:hidden focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <a href="#home" className="hover:text-blue-300">
//             Home
//           </a>
//           <a href="#about" className="hover:text-blue-300">
//             About
//           </a>
//           <a href="#services" className="hover:text-blue-300">
//             Services
//           </a>
//           <a href="#contact" className="hover:text-blue-300">
//             Contact
//           </a>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden mt-3 space-y-2">
//           <a href="#home" className="block hover:bg-blue-700 px-4 py-2 rounded">
//             Home
//           </a>
//           <a href="#about" className="block hover:bg-blue-700 px-4 py-2 rounded">
//             About
//           </a>
//           <a
//             href="#services"
//             className="block hover:bg-blue-700 px-4 py-2 rounded"
//           >
//             Services
//           </a>
//           <a
//             href="#contact"
//             className="block hover:bg-blue-700 px-4 py-2 rounded"
//           >
//             Contact
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-transparent text-white px-4 py-3 shadow-lg absolute max-w-full ">
//       <div className="container mx-auto flex justify-between items-center max-w-full">
//         {/* Logo */}
//         <div className="text-2xl font-bold">Logo</div>

//         {/* Hamburger Icon */}
//         <button
//           className="text-white md:hidden focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <a href="#home" className="hover:text-blue-300">
//             Home
//           </a>
//           <a href="#about" className="hover:text-blue-300">
//             About
//           </a>
//           <a href="#services" className="hover:text-blue-300">
//             Services
//           </a>
//           <a href="#contact" className="hover:text-blue-300">
//             Contact
//           </a>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden mt-3 space-y-2">
//           <a href="#home" className="block hover:bg-blue-700 px-4 py-2 rounded">
//             Home
//           </a>
//           <a href="#about" className="block hover:bg-blue-700 px-4 py-2 rounded">
//             About
//           </a>
//           <a
//             href="#services"
//             className="block hover:bg-blue-700 px-4 py-2 rounded"
//           >
//             Services
//           </a>
//           <a
//             href="#contact"
//             className="block hover:bg-blue-700 px-4 py-2 rounded"
//           >
//             Contact
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#37AFE1] text-white px-4 py-3 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center w-full max-w-full ">
        {/* Logo */}
        
        <div className="text-2xl font-bold"> <img src="src/assets/logo.svg" className="inline-block" alt="" /><span>  College Discover</span></div>

        {/* Hamburger Icon */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-300">
            Home
          </a>
          <a href="#about" className="hover:text-blue-300">
            Colleges
          </a>
          <a href="#services" className="hover:text-blue-300">
            Courses
          </a>
        </div>

        <a href="#about">
          <button className="bg-orange-600 p-4 rounded-full hover:bg-orange-700">
            About Us
          </button>
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 space-y-2">
          <a href="#home" className="block hover:bg-blue-700 px-4 py-2 rounded">
            Home
          </a>
          <a href="#about" className="block hover:bg-blue-700 px-4 py-2 rounded">
            About
          </a>
          <a
            href="#services"
            className="block hover:bg-blue-700 px-4 py-2 rounded"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block hover:bg-blue-700 px-4 py-2 rounded"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
