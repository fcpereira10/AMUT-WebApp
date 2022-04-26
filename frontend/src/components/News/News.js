import React, { Component } from "react";
import {
  BtnWrap,
  Column1,
  Column2,
  ContentContainer,
  DetailsButton,
  Heading,
  Img,
  ImgWrap,
  InfoRow,
  InfoWrapper,
  NewsCard,
  NewsContainer,
  NewsH2,
  NewsIcon,
  NewsLink,
  NewsLinkItems,
  NewsLinksContainer,
  NewsLinksWrapper,
  NewsLinkTitle,
  NewsP,
  NewsRow,
  NewsWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./StyledNews";
import Icon1 from "../../images/news.svg";
import { Button } from "../StyledButton";

export default class News extends Component {
  render() {
    return (
      <>
        <ContentContainer>
          <NewsContainer>

            <NewsH2>Notícias</NewsH2>

            <NewsWrapper>
              <NewsCard>
                <NewsRow>
                  <Column1>
                    <TextWrapper>
                      <Heading lightText={false}>
                        Convocatória Assembleia Geral Ordinária 2022: Relatório
                        e Contas
                      </Heading>
                      <TopLine>#irs #amut</TopLine>
                      <Subtitle lightTextDesc={false}>
                        A AMUT (Contribuinte 501 634 851) pertence à lista de
                        entidades que podem beneficiar da consignação de 0,5% do
                        IRS e do IVA suportado. Esta consignação não tem
                        qualquer custo para o contribuinte,…
                      </Subtitle>
                      <BtnWrap>
                        <Button to="/">Continuar a Ler</Button>
                      </BtnWrap>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrap>
                      <Img src={Icon1} alt="404" />
                    </ImgWrap>
                  </Column2>
                </NewsRow>
              </NewsCard>
              <NewsCard>
                <NewsRow>
                  <Column1>
                    <TextWrapper>
                      <Heading lightText={false}>
                        Convocatória Assembleia Geral Ordinária 2022: Relatório
                        e Contas
                      </Heading>
                      <TopLine>#saber #amut #caminhadas</TopLine>
                      <Subtitle lightTextDesc={false}>
                        Parece que não encontramos a página que estava à
                        procura.
                      </Subtitle>
                      <BtnWrap>
                        <Button to="/">Continuar a Ler</Button>
                      </BtnWrap>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrap>
                      <Img src={Icon1} alt="404" />
                    </ImgWrap>
                  </Column2>
                </NewsRow>
              </NewsCard>
              <NewsCard>
                <NewsRow>
                  <Column1>
                    <TextWrapper>
                      <Heading lightText={false}>
                        Convocatória Assembleia Geral Ordinária 2022: Relatório
                        e Contas
                      </Heading>
                      <TopLine>#saber #amut #caminhadas</TopLine>
                      <Subtitle lightTextDesc={false}>
                        Parece que não encontramos a página que estava à
                        procura.
                      </Subtitle>
                      <BtnWrap>
                        <Button to="/">Continuar a Ler</Button>
                      </BtnWrap>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrap>
                      <Img src={Icon1} alt="404" />
                    </ImgWrap>
                  </Column2>
                </NewsRow>
              </NewsCard>
            </NewsWrapper>
          </NewsContainer>
        </ContentContainer>
      </>
    );
  }
}
