import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Button } from "../../StyledButton";

export const NewsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #3d3d3d;
  padding-bottom: 30px;
  padding-top: 30px;
`;
export const ActivityNewsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;
  grid-gap: 30px;
  @media screen and (max-width: 1380px) {
    grid-template-columns: 1fr;
    padding: 0 30px 30px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 30px 30px;
  }
`;

export const NewsWrapper = styled.div`
  max-width: 1500px;
  margin: 0px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 30px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const ArticleCard = styled(Card)`
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.25s ease-in-out;
  }
`;

export const NewsIcon = styled(Card.Img)`
  height: 250px;
  object-fit: scale-down;
  justify-content: center;
  margin-bottom: 10px;
  @media screen and (max-width: 1380px) {
    height: 200px;
    width: 200px;
  }

  @media screen and (max-width: 768px) {
    height: 150px;
    width: 150px;
  }
`;

export const NewsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const NewsH2 = styled(Card.Title)`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
`;

export const NewsP = styled(Card.Subtitle)`
  margin-top: 10px;
  font-size: 1rem;
  text-align: center;
`;
export const ActivitiesH2 = styled(Card.Title)`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
`;

export const ActivitiesP = styled(Card.Subtitle)`
  margin-top: 10px;
  font-size: 1.5rem;
  text-align: center;
  max-width: 500px;

  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
    max-width: 300px;
  }
`;

export const EventsCard = styled(Card)`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  height: 700px;
  &:hover {
    transform: scale(1.05);
    transition: all 0.25s ease-in-out;
    cursor: pointer;
  }
`;

export const EventsIcon = styled(Card.Img)`
   height: 400px;
  object-fit: scale-down;
  justify-content: center;
  margin-bottom: 10px;
  @media screen and (max-width: 1380px) {
    height: 3500px;
    width: 350px;
  }

  @media screen and (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
`;

export const EventsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const EventsH2 = styled(Card.Title)`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  padding-bottom: 30px;
`;

export const EventsP = styled(Card.Subtitle)`
  max-width: 250px;
  font-size: 1.2rem;
  text-align: center;
`;
export const DetailsButton = styled(Button)`
  font-size: 16px;
  margin-top: auto;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  text-align: center;
  max-width: 100%;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
