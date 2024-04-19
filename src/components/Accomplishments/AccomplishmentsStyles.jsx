import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media (max-width: 768px) {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const Box = styled.div`
  background: #212d45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media (max-width: 1024px) {
    height: 210px;
  }

  @media (max-width: 768px) {
    height: 135px;
    padding: 16px;
  }

  @media (max-width: 640px) {
    height: 110px;
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`;
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 640px) {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: 640px) {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    line-height: 32px;
    font-size: 20px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media (max-width: 640px) {
    width: 160px;
    justify-content: space-between;
  }
`;
