import React from "react";

const ComicList = ({ comics }) => {
  return (
    <div>
      <h2>Quadrinhos</h2>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>
            <strong>{comic.title}</strong>:{" "}
            {comic.description || "Sem descrição"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComicList;
