import { useState } from "react";

import NavBar from "./components/Navbar";
import NumResults from "./components/NumResults";
import Search from "./components/Search";

import { useMovies } from "./components/useMovies";

import "./index.css";

export default function App() {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMovies(query);

  return (
    <NavBar>
      <Search query={query} setQuery={setQuery} />
      <NumResults movies={movies} />
    </NavBar>
  );
}
