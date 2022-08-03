import axios from 'axios';
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

export const MovieCredits = () => {
  const [actors, setActors] = useState(false);
  const { id } = useParams();
  console.log('cast id :>> ', id);

  useEffect(() => {
    console.log('useEffect');
    const myKey = '7deaebc33c33e451d965c0906173f1c4';
    const fetchRes = async () => {
      const res = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${myKey}&language=en-US`
        )
        .then(actor => {
          console.log(actor);
          setActors(actor);
        })
        .catch(error => new Error(error));

      return res;
    };

    fetchRes();
  }, [id]);
  return (
    <div>
      <p>123</p>
      {actors && <div>asd</div>}
    </div>
  );
};
