import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from 'path/to/pages/Home';
// import { Movies } from 'path/to/pages/Movies';
// import { NotFound } from 'path/to/pages/NotFound';
// import { MoviesDetails } from 'path/to/pages/MoviesDetails';
// import { NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Movies">Movies</NavLink>
        {/* <Link to="/products/h-1" state={{ from: "/dashboard?name=hoodie" }}> через state бросам на кнопку путь назад анпример в /product*/}
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        {/* <Route path="/Movies" element={<Movies />} />
        <Route path="/Movies/:id" element={<MoviesDetails />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
