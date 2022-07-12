import React from "react";
import Astro from "../assets/astro.gif";

const About = () => {
  return (
    <div name="about" className=" w-full md:h-screen mt-10 md:mt-0  text-white">
      <span className="hidden md:absolute flex right-0 opacity-25 md:opacity-100">
        <img src={Astro} alt="ballon" className="w-60" />
      </span>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div data-aos="fade-right" className="pb-4">
          <p className="outline-title text-6xl font-bold md:inline block border-b-0 md:border-b-4 border-gray-500">About</p>
          <p className="text-6xl font-bold inline md:ml-2 ml-0">Myself</p>
        </div>

        <p className="text-xl mt-20">
          I am a software developer and designer with experience creating digital interfaces,website,product design but I also have the ability to bring those concepts to live through creativity front-end development. Currently I am working
          as a freelancer and looking for some opportunity to work, But in the past i have worked with amazing client and delivered amazing product which users enjoy.
        </p>

        <br />

        <p className="text-xl">
          I graduated with a bachelor's degree in Informatics from the Universitas Teknokrat Indonesia. Hard working, disciplined, likes to learn new things. basic skills that I have can make android applications using android studio with
          the Java programming language, basic skills in making games with Unity software, can create websites using (html, css, javascript), troubleshooting, design (figma, photoshop, and corel draw), video editing with (Sony Vegas Pro,
          Premier Pro), the ability to use Microsoft (Word, Excel, Power Point), have the ability to speak English, and can use the Windows and Linux Ubuntu operating systems.
        </p>
      </div>
    </div>
  );
};

export default About;
