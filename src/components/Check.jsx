import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";

const Hero = ({ data }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="hero-container position-relative">
      <Image
        style={{ objectFit: "cover" }}
        className="w-100 h-100"
        src={`https://image.tmdb.org/t/p/original/${data[current].backdrop_path}`}
      />
      <div className="position-absolute w-100 hero-text">
        <div className="cc-container">
          <div className="text-holder d-flex flex-column gap-3">
            <h1 className="sans title mb-0 text-white overview">
              {data[current].title.length > 32
                ? `${data[current].title.slice(0, 29).trim()}...`
                : data[current].title}
            </h1>
            <div className="d-flex gap-5 align-items-center">
              <div className="d-flex gap-2 align-items-center">
                <div style={{ width: "40px" }}>
                  <Image
                    className=""
                    src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1694595577/cofeshop/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE_1_qaz2ip.webp"
                  />
                </div>
                <p className="sans mb-0 small-text">
                  {data[current].vote_average.toFixed(2) * 10} / 100
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <div style={{ width: "17px", height: "auto" }}>
                  <Image
                    className="w-100 h-100"
                    src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1694596461/cofeshop/PngItem_1381056_1_1_fkoyqh.png"
                  />
                </div>
                <p className="mb-0 sans small-text">97%</p>
              </div>
            </div>
            <h6 className="text-white overview">
              {data[current].overview.length > 240
                ? `${data[current].overview.slice(0, 237).trim()}...`
                : data[current].overview}
            </h6>
            <div className="hero-button d-flex gap-2 align-items-center">
              <AiFillPlayCircle color="white" size={20} />
              <h6 className="mb-0 text-white">Watch Trailer</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute hero-number">
        <div className="d-flex flex-column gap-1">
          {[...Array(5)].map((_each, index) => (
            <div key={index}>
              <p
                className="mb-0 small-text text-white overview"
                onClick={() => setCurrent(index)}
              >
                {index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
