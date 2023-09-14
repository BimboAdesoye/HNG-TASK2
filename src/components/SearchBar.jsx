import { useState } from "react";
import SearchIcon from "../assets/Search.svg";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    onSearch(query);
  };
  return (
    <div className="search-bar">
      <form action="" onSubmit={handleSearch} className="flex justify-between">
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <img className="search-icon" src={SearchIcon} alt="search-icon" />
      </form>
    </div>
  );
};

export default SearchBar;
