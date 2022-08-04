import axios from 'axios';

import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Circles } from 'react-loader-spinner';

export const Home = () => {
  const [onLoading, setOnLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myKey = '7deaebc33c33e451d965c0906173f1c4';
    const fetchRes = async () => {
      setOnLoading(true);
      const res = await axios
        .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${myKey}`)
        .then(movies => {
          return setMovies(movies.data.results);
        })
        .catch(error => new Error(error))
        .finally(() => {
          setOnLoading(false);
        });

      return res;
    };

    fetchRes();
  }, []);

  return (
    <div>
      {onLoading && <Circles color="#00BFFF" height={80} width={80} />}
      <div>
        <h2>Tranding today</h2>
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
