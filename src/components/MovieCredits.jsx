import axios from 'axios';
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

export const MovieCredits = () => {
  const [actors, setActors] = useState(false);
  console.log(actors);

  const { id } = useParams();

  useEffect(() => {
    const myKey = '7deaebc33c33e451d965c0906173f1c4';
    const fetchRes = async () => {
      const res = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${myKey}&language=en-US`
        )
        .then(actor => {
          setActors(actor.data.cast);
        })
        .catch(error => new Error(error));

      return res;
    };

    fetchRes();
  }, [id]);
  return (
    <div>
      <ul>
        {actors &&
          actors.slice(1, 20).map(actor => (
            <li key={actor.id}>
              {
                <img
                  src={'https://image.tmdb.org/t/p/w200' + actor.profile_path}
                  alt="actor"
                />
              }
              {actor.name}
            </li>
          ))}
      </ul>
    </div>
  );
};
