import React, { useState } from "react";
import Navbar from "./components/Navbar";
import mobileImage from "./images/image-hero-mobile.png";
import desktopImage from "./images/image-hero-desktop.png";

function App() {
  return (
    // <div className="App">
    //   <div className="md:grid md:grid-cols-3">
    //     <div className="md:col-span-1 md:flex md:justify-end">
    //       <nav className={`transition-all ease-linear duration-200 md:h-full`}>
    //         <div className="logo flex justify-between items-center border-b border-gray-300">
    //           <h1 className="font-bold uppercase p-4">
    //             <a href="/" className="hover:text-gray-700">
    //               Food Ninja
    //             </a>
    //           </h1>
    //           <div
    //             className="px-4 cursor-pointer md:hidden"
    //             id="burger"
    //             onClick={burgerClick}
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="w-6"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               strokeWidth={2}
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M4 6h16M4 12h16M4 18h16"
    //               />
    //             </svg>
    //           </div>
    //         </div>
    //         <ul
    //           className={
    //             `navbar-menu text-sm mt-6 md:block absolute ` + menuCollapse
    //           }
    //           id="menu"
    //         >
    //           <li className="text-gray-900 font-bold py-1">
    //             <a
    //               href="#"
    //               className="px-4 flex justify-end pr-10 border-r-4 border-primary"
    //             >
    //               <span>Home</span>
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="w-5 ml-2"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth={2}
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    //                 />
    //               </svg>
    //             </a>
    //           </li>
    //           <li className="py-1">
    //             <a
    //               href="#"
    //               className="px-4 flex justify-end pr-10 border-r-4 border-white"
    //             >
    //               <span>About</span>
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="w-5 ml-2"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth={2}
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    //                 />
    //               </svg>
    //             </a>
    //           </li>
    //           <li className="py-1">
    //             <a
    //               href="#"
    //               className="px-4 flex justify-end pr-10 border-r-4 border-white"
    //             >
    //               <span>Contact</span>
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="w-5 ml-2"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth={2}
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    //                 />
    //               </svg>
    //             </a>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>

    //     <main className="px-16 py-6 bg-gray-100 md:col-span-2">
    //       <div className="flex justify-center md:justify-end">
    //         <a
    //           href="#"
    //           className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-linear duration-100"
    //         >
    //           Log in
    //         </a>
    //         <a
    //           href="#"
    //           className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-linear duration-100"
    //         >
    //           Sign up
    //         </a>
    //       </div>

    //       <header>
    //         <h2 className="text-gray-900 text-6xl font-semibold">Recipes</h2>
    //         <h3 className="text-2xl font-semibold">For Ninjas</h3>
    //       </header>

    //       <div>
    //         <h4 className="font-bold mt-12 pb-2 border-b border-gray-00">
    //           Latest Recipes
    //         </h4>

    //         <div className="mt-8 grid lg:grid-cols-3 gap-10">
    //           {/* cards go here */}
    //           <div className="card">
    //             <img
    //               src={mobileImage}
    //               alt="mobile"
    //               className="w-full h-32 sm:h-48 object-cover"
    //             />
    //             <div className="m-4">
    //               <span className="font-bold">5 Bean Chilli Stew </span>
    //               <span className="block text-gray-300 text-sm">
    //                 Recipe by Mario
    //               </span>
    //             </div>
    //             <div className="badge">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="w-5 inline-block mr-2"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth={2}
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    //                 />
    //               </svg>
    //               <span>25 mins</span>
    //             </div>
    //           </div>
    //           <div className="card">
    //             <img
    //               src={mobileImage}
    //               alt="mobile"
    //               className="w-full h-32 sm:h-48 object-cover"
    //             />
    //             <div className="m-4">
    //               <span className="font-bold">5 Bean Chilli Stew </span>
    //               <span className="block text-gray-300 text-sm">
    //                 Recipe by Mario
    //               </span>
    //             </div>
    //             <div className="badge">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="w-5 inline-block mr-2"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth={2}
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    //                 />
    //               </svg>
    //               <span>25 mins</span>
    //             </div>
    //           </div>
    //           <div className="card">
    //             <img
    //               src={mobileImage}
    //               alt="mobile"
    //               className="w-full h-32 sm:h-48 object-cover"
    //             />
    //             <div className="m-4">
    //               <span className="font-bold">5 Bean Chilli Stew </span>
    //               <span className="block text-gray-300 text-sm">
    //                 Recipe by Mario
    //               </span>
    //             </div>
    //             <div className="badge">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="w-5 inline-block mr-2"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth={2}
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    //                 />
    //               </svg>
    //               <span>25 mins</span>
    //             </div>
    //           </div>
    //         </div>

    //         <h4 className="font-bold font-bold mt-12 pb-2 border-b border-gray-300">
    //           Most Popular
    //         </h4>

    //         <div className="mt-8">{/* cards go here */}</div>

    //         <div className="flex justify-center">
    //           <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-90 hover:bg-opacity-50 transition ease-linear duration-100">
    //             Load more
    //           </div>
    //         </div>
    //       </div>
    //     </main>
    //   </div>
    // </div>

    <div className="App">
      <Navbar />
      
    </div>
  );
}

export default App;
