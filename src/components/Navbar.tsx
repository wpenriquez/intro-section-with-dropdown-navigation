import React, { useState } from "react";
import "../css/navbar.css";

const Navbar = () => {
  const [menuCollapse, setMenuCollapse] = useState("hidden");
  const [dimBackground, setDim] = useState("opacity-0 hidden");
  const [rotateFeaturesChevron, setFeaturesRotate] = useState("rotate-0");
  const [rotateCompanyChevron, setCompanyRotate] = useState("rotate-0");
  const [featuresContentDisplay, setFeaturesDisplay] = useState(
    "h-0 mt-0 opacity-0 hidden"
  );
  const [companyContentDisplay, setCompanyDisplay] = useState(
    "h-0 mt-0 opacity-0 hidden"
  );

  //   FUNCTION TO DIM BACKGROUND, HIDE AND SHOW SIDEBAR CONTENTS ON MOBILE VIEW
  const collapseMenu = () => {
    if (menuCollapse === "hidden") {
      setMenuCollapse("block");
      setDim("opacity-0 block");
      setTimeout(() => {
        setMenuCollapse("block active");
        setDim("opacity-50 block");
      }, 90);
    } else {
      setMenuCollapse("");
      setDim("opacity-0 block");
      setTimeout(() => {
        setMenuCollapse("hidden");
        setDim("opacity-0 hidden");
      }, 300);
    }
  };

  //   FUNCTION TO ANIMATE DROPDOWN OF FEATURES CONTENT
  const collapseFeaturesDropDown = (): void => {
    if (rotateFeaturesChevron === "rotate-0") {
      setFeaturesRotate("-rotate-180");
      setFeaturesDisplay("h-0 mt-0 opacity-0 block");
      setTimeout(() => {
        setFeaturesDisplay("h-40 mt-5 opacity-1 block");
      }, 90);
    } else {
      setFeaturesRotate("rotate-0");
      setFeaturesDisplay("h-0 mt-0 opacity-0");
      setTimeout(() => {
        setFeaturesDisplay("h-0 mt-0 opacity-0 hidden");
      }, 200);
    }
  };

  //   FUNCTION TO ANIMATE DROPDOWN OF COMPANY CONTENT
  const collapseCompanyDropdown = (): void => {
    if (rotateCompanyChevron === "rotate-0") {
      setCompanyRotate("-rotate-180");
      setCompanyDisplay("h-0 mt-0 opacity-0 block");
      setTimeout(() => {
        setCompanyDisplay("h-28 mt-5 opacity-1 block");
      }, 90);
    } else {
      setCompanyRotate("rotate-0");
      setCompanyDisplay("h-0 mt-0 opacity-0");
      setTimeout(() => {
        setCompanyDisplay("h-0 mt-0 opacity-0 hidden");
      }, 200);
    }
  };

  return (
    <div>
      {/* MAIN NAVBAR DIV */}
      <div className="navbar">
        {/* INNER NAVBAR CONTAINER */}
        <div className="navbar-container">
          {/* NAV TAG */}
          <nav className="md:flex items-center p-5 md:py-4  lg:p-5">
            {/* LOGO AND HAMBURGER */}
            <div className="logo flex justify-between items-center">
              <h1 className="font-bold text-4xl lg:text-5xl text-black">
                <a href="/" className="">
                  snap
                </a>
              </h1>
              <div className="hamburger block md:hidden" onClick={collapseMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10"
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
              </div>
            </div>
            {/* DIM BACKGROUND */}
            <div
              className={
                `bg-dim absolute md:hidden top-0 left-0 z-0 bg-black ` +
                dimBackground
              }
            ></div>
            {/* LIST OF LINKS */}
            <div
              className={
                `navbar-links border-l md:border-0  md:flex absolute md:relative top-0 border-black bg-white p-5 transition-all ease-linear duration-100 z-20 w-full ` +
                menuCollapse
              }
            >
              <ul className=" md:flex md:items-center relative w-full">
                <li
                  className="close-btn flex justify-end mb-5 md:hidden"
                  onClick={collapseMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </li>
                {/* FEATURES DROPDOWN */}
                <li className="nav-link">
                  <div
                    className="features-dropdwn cursor-pointer"
                    onClick={collapseFeaturesDropDown}
                  >
                    Features
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`list-chevron ` + rotateFeaturesChevron}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </div>
                  <ul
                    className={
                      `features-content ml-5 md:ml-0 md:border border-gray-300 md:h-auto  relative md:absolute md:top-5 lg:top-10 md:rounded ` +
                      featuresContentDisplay
                    }
                  >
                    <li className="features-item">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="features-icon text-violet-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <a href="#">Todo List</a>
                    </li>
                    <li className="features-item">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="features-icon text-teal-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                      <a href="#">Calendar</a>
                    </li>
                    <li className="features-item">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="features-icon text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                      </span>
                      <a href="#">Reminders</a>
                    </li>
                    <li className="features-item">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="features-icon text-purple-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <a href="#">Planning</a>
                    </li>
                  </ul>
                </li>
                {/* COMPANY DROPDOWN */}
                <li className="nav-link">
                  <div
                    className="company-dropdwn cursor-pointer"
                    onClick={collapseCompanyDropdown}
                  >
                    Company
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`list-chevron ` + rotateCompanyChevron}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </div>
                  <ul
                    className={`ml-5 company-content ` + companyContentDisplay}
                  >
                    <li className="company-item">
                      <a href="#">History</a>
                    </li>
                    <li className="company-item">
                      <a href="#">Our Team</a>
                    </li>
                    <li className="company-item">
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-link">
                  <a href="#">Careers</a>
                </li>
                <li className="nav-link">
                  <a href="#">About</a>
                </li>
              </ul>
              {/* LOGIN/REGISTER BUTTONS */}
              <div className="login-register mt-6 md:mt-0 md:flex text-center">
                <ul className="md:flex items-center">
                  <li className="nav-link">
                    <a href="#">Login</a>
                  </li>
                  <li className="border-2 border-gray-400 rounded-2xl p-2 md:px-3 lg:py-2 lg:px-6 nav-link">
                    <a href="#">Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
