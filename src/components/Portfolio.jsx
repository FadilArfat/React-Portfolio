import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../api/firebase";

const Portfolio = () => {
  const [isi, setIsi] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(isi);

  useEffect(() => {
    const ambilData = async () => {
      try {
        const getDataFromFB = [];
        const docRef = collection(db, "projects");
        const docSnap = await getDocs(docRef);
        docSnap.forEach((doc) => {
          getDataFromFB.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setIsi(getDataFromFB);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };
    ambilData();
  }, []);

  return (
    <div
      name="portfolio"
      className="mt-10 pb-24 md:pb-5  w-full text-white h-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div data-aos="fade-right" className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            isi.map(({ image, key, link }) => (
              <div key={key} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={image}
                  alt=""
                  className={`rounded-md mx-auto duration-200 hover:scale-105 `}
                />

                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={link}> Check it out</a>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
