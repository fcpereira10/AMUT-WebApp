import styled from 'styled-components'
import {Card} from 'react-bootstrap'
import { Button } from '../StyledButton';


export const ContentContainer = styled.div`
  background-color: #fff;
  display: absolute;
`;

export const EventsContainer = styled.div`
  height:100%;
  padding: 30px;
  display: flex;
  flex-direction: column;

`;

export const EventsWrapper = styled.div`
   padding-left: 30px;
  padding-right: 30px;

  margin: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  align-content: center;
  justify-content: center;
  grid-gap: 30px;
  padding-bottom: 60px;
  padding-top: 30px;
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
`

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

    &:hover {
        transform: scale(1.05);
        transition: all 0.25s ease-in-out;
        cursor: pointer
    }
`

export const EventsIcon = styled(Card.Img)`
    height: 100%;
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;

`

export const EventsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const EventsH2 = styled(Card.Title)`
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    padding-bottom: 30px;
`

export const EventsP = styled(Card.Subtitle)`
    margin-top: 10px;        
    font-size: 1rem;
    text-align: center;
`
export const DetailsButton = styled(Button)`
font-size: 16px;
`


