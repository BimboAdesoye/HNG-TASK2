import "../styles/MovieDetails.css";
import SideBar from "../components/SideBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieDetails = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // const image_path = " https://image.tmdb.org/t/p/w500";
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
   console.log(data); 
 }, [data]);

  useEffect(() => {
    getFetchedData();
  }, []);


  // const { backdrop_path } = data;

  return (
    <div>
      <SideBar />
      {/* <div className="movie-">
        <img src={`${image_path}/${backdrop_path}`} alt="" />
      </div> */}
    </div>
  );
};

export default MovieDetails;
