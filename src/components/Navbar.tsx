import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

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
    if (window.innerWidth > 767) {
      setCompanyRotate("rotate-0");
      setCompanyDisplay("h-0 mt-0 opacity-0");
      setTimeout(() => {
        setCompanyDisplay("h-0 mt-0 opacity-0 hidden");
      }, 200);
    }
    if (rotateFeaturesChevron === "rotate-0") {
      setFeaturesRotate("-rotate-180");
      setFeaturesDisplay("h-0 mt-0 opacity-0 block");
      setTimeout(() => {
        setFeaturesDisplay("h-40 mt-5 opacity-1 block md:border-t-2");
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
    if (window.innerWidth > 767) {
      setFeaturesRotate("rotate-0");
      setFeaturesDisplay("h-0 mt-0 opacity-0");
      setTimeout(() => {
        setFeaturesDisplay("h-0 mt-0 opacity-0 hidden");
      }, 200);
    }
    if (rotateCompanyChevron === "rotate-0") {
      setCompanyRotate("-rotate-180");
      setCompanyDisplay("h-0 mt-0 opacity-0 block");
      setTimeout(() => {
        setCompanyDisplay("h-28 mt-5 opacity-1 block md:border-t-2");
      }, 90);
    } else {
      setCompanyRotate("rotate-0");
      setCompanyDisplay("h-0 mt-0 opacity-0");
      setTimeout(() => {
        setCompanyDisplay("h-0 mt-0 opacity-0 hidden");
      }, 200);
    }
  };

  // USE EFFECT TO CLOSE OPENED MENU ON CHANGE ORIENTATION OR CLICKING OUTSIDE OF THE DROPDOWN ELEMENTS
  useEffect(() => {
    const closeAllMenu = () => {
      setFeaturesRotate("rotate-0");
      setFeaturesDisplay("h-0 mt-0 opacity-0");
      setCompanyRotate("rotate-0");
      setCompanyDisplay("h-0 mt-0 opacity-0");
      setTimeout(() => {
        setFeaturesDisplay("h-0 mt-0 opacity-0 hidden");
        setCompanyDisplay("h-0 mt-0 opacity-0 hidden");
      }, 200);
    };

    const closeAllMenuClick = (evt: any) => {
      if (window.innerWidth > 767) {
        if (!evt.target.classList.contains("features-dropdwn")) {
          setFeaturesRotate("rotate-0");
          setFeaturesDisplay("h-0 mt-0 opacity-0");
          setTimeout(() => {
            setFeaturesDisplay("h-0 mt-0 opacity-0 hidden");
          }, 200);
        }

        if (!evt.target.classList.contains("company-dropdwn")) {
          setCompanyRotate("rotate-0");
          setCompanyDisplay("h-0 mt-0 opacity-0");
          setTimeout(() => {
            setCompanyDisplay("h-0 mt-0 opacity-0 hidden");
          }, 200);
        }
      }
    };

    window.addEventListener("resize", closeAllMenu);
    window.addEventListener("click", closeAllMenuClick);
  }, [
    rotateFeaturesChevron,
    rotateCompanyChevron,
    featuresContentDisplay,
    companyContentDisplay,
  ]);

  return (
    <div>
      {/* MAIN NAVBAR DIV */}
      <div className="navbar md:h-28">
        {/* INNER NAVBAR CONTAINER */}
        <div className="navbar-container md:h-full">
          {/* NAV TAG */}
          <nav className="md:flex items-center p-5 md:px-5 md:py-0 md:h-full">
            {/* LOGO AND HAMBURGER */}
            <div className="logo-hamburger flex justify-between items-center">
              <h1 className="font-bold text-4xl lg:text-5xl text-black">
                <a href="/" className="" tabIndex={1}>
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
            {/* CONTAINER FOR LIST */}
            <div
              className={
                `navbar-links border-l md:border-0 md:flex  absolute md:relative top-0 border-black bg-white p-5 transition-all ease-linear duration-100 z-20 w-full md:h-full ` +
                menuCollapse
              }
            >
              {/* LIST OF LINKS */}
              <ul className=" md:flex md:items-center relative w-full h-auto">
                <li className="close-btn flex justify-end mb-5 md:hidden">
                  <svg
                    onClick={collapseMenu}
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
                    className="features-dropdwn cursor-pointer md:h-full md:flex md:items-center md:px-2"
                    onClick={collapseFeaturesDropDown}
                    tabIndex={2}
                    onKeyDown={(e) => {
                      if (e.keyCode === 13) {
                        collapseFeaturesDropDown();
                      }
                    }}
                  >
                    Features
                    <span className="features-dropdwn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          `list-chevron features-dropdwn ` +
                          rotateFeaturesChevron
                        }
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          className="features-dropdwn"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </div>
                  {/* FEATURES ITEM */}
                  <ul className={`features-content ` + featuresContentDisplay}>
                    <li className="features-item">
                      <span>
                        <img
                          src={todo}
                          alt="todo_icon"
                          className="features-icon"
                        />
                      </span>
                      <a href="#" tabIndex={3}>
                        Todo List
                      </a>
                    </li>
                    <li className="features-item">
                      <span>
                        <img
                          src={calendar}
                          alt="calendar_icon"
                          className="features-icon"
                        />
                      </span>
                      <a href="#" tabIndex={4}>
                        Calendar
                      </a>
                    </li>
                    <li className="features-item">
                      <span>
                        <img
                          src={reminders}
                          alt="reminders_icon"
                          className="features-icon"
                        />
                      </span>
                      <a href="#" tabIndex={5}>
                        Reminders
                      </a>
                    </li>
                    <li className="features-item">
                      <span>
                        <img
                          src={planning}
                          alt="planning_icon"
                          className="features-icon"
                        />
                      </span>
                      <a href="#" tabIndex={6}>
                        Planning
                      </a>
                    </li>
                  </ul>
                </li>
                {/* COMPANY DROPDOWN */}
                <li className="nav-link">
                  <div
                    className="company-dropdwn cursor-pointer md:h-full md:flex md:items-center md:px-2"
                    onClick={collapseCompanyDropdown}
                    onKeyDown={(e) => {
                      if (e.keyCode === 13) {
                        collapseCompanyDropdown();
                      }
                    }}
                    tabIndex={7}
                  >
                    Company
                    <span className="company-dropdwn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`list-chevron ` + rotateCompanyChevron}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          className="company-dropdwn"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </div>
                  <ul className={`company-content ` + companyContentDisplay}>
                    <li className="company-item">
                      <a href="#" tabIndex={8}>
                        History
                      </a>
                    </li>
                    <li className="company-item">
                      <a href="#" tabIndex={9}>
                        Our Team
                      </a>
                    </li>
                    <li className="company-item">
                      <a href="#" tabIndex={10}>
                        Blog
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-link">
                  <a
                    href="#"
                    className=" md:h-full md:flex md:items-center md:px-2"
                    tabIndex={11}
                  >
                    Careers
                  </a>
                </li>
                <li className="nav-link">
                  <a
                    href="#"
                    className="md:h-full md:flex md:items-center md:px-2"
                    tabIndex={12}
                  >
                    About
                  </a>
                </li>
              </ul>
              {/* LOGIN/REGISTER BUTTONS */}
              <div className="login-register mt-6 md:mt-0 md:flex text-center">
                <ul className="md:flex items-center">
                  {/* LOGIN */}
                  <li className="nav-link">
                    <a
                      href="#"
                      className="hover:underline md:hover:no-underline  md:h-full md:flex md:items-center md:px-2"
                    >
                      Login
                    </a>
                  </li>
                  {/* REGISTER */}
                  <li className="nav-link register md:hover:border-transparent ">
                    <a
                      href="#"
                      className="border-2 border-gray-400 rounded-2xl p-2 md:px-3 lg:py-2 lg:px-6 hover:bg-gray-400 hover:text-white transition ease-linear duration-100"
                    >
                      Register
                    </a>
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
