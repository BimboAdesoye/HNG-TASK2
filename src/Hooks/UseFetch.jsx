import axios from "axios";
import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getFetchedData = async () => {
    try {
      const fetchedUrl = await axios.get(url);
      const slicedData = fetchedUrl.data.results.slice(0, 10);
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

  return { data, loading, error };
};

export default UseFetch;
