import React from "react";
import Handshake from "../assets/handshake.gif";

const Contact = () => {
  return (
    <div name="contact" className="mt-10 md:mt-10w-full h-screen  p-4 text-white">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 max-w-screen-lg mx-auto h-full">
        <div class="flex justify-start  ">
          <div data-aos="fade-right" className="h-0 w-0 pt-20">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Contact</p>
          </div>
          <form action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6" method="POST" className=" flex flex-col pt-40   w-full ">
            <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input type="text" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button className="text-white bg-gradient-to-r from-blue-500 to-blue-800 px-6 py-3 my-8 mx-auto flex items-start rounded-md hover:scale-110 duration-300">Let's talk</button>
          </form>
        </div>
        <div data-aos="flip-up" className="hidden md:block">
          <span className="align-middle inline-block pt-10">
            <img src={Handshake} alt="handshake" className="z-10 flex object-none w-fit h-fit align-bottom pt-36 py-auto scale-75" />
            <span className="top-0 pb-96">
              <p data-aos-duration="1500" data-aos="fade-left" className="text-6xl w-full font-extrabold outline-title text-center absolute">
                LET'S WORK
              </p>
              <br />
              <p data-aos-duration="2000" data-aos="fade-right" className="text-6xl w-full font-extrabold  text-center absolute ">
                LET'S WORK
              </p>
              <br />
              <p data-aos-duration="1500" data-aos="fade-left" className="text-6xl w-full font-extrabold outline-title text-center absolute">
                LET'S WORK
              </p>
              <br />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
