import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  padding-bottom: 10px;
  padding: 10px;

  width: 100%;
  box-shadow: 0px 4px 2px -2px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  width: 100%;
`;

export const Link = styled(NavLink)`
  width: 100%;

  padding: 10px;

  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;

  padding-bottom: 5px;
`;
export const InfoContainer = styled.div`
  display: flex;
`;

export const InfoText = styled.div`
  margin-bottom: 10px;
  padding: 10px;
`;
export const InfoActor = styled.div`
  box-shadow: 0px 4px 2px -2px rgba(0, 0, 0, 0.12);
`;

export const CastLink = styled(NavLink)`
  display: flex;
  justify-content: columns;
  margin-bottom: 5px;
  margin-left: 40px;
`;

export const Input = styled.input`
  :focus {
    border: 3px solid rgb(32, 219, 233);
    border-radius: 5px;
    color: rgb(2, 10, 10);
    outline: none;
  }
`;

export const Form = styled.form`
  margin-top: 10px;
  border-radius: 3px;
  overflow: hidden;
`;
export const ActorInfo = styled.li`
  margin-bottom: 20px;
`;
