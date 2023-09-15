import "../styles/Movies.css";
import chevronIcon from "../assets/Chevron right.svg";
import UseFetch from "../Hooks/UseFetch";
import MovieCard from "./MovieCard";
import { useState } from "react";
// import SearchBar from "./SearchBar";

const Movies = () => {
  const [favorites, setFavorites] = useState({});
  const [searchKey, setSearchKey] = useState("");

  const api_url = "https://api.themoviedb.org/3";
  const type = searchKey ? "search/movie" : "movie/top_rated";
  const queryParam = searchKey ? `&query=${searchKey}` : "";

  const api_key = "7dcc494f1d421d3b46bbc5fd59a0ae84";
  const { data, loading, error, getFetchedData } = UseFetch(
    `${api_url}/${type}?api_key=${api_key}${queryParam}`
  );

  const toggleFavorite = (movieId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [movieId]: !prevFavorites[movieId] || false,
    }));
  };

  // const searchMovies = (e) => {
  //   e.preventDefault();
  //   getFetchedData(searchKey);
  // };

  return (
    <section className="movies">
      <div className="container">
        <div className="header">
          <p className="feature">Featured Movies</p>
          {/* <SearchBar
            searchMovies={searchMovies}
            searchKey={searchKey}
            setSearchKey={setSearchKey}
          /> */}
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
