import axios from 'axios';
// import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SearchForm } from '../components/SearchForm';

export const SearchMovies = () => {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const myKey = '7deaebc33c33e451d965c0906173f1c4';
    const fetchRes = async () => {
      const res = await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&page=1&include_adult=false`
        )
        .then(movies => {
          return setSearch(movies);
        })
        .catch(error => new Error(error));

      return res;
    };

    fetchRes();
  }, []);
  const handleSubmit = e => {
    e.preventDefault();

    const elForm = e.target.elements.query.value;
    if (query !== elForm && e.target.elements.query.value.trim() !== '') {
      setQuery(elForm);
      setSearch([]);

      e.target.reset();
      return;
    }

    if (e.target.elements.query.value.trim() === '') {
      alert('Введите запрос!');
      return;
    }
  };

  return (
    <div>
      <div>
        <SearchForm handleSubmit={handleSubmit} />
      </div>
      ;
    </div>
  );
};
