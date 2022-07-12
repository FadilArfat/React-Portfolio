import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-32 md:h-0 md:mt-10 bg-transparent">
      <footer className=" p-1 text-center text-white">
        <p>
          Build and developed by{" "}
          <a href="https://www.instagram.com/fadil991407/" rel="noreferrer" target="_blank">
            Muhammad Fadilah Arfat
          </a>{" "}
          &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
