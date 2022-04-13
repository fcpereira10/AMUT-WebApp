import styled from "styled-components";
import { Card } from "react-bootstrap";


export const DadosPessoaisContainer = styled.div`
  height: 100%;
  display: flex;
  padding-bottom: 30px;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  max-width: 100%;
  margin: 0px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 30px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 30px 30px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 30px 30px;
  }
`;

export const DadosPessoaisTitle = styled(Card.Title)`
  text-align: left;
  font-size: 1.3rem;
  font-weight: bold;
`;