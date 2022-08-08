// import axios from 'axios';
// import { NavLink } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { SearchForm } from '../components/SearchForm';
// import { useSearchParams } from 'react-router-dom';

// export const SearchMovies = () => {
//   const [search, setSearch] = useState(false);
//   const [query, setQuery] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams();

//   const paramsFilter = searchParams.get('query') ?? '';

//   useEffect(() => {
//     if (!paramsFilter) {
//       return;
//     }

//     const myKey = '7deaebc33c33e451d965c0906173f1c4';
//     const fetchRes = async () => {
//       const res = await axios
//         .get(
//           `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&query=${paramsFilter}&language=en-US&page=1&include_adult=false`
//         )
//         .then(movies => {
//           console.log('movies.data.results :>> ', movies.data.results);
//           return setSearch(movies.data.results);
//         })
//         .catch(error => new Error(error));

//       return res;
//     };

//     fetchRes();
//   }, [paramsFilter]);

//   const handleSubmit = e => {
//     e.preventDefault();

//     const { value } = e.target.elements.query;
//     const lowerValue = value.toLowerCase();
//     value ? setSearchParams({ query: lowerValue }) : setSearchParams({});

//     e.target.reset();
//   };

//   const changeFilter = value => {
//     setSearchParams(value !== '' ? { filter: value } : {});
//   };

//   return (
//     <div>
//       <div>
//         <SearchForm
//           query={query}
//           handleSubmit={handleSubmit}
//           onChange={setQuery}
//         />
//       </div>
//       {search &&
//         search.map(el => {
//           return (
//             <li key={el.id}>
//               <NavLink to={`/movies/${el.id}`}>{el.title}</NavLink>
//             </li>
//           );
//         })}
//     </div>
//   );
// };
