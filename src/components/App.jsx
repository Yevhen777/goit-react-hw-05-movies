import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home';
import { InfoMovies } from './InfoMovies';
import { MovieCredits } from './MovieCredits';
import { MoviesReviews } from './MoviesReviews';

// import { Movies } from '../pages/Movies';
// import { NotFound } from 'path/to/pages/NotFound';
// import { MoviesDetails } from 'path/to/pages/MoviesDetails';
// import { NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      {/* <Link to="/products/h-1" state={{ from: "/dashboard?name=hoodie" }}> через state бросам на кнопку путь назад анпример в /product*/}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<InfoMovies />}>
          <Route path="cast" element={<MovieCredits />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
