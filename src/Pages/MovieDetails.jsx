import "../styles/MovieDetails.css";
import SideBar from "../components/SideBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import playButton from "../assets/Play.svg";
import axios from "axios";

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const api_key = "7dcc494f1d421d3b46bbc5fd59a0ae84";
  const { id } = useParams();
  const api_url = `https://api.themoviedb.org/3/movie/${id}`;

  const getFetchedData = async () => {
    try {
      const fetchedUrl = await axios.get(`${api_url}?api_key=${api_key}`);
      const slicedData = fetchedUrl.data;
      setData(slicedData);
      console.log(slicedData);
    } catch (error) {
      console.log("Error fetching data", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFetchedData();
  }, []);

  const image_path = "https://image.tmdb.org/t/p/w1280";

  const { backdrop_path, runtime, release_date, overview, title, genres } =
    data;

  return (
    <div className="single-movie">
      {loading && (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div className="error">
          <p>Failed to fetch data from the api...</p>
          <p>Refresh the Page</p>
        </div>
      )}
      <SideBar />
      <div className="movie-details">
        {backdrop_path ? (
          <div
            className="movie-details-img"
            style={{
              backgroundImage: `url(${image_path}${backdrop_path})`,
            }}
          >
            <div className="watch-video">
              <div className="watch-player">
                <img src={playButton} alt="" />
              </div>
              <p className="watch-video-text">Watch Trailer</p>
            </div>
          </div>
        ) : (
          <div>No backdrop image available</div>
        )}
        <div className="features">
          <div className="title-genre">
            <p data-testid="movie-title" className="movie-details-title">
              {title}
            </p>
            <div className="genres">
              {genres?.map((genre) => {
                return (
                  <div key={id} className="genre-details">
                    <p className="genres">{genre.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="extra-details">
            <p data-testid="movie-release-date" className="movie-release-date">
              {release_date}
            </p>
            <p data-testid="movie-runtime" className="movie-runtime">
              {runtime}m
            </p>
            <p data-testid="movie-overview" className="movie-overview">
              {overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
