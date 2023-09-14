import UseFetch from "../Hooks/UseFetch";

const SearchResults = ({ query }) => {
  const api_key = "7dcc494f1d421d3b46bbc5fd59a0ae84";
  const api_url = "https://api.themoviedb.org/3/search/movie";

  const { data } = UseFetch(`${api_url}?api_key=${api_key}&query=${query}`);

  ("`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)");

  return (
    <div>
      <h2>Movie Search Results</h2>
      <div>
        {data.length > 0 ? (
          <ul>
            {data.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
