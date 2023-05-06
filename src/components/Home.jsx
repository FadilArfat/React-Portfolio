import React, { useEffect, useRef } from "react";
import HeroImage from "../assets/header_head.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typed from "typed.js";
import styles from "./Home.module.css";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Coder", "Designer", "Freelancer"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div name="home" className="h-screen w-full mb-5 md:mb-0 sm:mb-72">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center max-h-max pt-28 md:pt-0 md:h-full px-4 md:flex-row">
        <div className="w-full relative">
          <p className="text-gray-500 py-4 max-w-md font-extrabold">Hello</p>
          <h2 className="outline-title text-4xl sm:text-7xl font-bold text-white">
            I'm <span ref={el} />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Freshgraduate from computer science. Currently, I love to work on
            web application using technologies like React, React Native, NextJS,
            Tailwind, and Bootstrap.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-800 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="my profile" className={styles.profile} />
        </div>
      </div>
    </div>
  );
};

export default Home;
