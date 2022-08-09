import axios from 'axios';

export const getMovies = async paramsFilter => {
  const myKey = '7deaebc33c33e451d965c0906173f1c4';

  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&query=${paramsFilter}&language=en-US&page=1&include_adult=false`
  );

  return res;
};

export const getInfoMovies = async id => {
  const myKey = '7deaebc33c33e451d965c0906173f1c4';

  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${myKey}&language=en-US`
  );

  return res;
};

export const getReviews = async id => {
  const myKey = '7deaebc33c33e451d965c0906173f1c4';

  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${myKey}&language=en-US&page=1`
  );

  return res;
};

export const getCredits = async id => {
  const myKey = '7deaebc33c33e451d965c0906173f1c4';

  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${myKey}&language=en-US`
  );

  return res;
};
