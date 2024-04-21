import React, { useState, useEffect } from "react";
import CharacterList from "../components/characterList";
import LoadingSpinner from "../components/loadingSpinner";
import ErrorMessage from "../components/errorMessage";
import { getCharacters } from "../services/marvelAPI";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCharacters();
        setCharacters(response);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>X-Men: Fênix Negra</h1>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage error={error} />}
      {characters.length > 0 && <CharacterList characters={characters} />}
    </div>
  );
};

export default HomePage;
