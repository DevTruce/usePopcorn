import { useState } from "react";

import NavBar from "./components/Navbar";
import Search from "./components/Search";
import "./index.css";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <NavBar>
      <Search query={query} setQuery={setQuery} />
    </NavBar>
  );
}
