import React from "react";
import arrayDestruct from "../assets/portfolio/a1.jpg";
import installNode from "../assets/portfolio/a2.jpg";
import navbar from "../assets/portfolio/a3.jpg";
import reactParallax from "../assets/portfolio/a4.jpg";
import reactWeather from "../assets/portfolio/a5.jpg";
import gaming from "../assets/portfolio/a6.svg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      href: "https://play.google.com/store/apps/details?id=com.nfid.antihoax",
    },
    {
      id: 2,
      src: reactParallax,
      href: "https://sentimen-analisis-fxdl.herokuapp.com/",
    },
    {
      id: 3,
      src: navbar,
      href: "https://play.google.com/store/apps/details?id=com.ufadilitas14.appCrazyCar",
    },
    {
      id: 4,
      src: installNode,
      href: "https://play.google.com/store/apps/details?id=com.GameMania.Kpk",
    },
    {
      id: 5,
      src: gaming,
      href: "https://152235865100-80-dts-final-project.netlify.app/",
    },
    {
      id: 6,
      src: reactWeather,
      href: "https://github.com/FadilArfat?tab=repositories",
    },
  ];

  return (
    <div name="portfolio" className="mt-10 pb-24 md:pb-5  w-full text-white h-full md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div data-aos="fade-right" className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className={`rounded-md mx-auto duration-200 hover:scale-105 `} />

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href}> Check it out</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
