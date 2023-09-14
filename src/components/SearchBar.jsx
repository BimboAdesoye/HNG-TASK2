// import { useState } from "react";
import SearchIcon from "../assets/Search.svg";
import "../styles/SearchBar.css";

const SearchBar = ({ searchKey, searchMovies, setSearchKey }) => {
  return (
    <div className="search-bar">
      <form onSubmit={searchMovies} className="flex justify-between">
        <input
          type="text"
          value={searchKey}
          placeholder="What do you want to watch?"
          onChange={(e) => setSearchKey(e.target.value)}
        />
      <img className="search-icon" src={SearchIcon} alt="search-icon" />
      </form>
    </div>
  );
};

export default SearchBar;
