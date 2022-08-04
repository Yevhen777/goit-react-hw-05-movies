import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home';
import { InfoMovies } from './InfoMovies';
import { MovieCredits } from './MovieCredits';
import { MoviesReviews } from './MoviesReviews';

import { SearchMovies } from '../pages/Movies';

// import { NotFound } from 'path/to/pages/NotFound';

export const App = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<InfoMovies />}>
          <Route path="cast" element={<MovieCredits />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route>
        <Route path="/movies" element={<SearchMovies />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
