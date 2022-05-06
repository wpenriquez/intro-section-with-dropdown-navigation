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
      if (window.innerWidth < 1024) {
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
        <div className="body-container flex flex-col lg:flex-row-reverse md:mt-[3%] lg:items-center lg:justify-evenly">
          {/* BODY IMAGE */}
          <div className="body-image w-full lg:w-[35%] 2xl:w-[30%] xl:w-[35%]">
            <img
              src={viewImage}
              alt="homepage_img"
              className="w-full md:h-[384px] lg:h-auto md:object-cover md:object-top"
            />
          </div>
          {/* HOMEPAGE CONTENT */}
          <div className="homepage-content text-center lg:text-left flex flex-col justify-center px-5 mt-[6%] xl:px-0 lg:w-[40%] xl:w-[35%] 2xl:w-[37%]">
            {/* HOMEPAGE INTRO */}
            <div className="homepage-intro flex flex-col md:items-center lg:items-start">
              <h1 className="text-[39px] md:text-6xl 2xl:text-8xl font-bold text-black">
                Make remote work
              </h1>
              <p className="mt-4 xl:mt-10 text-xl md:text-2xl lg:text-xl 2xl:text-2xl md:w-[65%] lg:w-[100%] xl:w-[90%] 2xl:w-[68%]">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
            </div>
            <div className="learn-more mt-[20%] md:mt-[10%] xl:flex justify-start">
              <a href="#" className="learn-more-btn">
                Learn more
              </a>
            </div>
            <div className="client-list mt-[25%] md:mt-[15%] mb-5 md:mb-0 xl:mb-5">
              <ul className="flex items-center justify-center xl:justify-start">
                <li className="client-logo">
                  <img src={databiz} alt="databiz_logo" className="w-full" />
                </li>
                <li className="2xl:mr-7 2xl:w-20">
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
