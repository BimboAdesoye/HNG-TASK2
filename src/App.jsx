import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
