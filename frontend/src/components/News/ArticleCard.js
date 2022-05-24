import React, { Component } from "react";
import {
  BtnWrap,
  Column1,
  Column2,
  Img,
  ImgWrap,
  NewsCard,
  NewsRow,
  Subtitle,
  TextWrapper,
  Heading,
  TopLine,
  NewsP,
  DetailsButton,
} from "./StyledNews";
import Icon1 from "../../images/news.svg";
import { Button } from "../StyledButton";
import moment from 'moment';
class Details extends Component {
  eventPage = (event) => {
    event.preventDefault();

    window.location.href = `/noticias/${this.props.id}`;
  };

  render() {
    return <DetailsButton to="" onClick={this.eventPage}>Continuar a Ler</DetailsButton>;
  }
}
export default class ArticleCard extends Component {

  render() {
    function fn(text, count){
      return text.slice(0, count) + (text.length > count ? "..." : "");
  }
    return (
      <>
        <NewsCard>
          <NewsRow>
            <Column1>
              <TextWrapper>
              
                <Heading lightText={false}>
                {this.props.data.title}
                </Heading>
                <TopLine>#saber #amut #caminhadas</TopLine>
                <Subtitle lightTextDesc={false}>
                  {fn( this.props.data.description, 400)}
                </Subtitle>
                <NewsP>Publicado em {moment(this.props.data.date).format("DD/MM/YYYY")}</NewsP>
                <BtnWrap>
                  <Details id={this.props.data._id}/>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Icon1} alt="news" />
              </ImgWrap>
            </Column2>
          </NewsRow>
        </NewsCard>
      </>
    );
  }
}
