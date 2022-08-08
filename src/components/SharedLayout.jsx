import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, Container, Wrap } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Wrap>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Wrap>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
