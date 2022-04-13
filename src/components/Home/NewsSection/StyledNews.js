import styled from 'styled-components'
import {Card} from 'react-bootstrap'
import { Button } from '../../StyledButton'
import { Link } from 'react-router-dom'

export const NewsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#3D3D3D;
    padding-bottom: 30px;
    padding-top: 30px;
    
`

export const NewsWrapper = styled.div`
    max-width: 1500px;
    margin: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 30px;
    padding: 0 50px 50px;
    padding-left: 30px;
    padding-right: 30px;

    @media screen and (max-width: 1380px){
        grid-template-columns: 1fr 1fr;
        padding: 0 30px 30px;
    }

    @media screen and (max-width: 768px){
        grid-template-columns:  1fr;
        padding: 0 30px 30px;
    }
`

export const NewsCard = styled(Card)`
   background: #fff;
    display: flex;
    flex-direction: column;
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
`

export const NewsIcon = styled(Card.Img)`
   height: 400px;
    width: 400px;
    justify-content: center;
    margin-bottom: 10px;
    @media screen and (max-width: 1380px){
        height: 250px;
        width: 250px;
    }

    @media screen and (max-width: 768px){
        height: 200px;
        width: 200px;
    }


`

export const NewsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const NewsH2 = styled(Card.Title)`
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
`

export const NewsP = styled(Card.Subtitle)`
    margin-top: 10px;        
    font-size: 1rem;
    text-align: center;
`
export const DetailsButton = styled(Button)`
font-size: 16px;
`