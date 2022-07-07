import React, { Component } from "react";
import {
  DetailsButton,
  EventsCard,
  NewsIcon,
  Heading,
} from "./StyledNews";
import Spinner from 'react-bootstrap/Spinner';
import Icon1 from "../../../images/news.svg";
import moment from "moment";
import {
  Subtitle,
  NewsP,
} from "../../News/StyledNews";

export default class NewsCard extends Component {

  render() {
    function fn(text, count){
      return text.slice(0, count) + (text.length > count ? "..." : "");
  }
    return (
      <>
      <EventsCard>
          <NewsIcon src={"http://localhost:3000/static/"+ this.props.data._id + ".png"}  onError={(e)=>{e.target.onerror = null; e.target.src=Icon1}}  alt="news" />
          <Heading lightText={false}>{this.props.data.title}</Heading>
          <Subtitle lightTextDesc={false}>
 
          { fn( this.props.data.description, 200)}
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
