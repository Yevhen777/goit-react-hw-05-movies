import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SearchForm } from '../components/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getMovies } from '../services';

const Movies = () => {
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const paramsFilter = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!paramsFilter) {
      return;
    }

    const fetchRes = async () => {
      getMovies(paramsFilter)
        .then(movies => {
          return setSearch(movies.data.results);
        })
        .catch(error => new Error(error));
    };

    fetchRes();
  }, [paramsFilter]);

  const handleSubmit = e => {
    e.preventDefault();

    const { value } = e.target.elements.query;
    const lowerValue = value.toLowerCase();
    value ? setSearchParams({ query: lowerValue }) : setSearchParams({});

    e.target.reset();
  };

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  return (
    <div>
      <div>
        <SearchForm
          query={query}
          handleSubmit={handleSubmit}
          onChange={setQuery}
          changeFilter={changeFilter}
        />
      </div>
      {search &&
        search.map(el => {
          return (
            <li key={el.id}>
              <NavLink to={`/movies/${el.id}`} state={{ from: location }}>
                {el.title}
              </NavLink>
            </li>
          );
        })}
    </div>
  );
};

export default Movies;
