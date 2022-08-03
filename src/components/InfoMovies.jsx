import axios from 'axios';
// import { Home } from '../pages/Home';
// import { link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';

export const InfoMovies = () => {
  const [info, setInfo] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const myKey = '7deaebc33c33e451d965c0906173f1c4';
    const fetchRes = async () => {
      const res = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${myKey}&language=en-US`
        )
        .then(movies => {
          setInfo(movies.data);
        })
        .catch(error => new Error(error));

      return res;
    };

    fetchRes();
  }, [id]);

  return (
    <div>
      {info && (
        <div>
          <div>{info.title}</div>
          <img
            src={'https://image.tmdb.org/t/p/w300' + info.poster_path}
            alt="film poster"
          />
        </div>
      )}
      <NavLink to={`cast`}>Cast</NavLink>
      <Outlet />
    </div>
  );
};
