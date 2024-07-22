import { useEffect, useState } from "react";
import styles from "../style/search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "b5b154da01ab49ac96f7097752154128";

export default function Search({ setFood }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
