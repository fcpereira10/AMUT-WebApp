import styled from "styled-components";
import { Card } from "react-bootstrap";

export const ServicesContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1380px) {
    height: 1200px;
  }

  @media screen and (max-width: 768px) {
    height: 1500px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1500px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;

  @media screen and (max-width: 1380px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px 20px;
  }
`;

export const ServicesCard = styled(Card)`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.25s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled(Card.Img)`
  height: 400px;
  width: 400px;
  justify-content: center;
  margin-bottom: 10px;
  @media screen and (max-width: 1380px) {
    height: 250px;
    width: 250px;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled(Card.Title)`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
`;

export const ServicesP = styled(Card.Subtitle)`
  margin-top: 10px;
  font-size: 1rem;
  text-align: center;
`;
