import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import SearchResults from "./Pages/SearchResults";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/SearchBar"
            element={<SearchBar onSearch={handleSearch} />}
          />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
          <Route
            path="/SearchResults"
            element={<SearchResults query={searchQuery} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
