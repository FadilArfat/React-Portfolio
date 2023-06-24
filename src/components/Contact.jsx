import React from "react";
import Handshake from "../assets/handshake.gif";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      name="contact"
      className="mt-10 md:mt-10w-full h-screen p-4 text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 max-w-screen-lg mx-auto h-full">
        <div className="flex justify-start">
          <div data-aos="fade-right" className="h-0 w-0 pt-20">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Contact
            </p>
          </div>
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className="flex flex-col pt-40 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-blue-500 to-blue-800 px-6 py-3 my-8 mx-auto flex items-start rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        <div className="hidden md:block flex flex-col items-center">
          <img
            initial={{ rotateX: 180 }}
            whileInView={{ rotateX: 0 }}
            transition={{ duration: 0.6 }}
            src={Handshake}
            alt="handshake"
            className="z-10 flex object-none w-fit align-bottom pt-36 py-auto"
          />
          <div className="pt-10 w-fit ml-[5rem]">
            <motion.p
              initial={{ translateX: -100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ ease: "backInOut", duration: 0.4 }}
              className="text-6xl w-fit font-extrabold outline-title absolute "
            >
              LET'S WORK
            </motion.p>
            <br />
            <motion.p
              initial={{ translateZ: -100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ ease: "backInOut", duration: 0.4 }}
              className="text-6xl w-fit font-extrabold absolute"
              style={{ textOverflow: "ellipsis" }}
            >
              LET'S WORK
            </motion.p>
            <br />
            <motion.p
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ ease: "backInOut", duration: 0.4 }}
              className="text-6xl w-fit font-extrabold outline-title absolute"
              style={{ textOverflow: "ellipsis" }}
            >
              LET'S WORK
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
