import axios from 'axios';
import {
  ImgContainer,
  InfoContainer,
  InfoText,
  CastLink,
  InfoActor,
} from './SharedLayout.styled';
import { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { TiArrowLeft } from 'react-icons/ti';
import { useLocation } from 'react-router-dom';

export const InfoMovies = () => {
  const [info, setInfo] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const myKey = '7deaebc33c33e451d965c0906173f1c4';
    const fetchRes = async () => {
      const res = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${myKey}&language=en-US`
        )
        .then(movies => {
          setInfo(movies.data);
        })
        .catch(error => new Error(error));

      return res;
    };

    fetchRes();
  }, [id]);

  return (
    <div>
      <ImgContainer>
        {info && (
          <NavLink to={backLinkHref}>
            <TiArrowLeft />
            Go back
          </NavLink>
        )}
      </ImgContainer>

      {info && (
        <InfoContainer>
          <img
            src={'https://image.tmdb.org/t/p/w300' + info.poster_path}
            alt="film poster"
          />

          <InfoText>
            <h2>{info.title}</h2>
            <p>vote average: {info.vote_average}</p>
            <h3>Overview</h3>
            <p>{info.overview}</p>
            <h3>Genres</h3>
            {info.genres.map(infoMovie => {
              return <p key={infoMovie.id}>{infoMovie.name}</p>;
            })}
          </InfoText>
        </InfoContainer>
      )}

      <InfoActor>
        <p>Additional information</p>

        <CastLink to={`cast`}>Cast</CastLink>
        <CastLink to={`reviews`}>Reviews</CastLink>
      </InfoActor>

      <Outlet />
    </div>
  );
};
