import axios from 'axios';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

export const MoviesReviews = () => {
  const [reviews, setReviews] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const myKey = '7deaebc33c33e451d965c0906173f1c4';
    const fetchRes = async () => {
      const res = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${myKey}&language=en-US&page=1`
        )
        .then(reviews => {
          setReviews(reviews.data.results);
        })
        .catch(error => new Error(error));

      return res;
    };

    fetchRes();
  }, [id]);

  return (
    <div>
      <ul>
        <div>
          {reviews.length > 0
            ? reviews.map(review => (
                <li key={review.id}>
                  <h3>Author: {review.author}</h3> {review.content}
                </li>
              ))
            : "We don't have any rewiews for this movie."}
        </div>
      </ul>
    </div>
  );
};
