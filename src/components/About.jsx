import React from "react";
import Astronaut from "../assets/astronaut.png";
import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";

const About = () => {
  const initialX = 0;
  const initialY = 0;
  return (
    <div
      name="about"
      className="container mx-auto lg:max-w-6xl py-5 px-4 mt-12 mb-20 text-white "
    >
      <div className="container mx-auto lg:max-w-6xl py-5 px-4 mt-12 mb-20">
        <div className="p-4 mx-auto flex flex-col justify-center max-w-6xl w-full h-full">
          <motion.div
            initial={{ translateX: -100, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ ease: "backInOut", duration: 0.4 }}
            className="mb-10"
          >
            <p className="outline-title text-6xl font-bold md:inline block border-b-0 md:border-b-4 border-gray-500">
              About
            </p>
            <p className="text-6xl font-bold inline md:ml-2 ml-0">Myself</p>
          </motion.div>

          <Reveal>
            <p className="text-xl">
              I am a software developer and designer with experience creating
              digital interfaces, website, product design but I also have the
              ability to bring those concepts to life through creative front-end
              development. Currently, I am working as a freelancer and looking
              for some opportunities to work. In the past, I have worked with
              amazing clients and delivered amazing products that users enjoy.
            </p>
          </Reveal>

          <br />
          <motion.span
            animate={{
              y: [initialY, initialY - 10, initialY, initialY + 10, initialY],
              x: [initialX, initialX + 5, initialX, initialX - 5, initialX],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="hidden md:visible md:flex md:absolute -z-[1]"
          >
            <motion.img
              initial={{ translateY: 300, scale: 0, opacity: 0 }}
              whileInView={{
                translateX: 960,
                translateY: 0,
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "linear" }}
              src={Astronaut}
              alt="balloon"
              className={`w-52 `}
            />
          </motion.span>

          <Reveal>
            <p className="text-xl">
              I graduated with a bachelor's degree in Informatics from
              Universitas Teknokrat Indonesia. I am hardworking, disciplined,
              and always eager to learn new things. The basic skills that I have
              include creating Android applications using Android Studio with
              the Java programming language, basic skills in making games with
              Unity software, creating websites using HTML, CSS, and JavaScript,
              troubleshooting, design using Figma, Photoshop, and Corel Draw,
              video editing with Sony Vegas Pro and Premiere Pro, proficiency in
              using Microsoft Word, Excel, and PowerPoint, the ability to speak
              English, and familiarity with Windows and Linux Ubuntu operating
              systems.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;
