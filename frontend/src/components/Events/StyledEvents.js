import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Button } from "../StyledButton";
import { FaClock, FaCalendarAlt, FaMapMarkerAlt, FaInfo } from "react-icons/fa";

export const ContentContainer = styled.div`
  background-color: #fff;
  display: absolute;
`;

export const EventsContainer = styled.div`
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const EventsWrapper = styled.div`
  margin: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  align-content: center;
  justify-content: center;
  grid-gap: 20px;
  padding-bottom: 60px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 30px 30px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 30px 30px;
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
    padding: 0 30px 30px;
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
  height: 100%;

  border: 1px solid #f2f2f2;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.25s ease-in-out;
    cursor: pointer;
  }
`;

export const EventsIcon = styled(Card.Img)`
  border-radius: 10px;
  height: 300px;
  object-fit: cover;
  &:hover {
    transform: scale(1.05);
    transition: all 0.25s ease-in-out;
  }
`;
export const EventImage = styled(EventsIcon)`
  height: 300px;
  width: 300px;
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

export const EventsH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;

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
  max-width: 240px;
  font-size: 1.2rem;
  text-align: center;
  @media screen and (max-width: 1100px) {
    max-width: 230px;
  }
  @media screen and (max-width: 800px) {
    max-width: 200px;
  }
  @media screen and (max-width: 580px) {
    max-width: 200px;
  }
`;
export const DetailsButton = styled(Button)`
  font-size: 16px;
`;

export const TipologiaWrapper = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 10px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const IconHora = styled(FaClock)`
  width: 60px;
  height: 60px;
`;
export const IconCalendario = styled(FaCalendarAlt)`
  width: 60px;
  height: 60px;
`;
export const IconLocal = styled(FaMapMarkerAlt)`
  width: 60px;
  height: 60px;
`;
export const IconInfo = styled(FaInfo)`
  width: 60px;
  height: 60px;
`;

export const IconTextTipologia = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  padding-bottom: 20px;
`;
export const TextTipologia = styled.div`
  padding-left: 10px;
  display: grid;
`;
export const TipologiaTitle = styled(Card.Title)`
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
`;
export const TipologiaValor = styled.h4`
  color: #d1312c;
  font-weight: bold;
  font-size: 1.2rem;
`;
export const DescriptionText = styled(TipologiaValor)`

  color: #000;
  font-weight: lighter;
  line-height: 2rem;
  font-size: 1.2rem;
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(1fr, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart
      ? `'col2
     col1'`
      : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart
        ? `'col2'
        'col1'`
        : `'col2 col2' 'col1 col1'`};
  }
`;
export const Column1 = styled.div`
  min-width: 200px;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  
  @media screen and (max-width: 768px) {
    min-width: 0px;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  text-align: right !important;
  grid-area: col2;
`;
