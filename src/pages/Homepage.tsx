import React, { useState, useEffect } from "react";
import mobileImage from "../images/image-hero-mobile.png";
import desktopImage from "../images/image-hero-desktop.png";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
import "../css/homepage.css";

const Homepage = () => {
  const [viewImage, setViewImage] = useState("");

  // USE EFFECT FOR CHANGING HOMEPAGE IMAGE DEPENDING ON SCREEN SIZE
  useEffect(() => {
    const changeImage = () => {
      if (window.innerWidth < 1023) {
        setViewImage(mobileImage);
      } else {
        setViewImage(desktopImage);
      }
    };

    changeImage();
    window.addEventListener("resize", changeImage);
  }, [viewImage]);

  return (
    <div>
      <main>
        <div className="body-container flex flex-col lg:flex-row-reverse lg:mt-[5%] lg:justify-evenly">
          <div className="body-image w-full lg:w-[30%]">
            <img
              src={viewImage}
              alt="homepage_img"
              className="w-full lg:w-full"
            />
          </div>
          <div className="homepage-content text-center lg:flex flex-col justify-end px-5 mt-[6%] lg:px-0 lg:w-[37%]">
            <div className="homepage-intro text-left">
              <h1 className="text-[39px] lg:text-8xl font-bold text-black">
                Make remote work
              </h1>
              <p className="mt-4 lg:mt-10 text-xl lg:w-[65%]">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
            </div>
            <div className="learn-more mt-[15%] lg:mt-[10%] lg:flex justify-start">
              <a href="#" className="learn-more-btn">
                Learn more
              </a>
            </div>
            <div className="client-list mt-[15%] mb-5">
              <ul className="flex items-center justify-center lg:justify-start">
                <li className="client-logo">
                  <img src={databiz} alt="databiz_logo" className="w-full" />
                </li>
                <li className="lg:mr-7 lg:w-20">
                  <img
                    src={audiophile}
                    alt="audiophile_logo"
                    className="w-full"
                  />
                </li>
                <li className="client-logo">
                  <img src={meet} alt="meet_logo" className="w-full" />
                </li>
                <li className="client-logo">
                  <img src={maker} alt="maker_logo" className="w-full" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
