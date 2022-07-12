import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full mb-5 md:mb-0 sm:mb-72">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center max-h-max pt-28 md:pt-0 md:h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="outline-title text-4xl sm:text-7xl font-bold text-white">I'm a Front-End Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">Freshgraduate from computer science. Currently, I love to work on web application using technologies like React, Tailwind, and Bootstrap.</p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-800 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
