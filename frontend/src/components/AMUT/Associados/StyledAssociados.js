import styled from "styled-components";
import { Alert, Card } from "react-bootstrap";
import { FaStethoscope, FaPills, FaGlasses, FaTooth, FaExclamationTriangle } from "react-icons/fa";


export const AssociadosContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#3d3d3d')};
  
  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;
export const AssociadosWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
  justify-content: center;

`;
export const TipologiaDiv = styled.div`
  height: 50px;
`;
export const ConsultasDiv = styled(TipologiaDiv)`
  height: 50px;
  @media screen and (max-width: 768px) {
    height: 80px;
  }
`;
export const SimulaçãoWrapper = styled.div`
  padding: 30px;
  padding-left: 60px; 
  padding-right: 60px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
export const ComparticipaçãoWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  padding-bottom: 30px;
`;
export const TipologiaWrapper = styled.div`
padding-top: 30px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 15px;
  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
  }

`;


export const AssociadosRow = styled.div`
  display: grid;
  padding-bottom: 60px;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart
      ? `'col2
     col1'`
      : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart
        ? `'col1'
        'col2'`
        : `'col1 col1' 'col2 col2'`};
  }
`;
export const SimulaçãoRow = styled.div`
  display: grid;
  grid-auto-rows: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart
      ? `'col2
     col1'`
      : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart
        ? `'col1'
        'col2'`
        : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`

  padding: 0 30px;
  grid-area: col1;
`;

export const Column2 = styled.div`

  padding: 0 30px;
  grid-area: col2;
`;

export const TextWrapper = styled.p`
  max-width: 540px;
`;
export const TopLine = styled.p`
  color: #d1312c;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
    padding-top: 30px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#fff' : '#010606')};
`;
export const SubHeading = styled.p`
  margin-bottom: 35px;
  font-size: 30px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#fff' : '#010606')};
  @media screen and (max-width: 430px) {
    font-size: 25px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;

  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 0 0 10px 0;
  padding-right: 0;
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

export const TipologiaTitle = styled(Card.Title)`
  text-align: left;
  font-size: 1.3rem;
  font-weight: bold;
`;
export const TipologiaValor = styled.h4`
  color: #d1312c;
  font-weight: bold;
  font-size: 2rem;
  @media screen and (max-width: 430px) {
    font-size: 1.5rem;
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
  grid-template-columns: 0.1fr 1fr;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const TextTipologia = styled.div`
  padding: 10px;
  display: grid;

`;