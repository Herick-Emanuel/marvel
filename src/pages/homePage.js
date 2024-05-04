import React from 'react';
import CharacterList from '../components/characterList';
import ComicList from '../components/comicList';
import ErrorMessage from '../components/errorMessage';
import LoadingSpinner from '../components/loadingSpinner';
import { getComics } from '../services/marvelAPI';
import { useState, useEffect } from 'react';
import '../index.css';


const HomePage = () => {
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComics = async () => {
            try {
                const comicsData = await getComics();
                setComics(comicsData);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchComics();
    }, []);

    return (
        <div>
            <h1>Marvel Universe</h1>
            {loading ? <LoadingSpinner /> : null}
            {error ? <ErrorMessage message={error} /> : null}
            <CharacterList />
            <ComicList comics={comics} />
        </div>
    );
};

export default HomePage;
