import styled from "styled-components";
import { Alert, Form } from "react-bootstrap";

import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";


export const SubmissaoContainer = styled.div`
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

export const Atencao = styled(Alert)`
border-radius: 10px;
color: #fff;
background-color: #d1312c;
border: 1px solid #f2f2f2;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;

&:hover {
    z-index: 2;
    transform: scale(1.02);
    transition: all 0.25s ease-in-out;
  }
`;

export const Requisitos = styled(Atencao)`
color: #000;
background-color: #EDEDED;
`;

export const IconAtencao = styled(FaExclamationTriangle)`
  width: 70px;
  height: 70px;
  @media screen and (max-width: 430px) {
    width: 40px;
    height: 40px;
  }
`;
export const IconTextTipologia = styled.div`
  display: grid;
  grid-template-columns: 0.08fr 1fr;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const TextTipologia = styled.div`
  display: grid;
  grid-template-rows: 1fr 0,5fr;
`;