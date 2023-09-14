import "../styles/Hero.css";
import { useState, useEffect } from "react";
import UseFetch from "../Hooks/UseFetch";
import Navbar from "./Navbar";
import imdbIcon from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import tomatoIcon from "../assets/PngItem_1381056 1.png";
import playButton from "../assets/PlayButton.svg";

const Hero = () => {
  // const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const api_key = "7dcc494f1d421d3b46bbc5fd59a0ae84";
  const api_url = "https://api.themoviedb.org/3/movie/popular";

  const { data } = UseFetch(
    `${api_url}?api_key=${api_key}&language=en-US&page=1`
  );

  // const { backdrop_path } = data;
  const movie = data[currentMovieIndex];
  // const image_path = "https://image.tmdb.org/t/p/w1280";

  console.log(movie);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="hero">
      <div
        className="hero-image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie?.backdrop_path})`,
        }}
      >
        <Navbar />
        <div className="container">
          <div className="hero-movie-details">
            <h1 className="hero-movie-title">{movie?.title}</h1>
            <div className="hero-movie-rating">
              <span className="flex gap">
                <img src={imdbIcon} alt="imbd-icon" />
                <p className="imdb-rating">{movie?.vote_average} / 10</p>
              </span>
              <span className="flex gap">
                <img src={tomatoIcon} alt="" />
                <p className="tomato-rating">97%</p>
              </span>
            </div>
            <p className="hero-movie-overview">{movie?.overview}</p>
            <button className="hero-movie-button">
              <img src={playButton} alt="" />
              <p>watch trailer</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
