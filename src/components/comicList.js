import React from 'react';

const ComicList = ({ comics }) => {
    return (
        <div>
            <h2>Comics List</h2>
            <ul>
                {comics.map(comic => (
                    <li key={comic.id}>{comic.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ComicList;
