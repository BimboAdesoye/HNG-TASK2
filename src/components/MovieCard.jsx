import imdbIcon from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import tomatoIcon from "../assets/PngItem_1381056 1.png";
import "../styles/MovieCard.css";
import { Link } from "react-router-dom";
import heartactive from "../assets/Heart.svg";
import redHeartIcon from "../assets/icons8-heart-suit-48.png";

const MovieCard = ({ data, toggleFavorite, favorites }) => {
  const { poster_path, id, title, genre_ids } = data;
  const image_path = " https://image.tmdb.org/t/p/w500";

  const isFavorite = favorites[id] || false;

  const handleFavoriteClick = () => {
    toggleFavorite(id);
  };

  return (
    <div className="movie-card" data-testid="movie-card">
      <div className="card-img">
        {data.poster_path ? (
          <Link to={`/MovieDetails/${id}`}>
            <img
              className="movie-cover"
              src={`${image_path}/${data.poster_path}`}
              alt={title}
              data-testid="movie-poster"
            />
          </Link>
        ) : (
          <div className="movie-placeholder">No image found</div>
        )}
        <div onClick={handleFavoriteClick} className="heart-ellipse cursor-pointer">
          {isFavorite ? (
            <img className="red-heart-icon" src={redHeartIcon} alt="" />
            ) : (
              <img src={heartactive} alt="" />
          )}
        </div>
      </div>
      <div className="card-details">
        <p className="release-date" data-testid="movie-release-date">
          {data.release_date}
        </p>
        <h5 className="movie-title" data-testid="movie-title">
          {data.title}
        </h5>
        <div className="ratings flex justify-between">
          <span className="flex gap">
            <img src={imdbIcon} alt="imbd-icon" />
            <p className="imdb-rating">{data.vote_average} / 10</p>
          </span>
          <span className="flex gap">
            <img src={tomatoIcon} alt="" />
            <p className="tomato-rating">97%</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
