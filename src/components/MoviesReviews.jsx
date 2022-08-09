import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../services';
// import axios from 'axios';

export const MoviesReviews = () => {
  const [reviews, setReviews] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchRes = async () => {
      await getReviews(id)
        .then(reviewsData => {
          setReviews(reviewsData.data.results);
        })
        .catch(error => new Error(error));
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
