import { Routes, Route } from 'react-router-dom';
import { InfoMovies } from './InfoMovies';
import { MovieCredits } from './MovieCredits';
import { MoviesReviews } from './MoviesReviews';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';
import { NotFound } from './NotFound';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies/:id" element={<InfoMovies />}>
            <Route path="cast" element={<MovieCredits />} />
            <Route path="reviews" element={<MoviesReviews />} />
          </Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
