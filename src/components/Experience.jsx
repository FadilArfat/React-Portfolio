import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import androidStudio from "../assets/nextjs.webp";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import unity from "../assets/unity.png";
import { motion } from "framer-motion";
import Rocket from "../assets/rocket-158_256.gif";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: androidStudio,
      title: "NextJS",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: unity,
      title: "Unity",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="experience" className="mt-10  w-full h-screen">
      <motion.img
        initial={{ rotateZ: -90, x: 1000, opacity: 1 }}
        whileInView={{ x: 0, opacity: 0 }}
        transition={{ ease: "linear", duration: 2 }}
        alt="rocket"
        src={Rocket}
        viewport={{ once: true }}
        className="hidden md:visible md:flex md:absolute -z-[1]"
      />
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <motion.div
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ ease: "backInOut", duration: 0.4 }}
        >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              initial={{ opacity: 0, rotateX: 360 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
