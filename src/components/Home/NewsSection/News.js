import React from "react";
import { Component } from "react";
import {
  NewsCard,
  NewsContainer,
  NewsH1,
  NewsWrapper,
  NewsIcon,
  NewsH2,
  NewsP,
  DetailsButton,
  ActivityNewsWrapper,
  ActivitiesH2,
  ActivitiesP,
} from "../NewsSection/StyledNews";
import Icon1 from "../../../images/news.svg";
import Icon2 from "../../../images/buracas do casmilo.png";
import { Button } from "../../StyledButton";

export default class News extends Component {
  render() {
    return (
      <>
        <NewsContainer id="News">
          <ActivityNewsWrapper>
          
          <NewsWrapper>
          <NewsH1>Atividade em Destaque</NewsH1>
          <NewsCard>
              <NewsIcon variant="top" src={Icon2} />
              <NewsCard.Body>
                <ActivitiesH2>27/03/2022</ActivitiesH2>
                <ActivitiesP>
                  AMUT'Caminhando<p>Caminhada as Buracas do Casmilo</p>
                </ActivitiesP>
              </NewsCard.Body>
              <DetailsButton to="">
                Ver Detalhes
              </DetailsButton>
            </NewsCard>
            <Button primary="true" dark="true" to="/eventos"> 
              Ver mais Atividades
          </Button>
          </NewsWrapper>
          
          <NewsWrapper>
          <NewsH1>Notícia em Destaque</NewsH1>
            <NewsCard>
              <NewsIcon variant="top" src={Icon1} />
              <NewsCard.Body>
                <NewsH2>
                  Convocatória Assembleia Geral Ordinária 2022: Relatório e
                  Contas
                </NewsH2>
                <NewsP className="mb-2 text-muted">
                  Publicado em 03/03/2022
                </NewsP>
              </NewsCard.Body>
              <DetailsButton to="/eventos">
                Ver Notícia
              </DetailsButton>
            </NewsCard>
            <Button primary="true" dark="true" to="/eventos"> 
              Ver mais Notícias
          </Button>
          </NewsWrapper>
          </ActivityNewsWrapper>
          
        </NewsContainer>
      </>
    );
  }
}
