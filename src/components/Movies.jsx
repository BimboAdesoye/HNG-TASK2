import "../styles/Movies.css";
import chevronIcon from "../assets/Chevron right.svg";
import UseFetch from "../Hooks/UseFetch";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const Movies = () => {
  const api_url = "https://api.themoviedb.org/3/movie/top_rated";
  const api_key = "7dcc494f1d421d3b46bbc5fd59a0ae84";
  const { data, loading, error } = UseFetch(`${api_url}?api_key=${api_key}`);
  return (
    <section className="movies">
      <div className="container">
        <div className="header">
          <Link to={"/MovieDetails"}>
            <p className="feature">Featured Movie</p>
          </Link>
          <p className="see-more">
            <span>See More</span> <img src={chevronIcon} alt="" />
          </p>
        </div>
        <div className="movie-card-container">
          {data.map((datum) => {
            const { id } = datum;
            return <MovieCard key={id} data={datum} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Movies;
