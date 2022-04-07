import styled from "styled-components";
import { Card } from "react-bootstrap";

import { FaStethoscope, FaPills, FaGlasses, FaTooth } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ContaCorrenteContainer = styled.div`
  height:100%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;

`;
export const TipologiaWrapper = styled.div`
  height: 100%;

  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
`;
export const HistoricWrapper = styled.div`
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

export const ContaCorrenteWrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  max-width: 100%;
  margin: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  padding-bottom: 30px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 30px 30px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 30px 30px;
  }
`;

export const ContaCorrenteCard = styled(Card)`
  background: #fff;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  padding: 30px;
  &:hover {
    z-index: 2;
    transform: scale(1.02);
    transition: all 0.25s ease-in-out;
    cursor: pointer;
  }
`;

export const ContaCorrenteIcon = styled(Card.Body)`
  height: 400px;
  width: 400px;
  @media screen and (max-width: 1580px) {
    height: 300px;
    width: 300px;
  }

  @media screen and (max-width: 965px) {
    height: 250px;
    width: 250px;
  }
`;

export const ContaCorrenteH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ContaCorrenteH2 = styled(Card.Title)`
  align-self: center;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
`;
export const TipologiaTitle = styled(Card.Title)`
  text-align: left;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const ContaCorrenteP = styled(Card.Subtitle)`
  margin-top: 10px;
  font-size: 1rem;
  text-align: center;
`;

export const IconTextTipologia = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const TextTipologia = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const TipologiaValor = styled.h4`
  @media screen and (max-width: 430px) {
    font-size: large;
  }
`;

export const IconMedicamentos = styled(FaPills)`
  width: 70px;
  height: 70px;
  @media screen and (max-width: 430px) {
    width: 40px;
    height: 40px;
  }
`;

export const IconAmbulatorio = styled(FaStethoscope)`
  width: 70px;
  height: 70px;
  @media screen and (max-width: 430px) {
    width: 40px;
    height: 40px;
  }
`;

export const IconEstomatologia = styled(FaTooth)`
  width: 70px;
  height: 70px;
  @media screen and (max-width: 430px) {
    width: 40px;
    height: 40px;
  }
`;

export const IconProteses = styled(FaGlasses)`
  width: 70px;
  height: 70px;
  @media screen and (max-width: 430px) {
    width: 40px;
    height: 40px;
  }
`;

export const Doc = styled(Link)`
  text-align: center;
  margin-top: 24px;
  color: #000;

  cursor: pointer;
  &:hover {
    color: #d1312c;
    transform: translate(0%);
    transition: 0.25s ease-in-out;
  }
`;
