import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  padding: 1rem;
  padding-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-row-gap: 1rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  align-items: center;
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;

  @media (max-width: 640px) {
    grid-area: 2 / 2 / 3 / 5;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 640px) {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  text-decoration: none;

  @media (max-width: 640px) {
    padding: 0.5rem;
    font-size: 20px;
  }
`;

export const StyledLink = styled(Link)`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  text-decoration: none; /* Menghilangkan underline */

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
