import { useParams } from 'react-router-dom';
import { ActorInfo } from './SharedLayout.styled';
import { useEffect, useState } from 'react';
import { getCredits } from '../services';

export const MovieCredits = () => {
  const [actors, setActors] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchRes = async id => {
      await getCredits(id)
        .then(actor => {
          setActors(actor.data.cast);
        })
        .catch(error => new Error(error));
    };

    fetchRes(id);
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
