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
import { getInfoMovies } from '../services';

export const InfoMovies = () => {
  const [info, setInfo] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchRes = async id => {
      getInfoMovies(id)
        .then(movies => {
          setInfo(movies.data);
        })
        .catch(error => new Error(error));
    };

    fetchRes(id);
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
