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
  Router,
  DetailsButton,
} from "../NewsSection/StyledNews";
import Icon1 from "../../../images/noticias.svg";
import { Button } from "../../StyledButton";

export default class News extends Component {
  render() {
    return (
      <>
        <NewsContainer id="News">
          <NewsH1>Notícias em Destaque</NewsH1>
          <NewsWrapper>
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
                Ver Notícias
              </DetailsButton>
            </NewsCard>

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
          </NewsWrapper>
          <Button primary="true" dark="true" to="/eventos"> 
              Ver mais Notícias
          </Button>
        </NewsContainer>
      </>
    );
  }
}
