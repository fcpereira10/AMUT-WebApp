import React, { Component } from "react";
import {
  ArticleCard,
  EventsIcon,
  EventsH2,
  EventsP,
  DetailsButton,
  EventsCard,
  NewsIcon,
} from "./StyledNews";

import Icon1 from "../../../images/news.svg";
import moment from "moment";
import {
  Column1,
  Heading,
  NewsRow,
  Subtitle,
  TextWrapper,
  TopLine,
  NewsP,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "../../News/StyledNews";
import { Button } from "../../StyledButton";

export default class NewsCard extends Component {
  
  render() {
    return (
      <>
        <EventsCard>
          <NewsIcon src={Icon1} alt="news" />
          <Heading lightText={false}>{this.props.data.title}</Heading>
          <Subtitle lightTextDesc={false}>
            {this.props.data.description}
          </Subtitle>
          <NewsP>
       
            Publicado em {moment(this.props.data.date).format("DD/MM/YYYY")}
          </NewsP>
          <DetailsButton to={`/noticias/${this.props.data._id}`}>Continuar a Ler</DetailsButton>
        </EventsCard>
      </>
    );
  }
}
