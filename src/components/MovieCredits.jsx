import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ActorInfo } from './SharedLayout.styled';
import { useEffect, useState } from 'react';

export const MovieCredits = () => {
  const [actors, setActors] = useState(false);
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
          actors.slice(1, 20).map(actor => {
            if (!actor.profile_path) {
              return actor.profile_path;
            }
            return (
              <ActorInfo key={actor.id}>
                {
                  <img
                    src={'https://image.tmdb.org/t/p/w200' + actor.profile_path}
                    alt="actor"
                  />
                }
                <p>{actor.name}</p>
                <p>character: {actor.character}</p>
              </ActorInfo>
            );
          })}
      </ul>
    </div>
  );
};
