import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#3d3d3d')};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const NotFoundWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 800px;
  align-items: center;
  justify-content: center;
  justify-self: center;
  width: 100vw;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const NotFoundRow = styled.div`
  display: grid;
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

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.p`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
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
  font-size: 90px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 60px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#fff' : '#010606')};
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

export const NotFoundWrap = styled.div`
    padding: 24px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const NotFoundLinksContainer = styled.div`
    display: flex;
    justify-content: left;
`

export const NotFoundLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const NotFoundLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const NotFoundLinkTitle = styled.h1`
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: bold;
`

export const NotFoundLink = styled(Link)`
    color: #3d3d3d;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 16px;

    &:hover {
    color: #d1312c;
    font-weight: bold;
    text-decoration: none;
    transform: translate(0%);
    transition: 0.25s ease-in-out ;
  }
`

