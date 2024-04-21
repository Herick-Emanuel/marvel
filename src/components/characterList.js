import React, { useEffect, useState } from "react";
import { getCharacters } from "../services/marvelAPI";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const charactersData = await getCharacters();
        console.log(charactersData);
        setCharacters(charactersData);
      } catch (error) {
        console.error("Erro ao buscar os personagens:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Personagens da Marvel</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;
