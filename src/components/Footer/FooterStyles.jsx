import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;

  @media (max-width: 640px) {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const LinkItem = styled(Link)`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: #fff;
    left: 6px;
  }
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }

  @media (max-width: 640px) {
    font-size: 8px;
    line-height: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 640px) {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: baseline;
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`;

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.5);
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  padding: 1rem;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 28px;
  }

  @media (max-width: 640px) {
    line-height: 22px;
    font-size: 14px;
    min-width: 100px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;

export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;

  @media (max-width: 1024px) {
    padding: 32px 0 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding: 32px 4px 16px;
    gap: 5px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`;
export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;

  @media (max-width: 640px) {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;
