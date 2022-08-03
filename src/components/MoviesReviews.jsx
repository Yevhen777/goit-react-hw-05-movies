import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

export const MoviesReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const myKey = '7deaebc33c33e451d965c0906173f1c4';
    const fetchRes = async () => {
      const res = await axios
        .get(
          `https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=${myKey}&language=en-US&page=1`
        )
        .then(movies => {
          console.log(movies);
          setReviews(movies.data);
        })
        .catch(error => new Error(error));

      return res;
    };

    fetchRes();
  }, []);

  return (
    <div>
      <div>Ghbdtn</div>
      {/* <Outlet /> */}
    </div>
  );
};
