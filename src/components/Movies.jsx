import "../styles/Movies.css";
import chevronIcon from "../assets/Chevron right.svg";
import UseFetch from "../Hooks/UseFetch";
import MovieCard from "./MovieCard";
import { useState } from "react";

const Movies = () => {
  const [favorites, setFavorites] = useState({});
  const api_url = "https://api.themoviedb.org/3/movie/top_rated";
  const api_key = "7dcc494f1d421d3b46bbc5fd59a0ae84";
  const { data, loading, error } = UseFetch(`${api_url}?api_key=${api_key}`);

  const toggleFavorite = (movieId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [movieId]: !prevFavorites[movieId] || false,
    }));
  };

  return (
    <section className="movies">
      <div className="container">
        <div className="header">
          <p className="feature">Featured Movies</p>
          <p className="see-more">
            <span>See More</span> <img src={chevronIcon} alt="" />
          </p>
        </div>
        <div className="movie-card-container">
          {data.map((datum) => {
            const { id } = datum;
            return (
              <MovieCard
                key={id}
                data={datum}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Movies;
